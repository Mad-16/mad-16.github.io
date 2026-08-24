// =========================================================
// DYNAMIC COPYRIGHT YEAR
// =========================================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================================================
// SCROLL REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
    ".section-heading, .project-card, .skill-card, .principle-card, .experience-card, .mindset-box, .contact-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
