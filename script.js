// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// ==========================
// Hero Animation
// ==========================

gsap.from(".image-box", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".hero h1", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from(".hero p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".buttons a", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.8,
    ease: "power3.out"
});

// ==========================
// Image Scroll Animation
// ==========================

gsap.to(".image-box", {
    x: -220,
    scale: 0.75,
    ease: "none",

    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "top 20%",
        scrub: true
    }
});

// ==========================
// Reveal Sections
// ==========================

gsap.utils.toArray("section").forEach((section) => {

    gsap.from(section, {

        opacity: 0,
        y: 80,
        duration: 1,

        scrollTrigger: {
            trigger: section,
            start: "top 85%"
        }

    });

});

// ==========================
// Navbar Effect
// ==========================

window.addEventListener("scroll", () => {

    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    } else {

        nav.style.boxShadow = "none";

    }

});

// ==========================
// Scroll Down Button
// ==========================

const scrollBtn = document.querySelector(".scroll-down");

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    });

}
