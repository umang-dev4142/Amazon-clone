let value=document.querySelector(".val").innerHTML;
let price=document.querySelector(".price").innerHTML;
let cardprice=document.querySelector(".cardprice").innerHTML;
console.log(price);
let Price=parseInt(price);
let cardPrice=parseInt(cardprice);
let val=parseInt(value);
let incrementbtn=document.getElementsByClassName("inc")[0];
incrementbtn.addEventListener("click", ()=>{
    val=val+1;
    document.querySelector(".price").innerHTML=val*Price;
    document.querySelector(".cardprice").innerHTML=val*cardPrice;
    if(val>10){
        alert("Limit Over !");
        val=10;
    }
    document.querySelector(".val").innerHTML=val;

});
let decrementbtn=document.getElementsByClassName("dec")[0];
decrementbtn.addEventListener("click", ()=>{
    if (val>1){
        val=val-1; 
        document.querySelector(".cardprice").innerHTML=val*cardPrice;
        document.querySelector(".price").innerHTML=val*Price;
        document.querySelector(".val").innerHTML=val;
    }
});