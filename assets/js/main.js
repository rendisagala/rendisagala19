const switchIcon = document.querySelector(".switchIcon");

// for portfolioList
const portfolioList = document.querySelector("#portfolioList");
const pageHeaderTitle = document.querySelector("#pageHeaderTitle");
const postcard = document.querySelectorAll(".postcard");
const postcardText = document.querySelectorAll(".postcard__text");
const darkIcon = document.querySelector(".darkIcon");
const lightIcon = document.querySelector(".lightIcon");
const mainImg = document.querySelector(".mainImg");
const navLogo = document.querySelector(".navLogo");

if (localStorage.getItem("data-theme") == null) {
  localStorage.setAttribute("data-theme", "light");
}

const localData = localStorage.getItem("data-theme");

if (localData == "light") {
  switchIcon.src = "./assets/icon/dark.svg";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  switchIcon.src = "./assets/icon/light.svg";
  document.body.classList.add("dark-theme");
}

function switchMode() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
    navLogo.src = "./assets/icon/rasTitle.svg";
    // portfolio

    portfolioList.classList.remove("light");
    portfolioList.classList.toggle("dark");
    pageHeaderTitle.classList.remove("text-dark");
    pageHeaderTitle.classList.toggle("text-light");
    for (let i = 0; i < postcard.length; i++) {
      postcard[i].classList.remove("light");
      postcard[i].classList.toggle("dark");
    }
    for (let i = 0; i < postcardText.length; i++) {
      postcardText[i].classList.remove("t-dark");
    }
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightIcon.style.display = "none";
    darkIcon.style.display = "block";

    navLogo.src = "./assets/icon/ras.svg";
    // portfolio
    portfolioList.classList.remove("dark");
    portfolioList.classList.toggle("light");
    pageHeaderTitle.classList.remove("text-light");
    pageHeaderTitle.classList.toggle("text-dark");
    for (let i = 0; i < postcard.length; i++) {
      postcard[i].classList.remove("dark");
      postcard[i].classList.toggle("light");
    }
    for (let i = 0; i < postcardText.length; i++) {
      postcardText[i].classList.toggle("t-dark");
    }
  }
}
