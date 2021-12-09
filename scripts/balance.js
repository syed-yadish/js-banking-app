function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
const exitBtn = document.getElementById("exit");
exitBtn.addEventListener("click", function () {
  // console.log("exit clicked");
  window.close();
});
