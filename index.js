
const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');




// require('./public/js/app.js');
//     console.log(fname);
//  console.log(pi);

const app = express();
app.use(express.static('public')) // to serve our static files: img css etc

const zodiacCategory = ["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius"]

const url= "https://killer.cloud/serial-killers/by/zodiac-sign/capricorn"; // for testing purposes added a zodiac sign category

async function name(zodiac) {
  const url= `https://killer.cloud/serial-killers/by/zodiac-sign/${zodiac}`;
  return axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const killers = [];


        $("h3.pad10t", html).each(function(){
          const killer = $(this).text();
          killers.push({
            killer
          }); // if we only keep the serial killer name will store the names in a simple array not an array of obj
        });

        return killers
        // console.log(killers); // maybe put the f that populates the serial killer result grid box here
    }).catch(err => console.log(err));

}

//get data from index.html
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", async function(req, res){
  let killers = await name(req.query.zodiac)
  res.send(killers);
  console.log(req.query);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`))


//get the zodiac sign from the function getZodiacSign in app.js and complete url for scraping request so that the zodiac category is not hardcoded
  //how to export f or var that stores result of f getZodiacSign module.exports{} gives me errors also interdependencies? if i expot both main f node will give me errors about localStorage

//f that populates the result box with serial killer scraping results https://www.w3schools.com/nodejs/nodejs_filesystem.asp

//toss all that, what if i fetch all data for all 12 categ in node move it to firebase then get it into our app.js to use it there and populate our html file