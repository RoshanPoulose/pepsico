const bar= document.querySelector(".bars")
const clicks=document.querySelector(".clicked")
bar.addEventListener("click",(e)=>{
    e.preventDefault();
    bar.classList.toggle("active")
    clicks.classList.toggle("show")
})                                  
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".scroll");
  const items = container.querySelectorAll(".scrolls");
  let currentIndex = 0;

  function scrollToNext() {
    currentIndex = (currentIndex + 1) % items.length;
    const itemWidth = items[0].offsetWidth;
    container.scrollTo({  
      left: currentIndex * itemWidth,  
      behavior: "smooth"
    });
  }
  
  setInterval(scrollToNext, 10000);
});
   
       