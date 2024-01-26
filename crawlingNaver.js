import axios from 'axios';
import * as cheerio from 'cheerio';

import fs from 'fs';

const baseUrl = 'https://search.naver.com/search.naver?where=news&sm=tab_jum&query=%EC%9D%B4%EC%B0%A8%EC%A0%84%EC%A7%80';

axios.get(baseUrl).then((resp)=>{
    const $ = cheerio.load(resp.data);

    const articleTags = $('');
})