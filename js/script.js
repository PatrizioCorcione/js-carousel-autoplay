const imgsJs = document.querySelector(".imgs");
const imgTot = [
  "assets/img/01.webp",
  "assets/img/02.webp",
  "assets/img/03.webp",
  "assets/img/04.webp",
  "assets/img/05.webp"
]
let counter = 0;
const upJs = document.querySelector(".up");
const downJs = document.querySelector(".down");
const containerSmall = document.querySelector(".container-small");
const bagrDarkJs = document.querySelector(".bagr-dark");
const bordGrayJs = document.querySelector(".bord-gray");
const carouselJs = document.getElementById("carousel");



for (let i = 0; i < imgTot.length; i++) {
  const imgFocus = imgTot[i];
  imgsJs.innerHTML += `<img class = 'hide img' src=${imgFocus} alt=>`
  containerSmall.innerHTML += `
  <div class=pos-rel>
    <img src=${imgFocus} alt="">
    <div class= "ugo bagr-dark"></div>
  </div>`
}

const imgComp = document.getElementsByClassName("img");
const imgBagr = document.getElementsByClassName("ugo");

imgComp[0].classList.remove("hide");
imgBagr[0].classList.add("bord-gray");
imgBagr[0].classList.remove("bagr-dark");

let scrollJs = setInterval(scrollDown, 3000);

carouselJs.addEventListener('mouseout', function() {
  scrollJs = setInterval(scrollDown, 3000);
});

carouselJs.addEventListener('mouseover', function() {
  clearInterval(scrollJs);
});




downJs.addEventListener('click',function(){
  scrollDown()
})

upJs.addEventListener('click',function(){
  scrollUp()
})

function scrollDown() {
  upJs.classList.remove("hide");
  imgComp[counter].classList.add("hide");
  imgBagr[counter].classList.add("bagr-dark");
  imgBagr[counter].classList.remove("bord-gray");
  counter++;
  
  if (counter == imgComp.length) {
    counter=0;
    
  }

  imgComp[counter].classList.remove("hide");
  console.log(counter);
  imgBagr[counter].classList.remove("bagr-dark");
  imgBagr[counter].classList.add("bord-gray");
  
}

function scrollUp() {
  imgComp[counter].classList.add("hide");
  imgBagr[counter].classList.add("bagr-dark");
  imgBagr[counter].classList.remove("bord-gray");
  counter--;
  if (counter < 0) {
    counter=imgComp.length-1;
    
  }
  imgBagr[counter].classList.remove("bagr-dark");
  imgBagr[counter].classList.add("bord-gray");
  imgComp[counter].classList.remove("hide");
  downJs.classList.remove("hide");
  
}