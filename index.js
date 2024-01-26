// const axios = require('axios');


// axios({
//     method:'post',
//     url:"https://www.sookmyung.ac.kr/kr/index.do"
// }).then(response=>{
//     console.log(response);
// })


import axios from 'axios';
// const url = "https://www.sookmyung.ac.kr/kr/index.do";
// axios.getAdapter(url, ).then(response=>{
//     console.log(response);
// })

async function fetchPage(){
    const url = "https://www.naver.com";

    try{
        const response = await axios.get(url);
        // response.json(); :json parsing
        console.log(response.data);  
    }catch(err){
        console.error(err);
    }
    
}
fetchPage();