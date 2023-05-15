const toggleBtn = document.querySelector('.toggle__icon');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => nav.classList.toggle('open'))

var load = document.getElementById("preloader");
window.addEventListener("load", function(){
    load.style.display = "none";
})