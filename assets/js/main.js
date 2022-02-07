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
  localStorage.setItem("data-theme", "light");
}

const localData = localStorage.getItem("data-theme");

if (localData == "light") {
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
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

// play video portfolio
const portfolioVideo = document.querySelectorAll(".portfolioVideo");

for (let i = 0; i < portfolioVideo.length; i++) {
  function startPreview() {
    portfolioVideo[i].muted = true;
    portfolioVideo[i].currentTime = 1;
    portfolioVideo[i].playbackRate = 0.5;
    portfolioVideo[i].play();
  }

  function stopPreview() {
    portfolioVideo[i].currentTime = 0;
    portfolioVideo[i].playbackRate = 1;
    portfolioVideo[i].pause();
  }

  let previewTimeout = null;

  portfolioVideo[i].addEventListener("mouseenter", () => {
    startPreview();
    previewTimeout = setTimeout(stopPreview, 8000);
  });

  portfolioVideo[i].addEventListener("mouseleave", () => {
    clearTimeout(previewTimeout);
    previewTimeout = null;
    stopPreview();
  });
}

// contact me
// ref : https://github.com/jamiewilson/form-to-google-sheets

const scriptURL =
  "https://script.google.com/macros/s/AKfycbySc5V1yr5N9N-ScuG2vzQwE4r1KB-fCHAzUFc7Qr2yspMPxKvwnzaIAJez4pscJW4L/exec";
const form = document.forms["web-portfolio-contact"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

const messageDisplay = document.querySelector(".messageDisplay");

function messageSent() {
  messageDisplay.classList.remove("d-none");
}
