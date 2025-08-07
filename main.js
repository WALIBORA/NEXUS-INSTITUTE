// change navbar styles on scroll
window.addEventListener('scroll', ()=> {
document.querySelector('nav').classList.toggle('window-scroll', window.scrolly>0)
})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
function loader(){
  document.querySelector('.loader_container').classList.add('fade-out');
}
function fadeout(){
  setInterval(loader, 700);
}
window.onload = fadeout;
function msg(){
  alert("Your submition was a success please wait for further information")
}
function validation(){

}