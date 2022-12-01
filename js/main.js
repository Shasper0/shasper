`use strict`;

let links = document.getElementsByClassName('links')[0];
let ul = document.getElementsByTagName('ul')[0];
let header = document.getElementsByClassName('header')[0];
let loading = document.querySelector('.loading');



document.title = 'Leon Template One ';

// Start Loading
window.onload = setTimeout(loadingPage , 1000)

 function loadingPage(){
    loading.classList.add('loading-hidding');
} 

// End Loading
// Start Header
links.addEventListener("click" , () => {
    ul.classList.toggle('i');
} );


window.onscroll = function(){
    if(window.scrollY > 1){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
}
// End Header

// UP
let up = document.querySelector(".up");

up.addEventListener("click" , ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})
window.addEventListener("scroll" , function(){
    if(this.scrollY >= 100){
        up.classList.add("active");
    }else{
        up.classList.remove("active");
    }
})

let darkMode = document.querySelector(".dark-light");
darkMode.addEventListener("click" , function(){
    document.body.classList.toggle("dark-mode");
    let home = document.querySelector(".landing");
    if(document.body.classList.contains("dark-mode") == true){
        home.style.backgroundImage = "url('../imgs/home-dark.jpg')"
    }else{
        home.style.backgroundImage = "url(../imgs/home.jpg)"
    }
})