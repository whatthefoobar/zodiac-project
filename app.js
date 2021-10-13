//AUTO FILL THE INPUT FIELD, IF LOCALSTORAGE ALREADY HAD A VALUE (PROBABLY FROM A PREVIOUS INTERACTION WITH THE SITE)
if(localStorage.length !== 0) {
  document.getElementById("date").value = localStorage.getItem("birthdayString");
}

//FUNCTION FOR WHAT HAPPENS WHEN THE SUBMIT BUTTON IS PRESSED
document.getElementById("submit").addEventListener("click", function submitBreak(e){

  //PREVENT THE BUTTON FROM ACTUALLY SEND THE FORM (THROUGH A POST METHOD, FOR EXAMPLE)
  e.preventDefault();

  let inputDate = document.getElementById("date").value;

  //GET VALUES FROM USER INPUT
  let birthdayDay = inputDate.substring(8);
  let birthdayMonth = inputDate.substring(5, 7);
  let birthdayYear = inputDate.substring(0, 4);
  
  console.log(inputDate);
  console.log(birthdayDay);
  console.log(birthdayMonth);
  console.log(birthdayYear);

  //ASSOCIATE VALUES IN THE SAME OBJECT
  let mybirthday = {
    day: birthdayDay,
    month: birthdayMonth,
    year: birthdayYear
  }

  // SAVE BIRTHDAY OBJECT TO LOCAL STORAGE
localStorage.setItem("birthday", JSON.stringify(mybirthday));
localStorage.setItem("birthdayString", inputDate);

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

});










