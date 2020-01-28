enDirectory1 = window.location.pathname.substring(
  window.location.pathname.lastIndexOf("/"),
  ""
);

enDirectory2 = enDirectory1.substring(enDirectory1.lastIndexOf("/"), "");

function getSelectedLang() {
  e = document.querySelector("#jsLang");

  output = e.value;

  if (output == "kr") {
    window.location.pathname =
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/"),
        ""
      ) + "/KR/index.html";
    console.log(window.location.pathname);
  } else if (output == "en") {
    window.location.pathname = enDirectory2 + "/index.html";
  }
}
