// just my own play around with the form input to be disregarded if not used/useful

const form = document.querySelector(".form");
const input = form.date.value;

//f that gets age from the input birthdate
function getAge(dateString) {
    var now = new Date();
    var today = new Date(now.getYear(),now.getMonth(),now.getDate());
  
    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
  
    var dob = new Date(dateString);
  
    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";
  
  
    let yearAge = yearNow - yearDob;
  
    if (monthNow >= monthDob)
      var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow -monthDob;
    }
  
    if (dateNow >= dateDob)
      var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;
  
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
  
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };
  
    if ( age.years > 1 ) yearString = " years";
    else yearString = " year";
    if ( age.months> 1 ) monthString = " months";
    else monthString = " month";
    if ( age.days > 1 ) dayString = " days";
    else dayString = " day";
  
  
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString ;
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
      ageString = "Only " + age.days + dayString + " old!";
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
      ageString = age.years + yearString + " old. Happy Birthday!!";
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
      ageString = age.years + yearString + " and " + age.months + monthString ;
    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.months + monthString + " and " + age.days + dayString ;
    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
      ageString = age.years + yearString + " and " + age.days + dayString ;
    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
      ageString = age.months + monthString + " old.";
    else ageString = "Oops! Could not calculate age!";
  
    return document.getElementById("slot1").innerHTML = "You have lived " + ageString + " without meeting this guy. But you are part of the same Zodiac family. How cool?" 
  };

//get input value from form aka get birth date from form input

form.addEventListener("submit", e =>{
    e.preventDefault();
    const input = form.date.value;// this is the form date inputed
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
