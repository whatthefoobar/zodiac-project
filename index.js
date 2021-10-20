
const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();
app.use(express.static('public')) // to serve our static files: img css etc



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
      }).catch(err => console.log(err));
  
  }
        

//get data from index.html
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", async function(req, res){
  let killers = await name(req.query.zodiac)
  res.send(killers);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`))


