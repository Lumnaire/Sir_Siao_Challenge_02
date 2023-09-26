// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
  bar.addEventListener('click',()=>{
    nav.classList.add('active');
  })
}

if(close){
  close.addEventListener('click',()=>{
    nav.classList.remove('active');
  })
}

//script for scroll animation
window.addEventListener('scroll', reveal);

function reveal(){
  const reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i  < reveals.length; i++){
    const windowheight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    } else {
      /*reveals[i].classList.remove('active');*/ //if u want to repeat the animation
    }
  }
}

//script for nav-scroll
document.addEventListener('scroll', ()=>{
  const header = document.getElementById('header');

  if(window.scrollY > 0){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }
})