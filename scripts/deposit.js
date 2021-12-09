// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  // console.log("deposit clicked");

  const depositNumber = getInputNumber("depositAmount");

  updateBalance("currentDeposit", depositNumber);
  updateBalance("currentBalance", depositNumber);
  // set input empty after each input
  document.getElementById("depositAmount").value = "";
});
//function to get the input from user and pass on to other functions
function getInputNumber(id) {
  const amount = document.getElementById(id).value; //you will get a string representation of the content
  const amountNumber = parseFloat(amount); //to get the numerical representation we use parsefloat
  return amountNumber;
}
//function to update Total Balance
function updateBalance(id, depositNumber) {
  const current = document.getElementById(id).innerText; //you will get a string representation of the content
  const currentNumber = parseFloat(current); //to get the numerical representation we use parsefloat
  const totalAmount = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
//function to close window on exit
const exitBtn = document.getElementById("exit");
exitBtn.addEventListener("click", function () {
  // console.log("exit clicked");
  window.close();
});
