let text = document.querySelector("#text");
let btn = document.querySelector("#btn");
btn.addEventListener("click", () =>{
    if(text.classList.toggle("active")){ 
      text.innerHTML ="welcome";
  }else{
    text.innerHTML ="this is inner html text";
  }
});
