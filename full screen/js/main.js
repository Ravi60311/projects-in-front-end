let btn = document.querySelector("#btn");
let img = document.querySelector("#full-screen");
btn.addEventListener("click", function(){
if(img.webkitRequestFullScreen){
    img.webkitRequestFullScreen();
}
});