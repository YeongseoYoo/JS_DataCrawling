import axios from 'axios';

async function fetchFunding() {
    try {
        const productList = [];
        const baseUrl = `https://service.wadiz.kr/api/search/funding`;
        const response = await axios.post(baseUrl, {
            startNum: 0,
            order: "recommend",
            limit: 48,
            categoryCode: "",
            endYn: ""
        });

        const data = response.data;
        console.log(response.data);
        const fundings = data.data.list;

        fundings.forEach(funding => {
            const image = funding.photoUrl;
            const infoString = funding.coreMessage;
            const title = funding.title;
            const makerName = funding.corpName;

            productList.push({
                image,
                infoString,
                title,
                makerName
            });
        });

        console.log(productList);
        return productList;
    } catch (error) {
        console.error('Error fetching funding:', error);
        return [];
    }
}

// 함수 호출
fetchFunding(1);
