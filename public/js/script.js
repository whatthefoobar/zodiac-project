// just my own play around with the form input to be disregarded if not used/useful

const form = document.querySelector(".form");
const input = form.date.value;

//f that gets age from the input birthdate
function getAge(input) {
    var today = new Date();
    var birthDate = new Date(input);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


//get input value from form aka get birth date from form input

form.addEventListener("submit", e =>{
    e.preventDefault();
    const input = form.date.value.trim();// this is the form date inputed
    console.log(input); // string date format ex 1999-09-07;
    console.log(typeof(input)); // string
    

    console.log(getAge(input)); 
});

// f that takes the input date and place it into a zodiac category

function getZodiacSign(input) {
    let zodiacSign;

    switch (input) {
    case (1-22 <= input <= 2-21):
        return zodiacSign = aquarius;
        break;
    case (2-22 <= input <= 3-21):
        return zodiacSign = pices;
        break;
    case (3-22 <= input <= 4-21):
        return zodiacSign = aries;
        break;
    case (4-22 <= input <= 5-21):
        return zodiacSign = taurus;
        break;
    case (5-22 <= input <= 6-21):
        return zodiacSign = gemini;
        break;
    case (6-22 <= input <= 7-21):
        return zodiacSign = cancer;
        break;
    case (7-22 <= input <= 8-21):
        return zodiacSign = leo;
        break;
    case (8-22 <= input <= 9-21):
        return zodiacSign = virgo;
        break;
    case (9-22 <= input <= 10-21):
        return zodiacSign = libra;
        break;
    case (10-22 <= input <= 11-21):
        return zodiacSign = scorpio;
        break;
    case (11-22 <= input <= 12-21):
        return zodiacSign = sagittarius;
        break;
    case (12-22 <= input <= 1-21):
        return zodiacSign = capricorn;
        break;
    
    default:
        alert( "I don't know such zodiac sign, are you from planet Earth?" );
    }
};

// take zodiac sign and place at the end of url/category ex. https://killer.cloud/serial-killers/by/zodiac-sign/capricorn

//run scraper

//populate grid result field in our index.html with scraper SK name , forEach of the grid cells change .innerHTML to include SK name from array
