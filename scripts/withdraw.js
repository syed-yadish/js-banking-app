// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");
  const balanceCheck = document.getElementById("currentBalance").innerHTML;
  //console.log(balanceCheck);
  //if/else to make sure you dont withdraw more than total Balance
  if (withdrawNumber > balanceCheck) {
    alert("You do not have sufficient funds");
  } else {
    updateBalance("currentWithdraw", withdrawNumber);
    updateBalance("currentBalance", -withdrawNumber);
    // set input empty after each input
    document.getElementById("withdrawAmount").value = "";
  }
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
