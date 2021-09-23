function hide(){
let text = document.querySelector("#text");
    if(text.style.display === "none"){
        text.style.display = "flex"
    }
    else{
        text.style.display = "none"
    }
}