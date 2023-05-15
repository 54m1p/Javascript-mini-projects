function currencyConv(){
    let inputAmt = document.getElementById("amtInput").value;
    let selected = document.querySelector("#currOption").value;
    console.log(selected + inputAmt);
    let outputAmt, sign;
    switch(selected){
        case "usd":
            outputAmt = inputAmt* 131.05;
            sign = "$";
            break;
        case "inr":
            outputAmt = inputAmt * 1.6;
            sign = "₹";
            break;
        case "eur":
            outputAmt = inputAmt * 143.15;
            sign = "€";
            break;
        case "cad":
            outputAmt = inputAmt * 97.81;
            sign = "CA$0";
            break;
    }
    document.getElementById("result").innerHTML = "The value of "+inputAmt+" "+sign+" is: "+outputAmt.toFixed(2)+" NRs."  
}