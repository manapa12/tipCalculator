let bill = document.getElementById("bill-total");

let fivePercent = document.getElementById("five-percent");
let tenPercent = document.getElementById("ten-percent");
let fifteenPercent = document.getElementById("fifteen-percent");
let twentyfivePercent = document.getElementById("twentyfive-percent");
let fiftyPercent = document.getElementById("fifty-percent");
let customTip = document.getElementById("custom-tip-percent");

let classPercent = document.querySelectorAll(".button-style")
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
classPercent.forEach(button => {
    button.addEventListener("click",function(event) {
        let tipPercent = parseFloat(event.target.value);
        let amount = parseInt(bill.value);
        let peopleNumber = parseInt(numberOfPeople.value);
        if(bill.value === "" || tipPercent === null || numberOfPeople.value === ""){
            tipAmount.innerHTML = `$0.00`;
        }else{
            let totalTip = Number((amount * tipPercent)/peopleNumber).toFixed(2);
            tipAmount.innerHTML = `$${totalTip}`;
        }
    })
})
/**------------------------------------------ */

/**Here we have the event listeners */

bill.addEventListener("input",totalPerPerson);
numberOfPeople.addEventListener("input",totalPerPerson);
reset.addEventListener("click",function(){
    tipAmount.innerHTML = `$0.00`;
    totalAmount.innerHTML = `$0.00`;
    bill.value = "";
    numberOfPeople.value = "";
})



/**-------------------------------------- */




