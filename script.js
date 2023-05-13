Menubar = document.querySelector(".menubar");
Menubar.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
};
var typed=new Typed(".input",{
    strings:["Dev Frontend","Designer Gráfico","Web Developer"],
    typedSpeed:200,
    backSpeed:100,
    backDelay: 1000,
    loop:true
})