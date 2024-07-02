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

