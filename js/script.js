//MENU TOGGLER

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

hamburger.addEventListener("click",()=>{
    navUL.classList.toggle("show");
    hamburger.classList.toggle("hide");
});

close.addEventListener("click",()=>{
    navUL.classList.toggle("show");
    hamburger.classList.toggle("hide");
})

AOS.init({
    duration:1000,
})



// const button = document.querySelector('.button');
// const videoContainer = document.querySelector('.video-container');
// const myClose = document.querySelector('.myClose');


// button.addEventListener('click',()=>{
//     videoContainer.classList.add('myShow');

// });


// myClose.addEventListener('click',()=>{
//     videoContainer.classList.remove('myShow');

// });