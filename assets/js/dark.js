const switchIcon = document.querySelector(".switchIcon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

const localData = localStorage.getItem("theme");

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
    switchIcon.src = "./assets/icon/light.svg";
    localStorage.setItem("theme", "dark");
  } else {
    switchIcon.src = "./assets/icon/dark.svg";
    localStorage.setItem("theme", "light");
  }
}
