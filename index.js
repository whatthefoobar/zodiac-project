
const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
app.use(express.static('public')) // to serve our static files: img css etc

const url= "https://killer.cloud/serial-killers/by/zodiac-sign/capricorn"; // for testing purposes added a zodiac sign category


axios(url)
    .then(response => {
        const html = response.data;
        // console.log(html);
        const $ = cheerio.load(html);
        const killers = [];


        $("h3.pad10t", html).each(function(){
          const killer = $(this).text();
          killers.push({
            killer
          }); // if we only keep the serial killer name will store the names in a simple array not an array of obj
        });
        console.log(killers); // maybe put the f that populates the serial killer result grid box here
    }).catch(err => console.log(err));

//get data from index.html
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  res.send("Thanks for sending that!");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`))