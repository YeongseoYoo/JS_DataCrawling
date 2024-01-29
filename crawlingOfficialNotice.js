import axios from 'axios';
import * as cheerio from 'cheerio';
import iconv from 'iconv-lite';

async function fetchNotice(pageNumber) {
    try {
        const noticeList = [];
        const baseUrl = `https://finance.naver.com/item/news_notice.naver?code=005930&page=${pageNumber}`;
        const response = await axios.get(baseUrl, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
            },
        });
        const decodedData = iconv.decode(response.data, 'euc-kr');
        const $ = cheerio.load(decodedData.toString('utf-8'));

        $('table.type6 tbody tr').each((index, row) => {
            const title = $(row).find('.title a').text().trim();
            const info = $(row).find('.info').text().trim();
            const date = $(row).find('.date').text().trim();

            // 데이터를 객체로 만들어 배열에 추가
            noticeList.push({ title, info, date });
        });

        return noticeList; // 데이터 배열 반환
    } catch (error) {
        throw error; // 에러 처리
    }
}

async function crawlMultiplePages() {
    const totalPages = 10;
    const allNoticeList = [];

    for (let i = 1; i <= totalPages; i++) {
        try {
            const noticeList = await fetchNotice(i);
            allNoticeList.push(...noticeList);
            // console.log(`Page ${i} crawled successfully`);
        } catch (error) {
            console.error(`Error while crawling page ${i}:`, error);
        }
    }

    return allNoticeList;
}

crawlMultiplePages()
    .then(data => {
        console.log('All Notice List:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
