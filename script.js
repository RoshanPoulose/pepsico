const bar= document.querySelector(".bars")
const clicks=document.querySelector(".clicked")
bar.addEventListener("click",(e)=>{
    e.preventDefault();
    bar.classList.toggle("active")
    clicks.classList.toggle("show")
})                                  