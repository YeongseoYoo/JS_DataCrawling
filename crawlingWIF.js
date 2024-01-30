import axios from 'axios';

async function fetchFunding() {
    try {
        const productList = [];
        const baseUrl = `https://service.wadiz.kr/api/search/funding`;
        const response = await axios.post(baseUrl, {
            startNum: 0,
            order: "recommend",
            limit: 48,          //데이터 값. 1000개는 됨. 요청 10번이면 가능. but 10,000번이라는 큰 수를 넣으면 주지 않는다.
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
