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

function displayArticle() {
  document.querySelector(".third-page").classList.toggle("article-slide"); 
}




