//AUTO FILL THE INPUT FIELD, IF LOCALSTORAGE ALREADY HAD A VALUE (PROBABLY FROM A PREVIOUS INTERACTION WITH THE SITE)
function autoFillDate() {
  if(localStorage.length !== 0) {
    document.getElementById("date").value = localStorage.getItem("birthdayString");
  }
}
autoFillDate();

//FUNCTION FOR WHAT HAPPENS WHEN THE SUBMIT BUTTON IS PRESSED
function submitDate() {
  document.getElementById("submit").addEventListener("click", submitBreak);
}

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

  //CALL GET ZODIAC SIGN FUNCTION AND PASS DAY AND MONTH INPUT BY THE USER AS VALUES
  let zodiacSign = getZodiacSign(birthdayDay, birthdayMonth);

  // console.log(zodiacSign);
      setLocalStorage(mybirthdayObj, inputDate,zodiacSign );
      
  // RETRIEVE BIRTHDAY OBJECT FROM LOCAL STORAGE
  let savedBirthday = JSON.parse(localStorage.getItem("birthday"));

 
// CREATE CURRENT DATE OBJECT
let today = new Date();

let currentDate = {
  day: today.getDate(),
  month: today.getMonth()+1,
  year: today.getFullYear(),
}

//CALCULATE USERS AGE

let ageYears = currentDate.year - savedBirthday.year;
let ageMonths = ageYears * 12 + currentDate.month;
let ageDays = ageYears * 365 + (currentDate.month * 30) + currentDate.day;

//PUSH USERS AGE INTO HTML 

document.getElementById("slot1").innerHTML = "You have lived " + ageYears + " years " + currentDate.month + " months and " + currentDate.day + " days without meeting this guy. But you are part of the same Zodiac family. How cool?" 

// console.log("You have lived " + ageYears + " years " + ageMonths + " months " + ageDays + " days without meeting this guy. But you are part of the same Zodiac family. How cool?");

};

submitDate();

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



// const pi = 3.14;
// module.exports = {
//  pi
// };










