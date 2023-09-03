// Select Landing Page
let landingPage = document.querySelector(".card-section");
let backgroundInterval;
// Get Arry of Images
let imagesArray = [
  "b1.jpg",
  "b2.jpg",
  "b3.jpg",
  "b4.jpg",
  "b5.jpg",
  "b6.jpg",
  "b7.jpg",
];
// function randomize image
function randomize() {
  backgroundInterval = setInterval(() => {
    // Get Randon Number
    let randomNumber = Math.floor(Math.random() * imagesArray.length);

    landingPage.style.backgroundImage =
      'url("IMAGES/' + imagesArray[randomNumber] + '")';
  }, 30000);
}
randomize();
