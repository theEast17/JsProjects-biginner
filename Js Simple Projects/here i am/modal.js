const container=document.querySelector("#container");
const modal=document.querySelector("#modal");
const sign=document.querySelector("#modal .sign");
const body=document.querySelector("body");


// container.onclick=()=>{
//     modal.style.top="50%";
//     modal.style.opacity="1";
// }

// sign.onclick=()=>{
//     modal.style.top="-10%"
//     modal.style.opacity="0";
// }

container.addEventListener("click",()=>{
    modal.style.top="50%";
    modal.style.opacity="1";  
})

sign.addEventListener("click",()=>{
    modal.style.top="-10%"
    modal.style.opacity="0";
})

// window.addEventListener("click",(e)=>{
//    if(e.target===modal){
//        modal.style.opacity="0";
//    }
// });
