let counter = document.querySelector("#counter");
let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let res = document.querySelector("#res");

let count =0;
inc.addEventListener("click",function(){
    count++;
    counter.innerHTML=count;
    if(count>0){
        counter.style.color ="green";
    }
})

dec.addEventListener("click",function(){
    count--;
    counter.innerHTML=count;
    if(count<0){
        counter.style.color ="red";
    }
    
})

res.addEventListener("click",function(){
    counter.innerHTML="0";
    count=0;
})
