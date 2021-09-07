// accesing h1 element
let timer = document.querySelector("h1");

// declare a time stop 
let timeSeconds=15;

// calling a function and  pass time stop variable to the function
display(timeSeconds);

const countDown = setInterval(()=>{
    timeSeconds--;
    display(timeSeconds);
    if(timeSeconds==0 || timeSeconds<1){
        end();
        clearInterval(countDown);
    }
},1000)

// creating a function
function display(second){
    const min =Math.floor(second/60);
    const sec =Math.floor(second%60);

    timer.innerHTML =
    `${min<10 ? "0" : ""}${min} :
    ${sec <10 ? "0" : ""}${sec}`;


}
// if the given time is out it will be displayed
function end(){
    timer.innerHTML ="time out";
}
