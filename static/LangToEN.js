var userLang = navigator.language || navigator.userLanguage;
  if (userLang != "zh") {
    var answer = window.confirm("Do you want to visit the English version of this website?");
    if (answer) {
      window.location.href = "/en";
    }
  }