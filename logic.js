let aboutBtn = document.querySelector("#about-btn");
aboutBtn.addEventListener("click", () => {
    document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});

let skillsBtn = document.querySelector("#skills-btn");
skillsBtn.addEventListener("click", () => {
    document.querySelector(".skill-section").scrollIntoView({ behavior: "smooth" });
});

let projectsBtn = document.querySelector("#projects-btn");
projectsBtn.addEventListener("click", () => {
    document.querySelector(".project").scrollIntoView({ behavior: "smooth" });
});

let educationBtn = document.querySelector("#education-btn");
educationBtn.addEventListener("click", () => {
    document.querySelector(".education").scrollIntoView({ behavior: "smooth" });
});

let contactBtn = document.querySelector("#contact-btn");
contactBtn.addEventListener("click", () => {
    document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
});

let btnPrimary = document.querySelector(".btn-primary");
btnPrimary.addEventListener("click", () => {
    document.querySelector(".project").scrollIntoView({ behavior: "smooth" });
});

// document.getElementById("btn-outline").addEventListener("click", () => {
//     window.open("resume.jpeg", "_blank"); 
// });

function openImg() {
    window.location.href = "resume.jpeg";
}