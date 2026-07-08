/* =========================
   THEME TOGGLE
========================= */


const themeButton = document.getElementById("theme-toggle");

const body = document.body;


// Load saved theme

const savedTheme = localStorage.getItem("theme");


if(savedTheme === "light"){

    body.classList.add("light");

    themeButton.textContent="☀️";

}



// Change theme

themeButton.addEventListener("click",()=>{


    body.classList.toggle("light");



    if(body.classList.contains("light")){


        localStorage.setItem("theme","light");

        themeButton.textContent="☀️";


    }
    else{


        localStorage.setItem("theme","dark");

        themeButton.textContent="🌙";


    }


});








/* =========================
   MOBILE MENU
========================= */


const menuBtn = document.getElementById("menu-btn");

const navbar = document.querySelector(".navbar");



menuBtn.addEventListener("click",()=>{


    navbar.classList.toggle("active");


    if(navbar.classList.contains("active")){


        menuBtn.textContent="✖";


    }
    else{


        menuBtn.textContent="☰";


    }



});




// close menu when clicking link


document.querySelectorAll(".navbar a")
.forEach(link=>{


link.addEventListener("click",()=>{


navbar.classList.remove("active");

menuBtn.textContent="☰";


});


});









/* =========================
   TYPING EFFECT
========================= */



const typingText =
document.getElementById("typing");



const words=[

"MERN Stack Developer",

"Frontend Developer",

"Full Stack Developer",

"Problem Solver"

];



let wordIndex=0;

let charIndex=0;

let deleting=false;



function typeEffect(){


let currentWord = words[wordIndex];



if(!deleting){


typingText.textContent =
currentWord.substring(0,charIndex++);



if(charIndex > currentWord.length){


deleting=true;

setTimeout(typeEffect,1000);

return;

}



}
else{


typingText.textContent =
currentWord.substring(0,charIndex--);



if(charIndex===0){


deleting=false;


wordIndex++;


if(wordIndex===words.length){

wordIndex=0;

}


}



}



setTimeout(typeEffect,100);


}



typeEffect();









/* =========================
   SCROLL REVEAL
========================= */



const sections =
document.querySelectorAll(".section");



window.addEventListener("scroll",()=>{


sections.forEach(section=>{


const position =
section.getBoundingClientRect().top;



const screenHeight =
window.innerHeight;



if(position < screenHeight - 100){


section.style.opacity="1";

section.style.transform="translateY(0)";


}


});


});





// initial hidden style


sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition=".8s";


});








/* =========================
 ACTIVE NAV LINK
========================= */


const allSections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".navbar a");



window.addEventListener("scroll",()=>{


let current="";



allSections.forEach(section=>{


const sectionTop =
section.offsetTop - 150;



if(scrollY >= sectionTop){

current = section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.style.color="white";



if(link.getAttribute("href") === "#"+current){


link.style.color="#38bdf8";


}


});



});

/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* =========================
   ANIMATED SKILL BARS
========================= */

const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

let skillsAnimated = false;

window.addEventListener("scroll", () => {

    const sectionTop = skillSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 150;

    if(sectionTop < triggerPoint && !skillsAnimated){

        progressBars.forEach(bar => {

            const width = getComputedStyle(bar).getPropertyValue("--progress");

            bar.style.width = width;

        });

        skillsAnimated = true;

    }

});


/* =========================
   PROJECT FILTERING
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach(project => {

            if (
                filter === "all" ||
                project.dataset.category === filter
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});

/* =========================
   PROJECT SEARCH
========================= */

const searchInput = document.getElementById("project-search");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    projects.forEach(project => {

        const title =
            project.querySelector("h3").textContent.toLowerCase();

        const description =
            project.querySelector("p").textContent.toLowerCase();

        if (
            title.includes(searchValue) ||
            description.includes(searchValue)
        ) {

            project.style.display = "block";

        } else {

            project.style.display = "none";

        }

    });

});