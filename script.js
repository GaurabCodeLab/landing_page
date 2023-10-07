const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const body = document.body;

menuBtn.addEventListener("click", ()=>{
   if(menu.style.opacity == 0){
     menu.style.opacity = 1;
   } else{
      menu.style.opacity = 0;
   }
   
})

document.body.addEventListener("click", (event)=>{
   if(event.target != menu && event.target != menuBtn){
      menu.style.opacity = 0;
   }
})
