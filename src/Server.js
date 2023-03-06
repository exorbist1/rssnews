const axios = require('axios')
const express = require('express'); 
const app = express(); 
const cors = require('cors');
const fs = require('fs');

app.use(cors({
    origin: '*'
}))


axios.get('https://newsapi.org/v2/everything?q=f1&language=en&apiKey=730160677c7746fb9d3d7900db5990a1', {
}).then(resp => {

    console.log(resp.data);
    let data = JSON.stringify(resp.data, null, 2);
    fs.writeFileSync('./components/data.json', data)
});