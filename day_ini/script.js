// let newbtn = document.createElement("button");
// newbtn.innerText="click me!";
// newbtn.style.color="white";
// newbtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newbtn);
let modeBtn = document.querySelector("#mode");
let currMode="light";//dark
modeBtn.addEventListener("click",()=>{
   if(currMode === "light"){
    currMode="dark";
    document.querySelector("body").style.backgroundcolor = "black";
   }
   else{
     currMode="light";
     document.querySelector("body").style.backgroundcolor = "white";
   }
   });

    
   