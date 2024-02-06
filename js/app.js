let btn = document.querySelector('.btn');
let changerApp = document.querySelector('#changerApp')
btn.addEventListener('click',function(){

    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    changerApp.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
let btnScroll = document.querySelector('.btn-scroll');

window.addEventListener('scroll',function(){
    if(window.scrollY > 500 ){
        btnScroll.classList.add('active');

    }else{
        btnScroll.classList.remove('active')
    }
});