let bill = document.getElementById("bill-total");

let fivePercent = document.getElementById("five-percent");
let tenPercent = document.getElementById("ten-percent");
let fifteenPercent = document.getElementById("fifteen-percent");
let twentyfivePercent = document.getElementById("twentyfive-percent");
let fiftyPercent = document.getElementById("fifty-percent");
let customTip = document.getElementById("custom-tip-percent");

let classPercent = document.getElementsByClassName("button-style")
let numberOfPeople = document.getElementById("numer-people");

let tipAmount = document.getElementById("tip-amout-display");
let totalAmount = document.getElementById("total-amount-per-person");


let reset = document.getElementById("reset-button");

/*This function calculates the total amount per person*/
function totalPerPerson(){
    let amount = parseInt(bill.value);
    let peopleNumber = parseInt(numberOfPeople.value);
    let total = Number((amount / peopleNumber).toFixed(2));
    if(bill.value === "" || numberOfPeople.value === ""){
        totalAmount.innerHTML = `$0.00`; 
    }else{
    totalAmount.innerHTML = `$${total}`;
    }
}

/*this function calculates the tip per person*/ 
const calculatePercent = (event) => {
    let amount = parseInt(bill.value);
    let percentInNumber = parseInt(event.target.value);
    console.log(percentInNumber);
    let myTip = amount * percentInNumber;
}



/**Here we have the event listeners */

bill.addEventListener("input",totalPerPerson);
numberOfPeople.addEventListener("input",totalPerPerson);


fivePercent.addEventListener("click", calculatePercent);
tenPercent.addEventListener("click", calculatePercent);
fifteenPercent.addEventListener("click", calculatePercent);
twentyfivePercent.addEventListener("click", calculatePercent);
fiftyPercent.addEventListener("click", calculatePercent);

/**-------------------------------------- */




