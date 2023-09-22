
var idno=parseInt(prompt("Enter your id number"));
console.log("Your id number id"+" "+idno);

var name=prompt("enter your name");
console.log("Your name is"+" "+name);

var unit=parseInt(prompt("enter unit consumed"));
console.log(unit+" "+"unit consumed")

var billamount;
var fineamount;
var netamount;
var minimumbill=100;
if(unit<=199){
    billamount=unit*1.20
    if(billamount<100){
        console.log("The minimum bill amount is"+" "+minimumbill);
    }
   else{
    console.log("Amount charged @1.20 per unit"+" "+billamount);
   }
}
else if((unit>=200)&&(unit<400)){
    billamount=unit*1.50
    console.log("Amount charged @1.50 per unit"+" "+billamount);
    if(billamount>400){
        fineamount=billamount*15/100;
        console.log("Surchage amount"+" "+fineamount)
        netamount=billamount+fineamount;
       console.log("Net amount"+" "+netamount);
    }
    else{
        console.log(billamount);
    }
   
}
else if((unit>=400)&&(unit<600)){
    billamount=unit*1.80
    console.log("Amount charged @1.80 per unit"+" "+billamount);
    fineamount=billamount*15/100
    console.log("Surchage amount"+" "+fineamount)
    netamount=billamount+fineamount
    console.log("Net amount"+" "+netamount);
    
   
}
else{
    billamount=unit*2
    console.log("Amount charged @2.00 per unit"+" "+billamount);
    fineamount=billamount*15/100
    console.log("Surchage amount"+" "+fineamount)
    netamount=billamount+fineamount
    console.log("Net amount"+" "+netamount);
    
}