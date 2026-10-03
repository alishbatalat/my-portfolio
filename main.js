gsap.registerPlugin(ScrollTrigger);

console.log("GSAP loaded:", typeof gsap !== "undefined");
console.log("ScrollTrigger loaded:", typeof ScrollTrigger !== "undefined");



// ==========================================
// 2. HERO ANIMATION
// ==========================================

const heroTimeline = gsap.timeline();

heroTimeline
    .from(".hero-small", {
        y: 40,
        opacity: 0,
        duration: 0.8
    })

    .from(".hero h1", {
        y: 50,
        opacity: 0,
        duration: 0.9
    }, "-=0.5")

    .from(".hero h2", {
        y: 40,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")

    .from(".hero-button", {
        y: 30,
        opacity: 0,
        duration: 0.7
    }, "-=0.4");


// ==========================================
// 3. ABOUT SECTION ANIMATION
// ==========================================

gsap.from("#about .section-title", {

    scrollTrigger: {
        trigger: "#about",
        start: "top 75%"
    },

    y: 50,
    opacity: 0,
    duration: 0.8
});


gsap.from(".about-image", {

    scrollTrigger: {
        trigger: ".about-grid",
        start: "top 75%"
    },

    x: -100,
    opacity: 0,
    duration: 1
});


gsap.from(".about-content", {

    scrollTrigger: {
        trigger: ".about-grid",
        start: "top 75%"
    },

    x: 100,
    opacity: 0,
    duration: 1
});





// ================================
// SERVICES
// ================================
// ========================================
// SERVICES SECTION ANIMATION
// ========================================

const serviceCards = gsap.utils.toArray(".service-card");

if (serviceCards.length > 0) {

    gsap.set(serviceCards, {
        opacity: 0,
        y: 80
    });


    ScrollTrigger.create({

        trigger: "#services",

        start: "top 75%",

        once: true,

        onEnter: function () {

            gsap.to(serviceCards, {

                opacity: 1,
                y: 0,

                duration: 0.8,

                stagger: 0.2,

                ease: "power3.out",

                clearProps: "transform"

            });

        }

    });

}

// ==========================================
// 5. PORTFOLIO ENTRANCE ANIMATION
// ==========================================

gsap.from(".portfolio-item", {

    scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 80%"
    },

    y: 60,
    opacity: 0,
    scale: 0.95,
    duration: 0.7,
    stagger: 0.12
});


// ==========================================
// 6. STATS ANIMATION
// ==========================================

gsap.from(".stat", {

    scrollTrigger: {
        trigger: ".stats",
        start: "top 80%"
    },

    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15
});


// ==========================================
// 7. CONTACT ANIMATION
// ==========================================

gsap.from("#contact .section-title", {

    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%"
    },

    y: 50,
    opacity: 0,
    duration: 0.8
});


gsap.from(".contact-form", {

    scrollTrigger: {
        trigger: ".contact-form",
        start: "top 85%"
    },

    y: 70,
    opacity: 0,
    duration: 1
});

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    console.log("Filter buttons:", filterButtons.length);
    console.log("Portfolio items:", portfolioItems.length);

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const filterValue = this.getAttribute("data-filter");

            console.log("Clicked:", filterValue);


            // Remove active class from every button
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });


            // Add active to clicked button
            this.classList.add("active");


            // Show/hide portfolio items
            portfolioItems.forEach(function (item) {

                if (
                    filterValue === "all" ||
                    item.classList.contains(filterValue)
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

});

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});



