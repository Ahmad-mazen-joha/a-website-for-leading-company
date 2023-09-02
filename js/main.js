let width = getComputedStyle(document.body).width;

window.onload = () => {
  if (parseInt(width) < 700) {
    let bar = document.getElementById("bar");
    bar.style.display = "block";
    let ul = document.querySelector(".headerLinks");
    ul.style.cssText = "opacity:0";
    ul.classList.add("display");
    ul.classList.add("played");
    bar.addEventListener("click", () => {
      ul.classList.toggle("play");
      setTimeout(() => {
        ul.classList.toggle("display");
        ul.classList.toggle("small-bar");
      }, 300);
      if (ul.classList.contains("play")) {
        ul.style.cssText = "opacity:1";
        bar.classList = "fa-solid fa-bars-staggered";
        bar.style.color = "#EEE";
        bar.style.paddingRight = "5px";
      } else {
        ul.style.cssText = "opacity:0";
        bar.classList = "fa-solid fa-bars";
        bar.style.color = "#0386c1";
        bar.style.paddingRight = "0px";
      }
    });
  }
};
let dots = Array.from(document.querySelectorAll(".dotsContainer .dots"));
let choeses = Array.from(document.querySelectorAll(".choose div"));
let backgroundimgs = Array.from(document.querySelectorAll(".background img"));
let background = document.querySelector(".parentland");

let num = 1;
setInterval(() => {
  for (let i = 0; i < choeses.length; i++) {
    choeses[i].classList.remove("active");
    dots[i].classList.remove("active");
  }
  num++;
  if (num > choeses.length - 1) {
    num = 0;
  }
  choeses[num].classList.add("active");
  dots[num].classList.add("active");
  background.style.cssText = ` background-image:linear-gradient(90deg,black,transparent),url(${backgroundimgs[
    num
  ].src});`;
}, 5000);
if (parseInt(width) > 730) {
  let leftArrow = document.querySelector(".arrow  .fa-arrow-left");
  let rightArrow = document.querySelector(".arrow .fa-arrow-right");
  console.log(leftArrow);
  console.log(rightArrow);

  let images = document.querySelectorAll(".img-cont img");
  let headerarray = ["OIL PURIFIER", "CAR PURIFIER", "FOOD PURIFIER"];
  let h2 = document.querySelector(".services-text h2");
  let n = 0;

  leftArrow.addEventListener("click", () => {
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    n--;
    if (n < 0) {
      n = 2;
    }
    console.log(n);
    h2.innerHTML = headerarray[n];
    images[n].style.display = "block";
  });

  rightArrow.addEventListener("click", () => {
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    n++;
    if (n > 2) {
      n = 0;
    }
    console.log(n);
    h2.innerHTML = headerarray[n];
    images[n].style.display = "block";
  });
} else {
  let images = document.querySelectorAll(".img-cont img");
  let leftArrow = document.querySelector(".arrow  .fa-arrow-left");
  let rightArrow = document.querySelector(".arrow .fa-arrow-right");
  let headerarray = ["OIL PURIFIER", "CAR PURIFIER", "FOOD PURIFIER"];
  let h2 = document.querySelector(".services-text h2");
  let n = 0;

  leftArrow.addEventListener("click", () => {
    n--;
    if (n < 0) {
      n = 2;
    }
    h2.innerHTML = headerarray[n];
  });

  rightArrow.addEventListener("click", () => {
    n++;
    if (n > 2) {
      n = 0;
    }
    console.log(n);
    h2.innerHTML = headerarray[n];
  });
}

let year = document.querySelector(".year");
let date = new Date();
year.innerHTML = date.getFullYear();
