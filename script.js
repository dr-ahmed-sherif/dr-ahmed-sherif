// ===============================
// GSAP
// ===============================

gsap.registerPlugin(ScrollTrigger);


// ===============================
// Hero Animation
// ===============================

const tl = gsap.timeline();


tl.from(".navbar", {
    y: -80,
    opacity: 0,
    duration: 1
})


.from(".hero h1", {
    y: 50,
    opacity: 0,
    duration: .8
})


.from(".hero h2", {
    y: 40,
    opacity: 0,
    duration: .8
})


.from(".hero p", {
    y: 30,
    opacity: 0,
    duration: .7
})


.from(".btn", {
    scale: 0,
    opacity: 0,
    duration: .5
});





// ===============================
// Sections Animation
// ===============================


gsap.utils.toArray("section").forEach(section => {


    gsap.from(section.querySelectorAll(".section-title, .about-box, .card, .contact-box"), {

        scrollTrigger: {

            trigger: section,

            start: "top 80%",

        },


        y:50,

        opacity:0,

        duration:1,

        stagger:.2

    });


});





// ===============================
// Navbar Effect
// ===============================


window.addEventListener("scroll",()=>{


    const navbar = document.querySelector(".navbar");


    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.1)";

    }

    else{

        navbar.style.boxShadow = "none";

    }


});// Stats Animation
// ===============================

gsap.from(".stat",{

    y:40,

    opacity:0,

    stagger:.2,

    scrollTrigger:{

        trigger:".about-stats",

        start:"top 80%"

    }

});

// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");

    if(window.scrollY>40){

        nav.style.boxShadow="0 15px 45px rgba(0,0,0,.08)";

        nav.style.background="rgba(255,255,255,.82)";

    }

    else{

        nav.style.boxShadow="none";

        nav.style.background="rgba(255,255,255,.72)";

    }

});

// ===============================
// Smooth Anchor Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
    });

}
// ===============================
// Sticky Image Animation
// ===============================

gsap.to(".image-sticky img", {

    scale: 0.88,

    rotate: -2,

    scrollTrigger: {

        trigger: ".about",

        start: "top center",

        end: "bottom center",

        scrub: true

    }

});
