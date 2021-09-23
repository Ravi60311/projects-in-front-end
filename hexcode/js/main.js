let btn = document.querySelector("#btn");
let letters = '0123456789ABCDEF';
let body = document.querySelector("body");
let code = document.querySelector("#code");
btn.addEventListener("click", change);

function change() {
    // var letters = '0123456789ABCDEF';
   let color ="#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor=color;
  code.innerHTML = color;
    
    
  }

// / let change = Math.floor(Math.random()*codes.length);
    // // alert(change);
    // 