// Typing effect

const text = "Engineering Student | Developer | Learner";

let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

window.onload = typing;



// Scroll animation

const elements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    elements.forEach(el => {

        const position = el.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if (position < screen - 100) {
            el.classList.add("show");
        }

    });

});


const revealCards = document.querySelectorAll(".reveal-card");

function revealOnScroll() {
    revealCards.forEach((card) => {
        const windowHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 80) {
            card.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function setActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {
        localStorage.setItem("theme", "light");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        localStorage.setItem("theme", "dark");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }

    lastScroll = currentScroll;
});


const revealElements = document.querySelectorAll(".reveal-up, .reveal-left");

function revealOnScroll() {
    revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const cards = document.querySelectorAll(".mini-info-card, .bottom-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal-up, .reveal-left");
    revealElements.forEach((el) => el.classList.add("active"));
});

const projectCards = document.querySelectorAll(".project-card-equal");

function revealProjects() {
    projectCards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealProjects);
window.addEventListener("load", revealProjects);

/* certificate modal */
function openCertModal(src) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certModalImg");

    modal.style.display = "flex";
    modalImg.src = src;
}

function closeCertModal() {
    document.getElementById("certModal").style.display = "none";
}

/* close modal on outside click */
window.addEventListener("click", function (e) {
    const modal = document.getElementById("certModal");
    if (e.target === modal) {
        closeCertModal();
    }
});

/* reveal certificates on scroll */
const certCards = document.querySelectorAll(".cert-card-new");

function revealCertificates() {
    certCards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCertificates);
window.addEventListener("load", revealCertificates);

const reveals = document.querySelectorAll(".reveal-up");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 80) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);