let tvalues =document.getElementById("tvalues");
let tresults =document.getElementById("tresults");

let btns =document.getElementsByClassName("btn");


function display(n){
   tvalues.value +=n;
}
function clearScreen(){
    tvalues.value="";
    tresults.value="";

}
function calculate(){
     let v = tvalues.value;
     let k = eval(v);
     tresults.value=k;
}