var loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = "-100%";
},4000)


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

function scrollingfunc(){
    document.addEventListener('scroll',function(){
        const navbar = document.querySelector('nav');
        if(window.scrollY > 0){
            navbar.classList.add('scrolled')
        }else{
            navbar.classList.remove('scrolled')
        }
    })
}

scrollingfunc();

function sideBar(){
   const sideBar = document.querySelector(".sideBar")
   sideBar.style.display = 'flex'
} 

function hideSideBar(){
    const sideBar = document.querySelector(".sideBar")
    sideBar.style.display = 'none'
}




const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
var monthdiv = document.querySelector(".date h4 span").innerHTML = month;



const date = new Date();
let day = date.getDate();
var datediv = document.querySelector(".date h2").innerHTML = day;




let nextBtn = document.getElementById("next")
let preBtn = document.getElementById("previous")
let carouselDom = document.querySelector('.carousel')
let listItem = document.querySelector('.carousel .lists')
let thumbnailDom = document.querySelector('.carousel .thumbnail')

nextBtn.onclick = function(){
    showSlider('next');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nextBtn.click();
},timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .lists .item')
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if(type === 'next'){
        listItem.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('previous');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('previous');
    },timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextBtn.click();
    },timeAutoNext);

}

preBtn.onclick = function(){
    showSlider('previous');
}

