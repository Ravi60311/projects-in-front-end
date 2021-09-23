let btn =document.querySelector("#btn");
let num =document.querySelector("#num");
let rnum =document.querySelector("#rnum");

btn.addEventListener("click", () =>{
    let r =Math.floor(Math.random()*100)+1;
    let n =num.value;
   
  if(r==n){
    rnum.innerHTML ="you gues it correct";

  }
  else if(r<n){
    rnum.innerHTML ="you gues it low";

}
else if(r>n){
    rnum.innerHTML ="you gues it high";
}
})