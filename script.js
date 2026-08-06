// ===============================
// GSAP
// ===============================

gsap.registerPlugin(ScrollTrigger);

// ===============================
// Hero Intro
// ===============================

const tl = gsap.timeline();

tl.from(".navbar", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})

.from(".image-box", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
}, "-=.5")

.from(".hero h1", {
    y: 40,
    opacity: 0,
    duration: .8
}, "-=.5")

.from(".hero p", {
    y: 30,
    opacity: 0,
    duration: .8
}, "-=.5")

.from(".buttons a", {
    y: 20,
    opacity: 0,
    stagger: .15,
    duration: .6
}, "-=.3")

.from(".scroll-down", {
    opacity: 0,
    y: -20,
    duration: .8
});

// ===============================
// About Animation
// ===============================

gsap.from(".about-image", {

    x: -120,
    opacity: 0,

    scrollTrigger: {

        trigger: ".about",

        start: "top 75%"

    }

});

gsap.from(".about-text", {

    x: 120,
    opacity: 0,

    scrollTrigger: {

        trigger: ".about",

        start: "top 75%"

    }

});

// ===============================
// Cards Animation
// ===============================

gsap.utils.toArray(".card").forEach((card)=>{

    gsap.from(card,{

        y:80,

        opacity:0,

        duration:.8,

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

});

// ===============================
// Stats Animation
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
