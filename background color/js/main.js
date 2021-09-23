let btn = document.querySelector("#btn");
let colors = ["red","green","blue","yellow"];
let body = document.querySelector("body");

btn.addEventListener("click", () => {
    let change = Math.floor(Math.random()*colors.length);
    // alert(change);
    body.style.backgroundColor=colors[change];
});