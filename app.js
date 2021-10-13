//GET VALUES FROM USER INPUT (NOT FINAL)

let birthdayDay = document.getElementById("birthdayDay");
let birthdayMonth = document.getElementById("birthdayMonth");
let birthdayYear = document.getElementById("birthdayYear");

//ASSOCIATE VALUES IN THE SAME OBJECT
let mybirthday = {
  day: birthdayDay.value,
  month: birthdayMonth.value,
  year: birthdayYear.value
}

// SAVE BIRTHDAY OBJECT TO LOCAL STORAGE
localStorage.setItem("birthday", JSON.stringify(mybirthday));

// RETRIEVE BIRTHDAY OBJECT FROM LOCAL STORAGE
let savedBirthday = JSON.parse(localStorage.getItem("birthday"));

// CREATE CURRENT DATE OBJECT
let today = new Date();


let currentDate = {
  day: today.getDate(),
  month: today.getMonth(),
  year: today.getFullYear(),
}

//CALCULATE USERS AGE

let ageYears = currentDate.year - savedBirthday.year;
let ageMonths = ageYears * 12 + currentDate.month;
let ageDays = ageYears * 365 + (currentDate.month * 30) + currentDate.day;

//PUSH USERS AGE INTO HTML 

document.getElementById("slot1").innerHTML = "You have lived " + ageYears + " years " + ageMonths + " months " + ageDays + " days without meeting this guy. But you are part of the same Zodiac family. How cool?" 

console.log("You have lived " + ageYears + " years " + ageMonths + " months " + ageDays + " days without meeting this guy. But you are part of the same Zodiac family. How cool?");