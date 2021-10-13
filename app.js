// just my own play around with the form input to be disregarded if not used/useful

const form = document.querySelector(".form");

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
