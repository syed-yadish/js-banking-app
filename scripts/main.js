// Enter button
const loginBtn = document.getElementById("login");
//function to open menu options in a new window
//Otherwise window.close() dont work due to security protocol
loginBtn.addEventListener("click", function () {
  // console.log("You just Clicked me");
  window.open(
    "../pages/menu.html",
    "Menu",
    "location=yes,height=650,width=850,scrollbars=yes,status=yes"
  );
});
