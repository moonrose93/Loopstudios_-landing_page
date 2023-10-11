const hamburgerIcon = document.getElementById("icon-hamburger");
const menuMobile = document.getElementById("mobile-menu-container");
const iconClose = document.getElementById("icon-close");

hamburgerIcon.addEventListener("click", ()=>{
    if (menuMobile.style.display === "none"){
        menuMobile.style.display = "block";
    }else{
        menuMobile.style.display = "none";
    }
});

iconClose.addEventListener("click",()=>{
    menuMobile.style.display = "none";
})