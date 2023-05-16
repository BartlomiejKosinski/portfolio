let menu = 0;

const hamburger = document.getElementById("bi");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", () => {
    if(menu == 0)
    {
        nav.style.display = "block";
        menu = 1;
    }else{
        nav.style.display = "none";
        menu = 0;
    }
})