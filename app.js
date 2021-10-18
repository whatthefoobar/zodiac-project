console.log ('button');

/* function formSlide() {
  // retrieving elements
const button = document.querySelector('button');
const formSlide = document.querySelector('.birthday-form'); */

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

// const form =document.querySelector(".submit-slide"); //the form
// const exit =document.querySelector(".far");// i dunno how you'd name them
// const formBtn = document.querySelector("#submit");// the form btn
// formBtn.addEventListener(click, submitActive);
// exit.addEventListener(click, submitInactive);
// function slideOut(){
//     form.classList.add("submitActive");// where .slideout is your css class that does the slideout to result
// }
// //similar
// function slideIn(){
//     form.classList.remove("submit-inactive");// where .slideout is your css class that does the slideout to result
//     form.classList.add("");// where .slidein is your css class that gets back to the form page
// }



