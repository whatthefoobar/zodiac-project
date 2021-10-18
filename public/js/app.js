//AUTO FILL THE INPUT FIELD, IF LOCALSTORAGE ALREADY HAD A VALUE (PROBABLY FROM A PREVIOUS INTERACTION WITH THE SITE)
function autoFillDate() {
  if(localStorage.length !== 0) {
    document.getElementById("date").value = localStorage.getItem("birthdayString");
  }
}
autoFillDate();

//FUNCTION FOR WHAT HAPPENS WHEN THE SUBMIT BUTTON IS PRESSED

document.getElementById("submit").addEventListener("click", submitBreak);

function submitBreak(e){
  //PREVENT THE BUTTON FROM ACTUALLY SEND THE FORM (THROUGH A POST METHOD, FOR EXAMPLE)
  e.preventDefault();

  let inputDate = document.getElementById("date").value;

  //GET VALUES FROM USER INPUT
  let birthdayDay = inputDate.substring(8);
  let birthdayMonth = inputDate.substring(5, 7);
  let birthdayYear = inputDate.substring(0, 4);


  //ASSOCIATE VALUES IN THE SAME OBJECT
  let mybirthdayObj = {
    day: birthdayDay,
    month: birthdayMonth,
    year: birthdayYear
  }

  //GET USER AGE IN YEARS MONTHS AND DAYS BASED ON USER INPUT AND POPULATE HTML WITH IT
  getAge(inputDate);

  //CALL GET ZODIAC SIGN FUNCTION AND PASS DAY AND MONTH INPUT BY THE USER AS VALUES
  let zodiac = getZodiacSign(birthdayDay, birthdayMonth);
  getKillersFromZodiac(zodiac)

  // SET BIRTHDAY, INPUT STRING AND ZODIAC SIGN IN LOCAL STORAGE
  setLocalStorage(mybirthdayObj, inputDate, zodiac);
      
  // RETRIEVE BIRTHDAY OBJECT FROM LOCAL STORAGE
  getLocalStorage();

};

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

function getZodiacSign(day, month) {

  if((month == 1 && day <= 20) || (month == 12 && day >=21)) {
    return "capricorn";
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return "aquarius";
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return "pisces";
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return "aries";
  } else if((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return "taurus";
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return "gemini";
  } else if((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    return "cancer";
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return "leo";
  } else if((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "virgo";
  } else if((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return "libra";
  } else if((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    return "scorpio";
  } else if((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return "sagittarius";
  }
}

function setLocalStorage(obj, date, sign) {
  // SAVE BIRTHDAY OBJECT TO LOCAL STORAGE
  localStorage.setItem("birthday", JSON.stringify(obj));
  localStorage.setItem("birthdayString", date); //also storing the user's input as it's served (as a string) just for practice. This way we've stored and retrieved a string BUT ALSO stored and retrieved the same data as an object.
  localStorage.setItem("zodiacSign", sign);
}

function getLocalStorage() {
  // RETRIEVE BIRTHDAY OBJECT FROM LOCAL STORAGE
  let savedBirthday = JSON.parse(localStorage.getItem("birthday"));
  
}

//FETCH DATA FROM API ENDPOINT 

function getKillersFromZodiac(zodiac){
  const resultBox = document.querySelector(".result");
  fetch(`/api?zodiac=${zodiac}`)
    .then((response) => response.json())
    .then((data) => {
      resultBox.innerHTML= data[Math.floor(Math.random()* data.length)].killer;
    });
}

// Form SLIDE FUNCTIONS

function displayModal() {
  document.querySelector(".birthday-form").classList.toggle("button-active");
  // document.querySelector(".first-page").classList.toggle("button-none");
  console.log(document.querySelector(".birthday-form").classList);
  }
  
  function submitSlide() {
    document.querySelector(".submit-slide").classList.toggle("submitActive"); 
  }
  function slideBack() {
    document.querySelector(".submit-slide").classList.add("submitInactive");  
  }
  









