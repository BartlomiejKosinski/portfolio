let menu = 1;

const hamburger = document.getElementById("bi");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", () => {
    if(menu == 0)
    {
        menu = 1;
        nav.classList.remove("block"); 
    }else if(menu == 1){
        menu = 0;
        nav.classList.add("block");
    }
})