import axios from 'axios';

async function fetchPage(){
    const url = "https://quotes.toscrape.com/";

    try{
        const response = await axios.get(url);
        // response.json(); :json parsing
        console.log(response.data);  
    }catch(err){
        console.error(err);
    }
    
}
fetchPage();