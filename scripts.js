const emailSpan = document.querySelectorAll(".emailSpan");
const passwordSpan = document.querySelectorAll(".passwordSpan");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
let transitionTime = 0;

const changeEmailLabel = () => {
    emailSpan.forEach((span) => {
        span.style.transitionDelay = `${transitionTime}s`;
        span.style.transform = "translate(0px, -25px)";
        span.style.color = "#ADD8E6";
        transitionTime += 0.075;
    })
    transitionTime = 0;
}

const revertEmailLabel = () => {
    emailSpan.forEach((span) => {
        span.style.transitionDelay = `${transitionTime}s`;
        span.style.transform = "translate(0px, 0px)";
        span.style.color = "white";
        transitionTime += 0.075;
    })
    transitionTime = 0;
}

const changePasswordLabel = () => {
    passwordSpan.forEach((span) => {
        span.style.transitionDelay = `${transitionTime}s`;
        span.style.transform = "translate(0px, -25px)";
        span.style.color = "#ADD8E6";
        transitionTime += 0.075;
    })
    transitionTime = 0;
}

const revertPasswordLabel = () => {
    passwordSpan.forEach((span) => {
        span.style.transitionDelay = `${transitionTime}s`;
        span.style.transform = "translate(0px, 0px)";
        span.style.color = "white";
        transitionTime += 0.075;
    })
    transitionTime = 0;
}

emailInput.addEventListener("focus", changeEmailLabel)
emailInput.addEventListener("blur", revertEmailLabel)
passwordInput.addEventListener("focus", changePasswordLabel)
passwordInput.addEventListener("blur", revertPasswordLabel)