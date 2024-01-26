import * as cheerio from 'cheerio';
const data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">
        <div class="content">
            <ul class="profile">
                <li class="other">윤수</li>
                <li class="me">
                    <a href="/profile/me">민수</a>
                </li>
                <li clase="other">수지</li>
            </ul>
        </div>
    </div>
</body>
</html>
`
const $ = cheerio.load(data);
// console.log($.html());
// console.log($('.other')); //a 태그만 갖고 오겠다.
// console.log($('ul.profile').children()); //바로 자식만 가져오고 싶어~
// console.log($('a').prop('href')); //a태그를 갖고와서 그 속성값 중 href만 
// console.log($('a').text()); //a태그 중에 글자값만 가져오고 싶어
const names = $('li').map((i, el)=>{
    return $(el).text().trim();
}).get();
console.log(names);
//모든 li태그 안에 글자들만 배열로 가져오고 싶어.map 첫번째 인자:index, 두번째:element