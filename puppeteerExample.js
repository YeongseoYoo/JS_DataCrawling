import puppeteer from "puppeteer";
//데이터 수집이 목적이 아닌 브라우저 핸들링.

async function crawlWadiz() {
    const url = 'https://www.wadiz.kr/web/wreward/main';
    const browser = await puppeteer.launch({
        headless:false
    })
    const page = await browser.newPage();
    await page.goto(url);
    //const content = awat Page.contetnt();

    //Query for an element handle.
    //const element = await page.waitForSelector('div > .class-name');

    page.se 
    //Do something with elements
} 
crawlWadiz()