import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const baseUrl = 'https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80';

async function fetchNews() {
  try {
    const newsArticles = [];

    for (let page = 1; page <= 5; page++) {
      const start = (page - 1) * 10 + 1;
      const url = `${baseUrl}&start=${start}`;

      // User-Agent 설정
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.1 Safari/537.36',
        },
      });

      const $ = cheerio.load(response.data);
      const articleTags = $('ul.list_news li');

      articleTags.each((index, element) => {
        const article = $(element);
        const headline = article.find('a.news_tit').text().trim();
        const url = article.find('a.news_tit').attr('href');
        const image = article.find('img.thumb').attr('data-lazysrc');
        const content = article.find('div.news_dsc').text().trim();

        // 제목과 URL이 비어있지 않은지 확인합니다.
        if (headline && url) {
          newsArticles.push({
            headline,
            url,
            image: image || '', // 이미지가 없으면 빈 문자열로 설정합니다.
            content,
          });
        }
      });

      // 요청 간격 설정 (1초 대기)
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(newsArticles);
    fs.writeFileSync('./news.json', JSON.stringify(newsArticles, null, 2));
    console.log('뉴스 기사를 가져와서 저장했습니다.');
  } catch (error) {
    console.error('뉴스 기사를 가져오는 중 오류가 발생했습니다:', error.message);
  }
}

// 메인 함수 호출
fetchNews();

// const deleteDodo = (todoItem) =>{
//     const newTodoList = [
//     ...todoList]

// new TodoList.splice(todoId);
// setTodoList(newTodoList);
// }