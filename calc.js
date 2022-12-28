//selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText;
    if(buttonText==="AC"){
        output.innerText = "";
        result.innerText = "0";
        result.getElementsByClassName.animation = "";
        output.getElementsByClassName.animation = "";
        return;
    }

    if(buttonText === "DEL"){
        output.textContent = output.textContent.substring(0,output.textContent.length-1);
        return;
    }
    
    
    if(buttonText==="="){
        result.innerText = eval(output.innerText);
        result.getElementsByClassName.animation = "big 0.5 ease-in-out";
        output.getElementsByClassName.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
    }

    else{
        output.textContent += buttonText;
        return;
    }



}
