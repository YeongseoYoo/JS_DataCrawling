import axios from 'axios';
import * as cheerio from 'cheerio';
import iconv from 'iconv-lite';

const baseUrl = 'https://finance.naver.com/item/sise_day.naver?code=005930';

async function fetchStockPrice() {
    try {
        const dailyStock = [];
        const response = await axios.get(baseUrl, { responseType: 'arraybuffer' , headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
          }},);
        const decodedData = iconv.decode(response.data, "euc-kr");
        const $ = cheerio.load(decodedData.toString("utf-8"));

        $('table.type2 tbody tr').each((index, row) => {
            const columns = $(row).find('td');
            const date = columns.eq(0).text().trim().replace(/\s+/g, ''); // Remove whitespace
            const closingPrice = columns.eq(1).text().trim().replace(/\s+/g, ''); // Remove whitespace

            // Check if date and closing price are not empty
            if (date && closingPrice) {
                const stockData = {
                    date,
                    closingPrice,
                    change: columns.eq(2).text().trim(),
                    changeRate: columns.eq(3).text().trim(),
                    openPrice: columns.eq(4).text().trim(),
                    highPrice: columns.eq(5).text().trim(),
                    lowPrice: columns.eq(6).text().trim(),
                };
                dailyStock.push(stockData);
            }
        });
        return dailyStock;
    } catch (error) {
        console.error('Error fetching stock price:', error);
        return [];
    }
}

fetchStockPrice()
    .then(data => {
        console.log('Daily stock price:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
