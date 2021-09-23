let ivalue = document.getElementById("name");
let btn = document.getElementById("btn");
// let message =document.getElementsByClassName('datas');
let msg = document.getElementById("msg");



btn.addEventListener("click", () =>{
    let value = ivalue.value;
    msg.innerText =value;
})
//  console.log(a);


