import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const baseUrl = 'https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80';
const basePath = './images';

async function fetchNews(){
    try{
        const newsArticles = [];
        
        for (let page = 1; page <=5; page++){
            const start = (page - 1) * 10 + 1;
            const url = `${baseUrl}&start=${start}`;

            const response = await axios.get(url, {
                headers:{
                    'User-Agent' : 
                },
            });
            

        }


    }catch{

    }
}