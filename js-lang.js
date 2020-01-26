function getSelectedLang() {
  e = document.querySelector("#jsLang");

  output = e.value;

  if (output == "kr") {
    window.location.pathname =
      "C:/Users/bakcj/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/Coding/Airbnb-Clone-by-myself-/KR/index.html";
  } else if (output == "en") {
    window.location.pathname =
      "C:/Users/bakcj/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/Coding/Airbnb-Clone-by-myself-/index.html";
  }
}
