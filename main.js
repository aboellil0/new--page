console.log("helow");
const collapse = document.getElementById("hidden");
const collitem = document.querySelectorAll("[id='hide']");
const colbtn = document.getElementById("col-btn");
const maxmedia = window.matchMedia("(max-width: 768px)");
const minmedia = window.matchMedia("(min-width: 768px)");
let propertyAdded = false;
colbtn.addEventListener("click", () => {
    if (!propertyAdded) {
        collapse.classList.remove("hidden");
        collapse.classList.add("show");
        for (const element of collitem) {
            element.classList.remove("hide")
        }
        console.log("moahemd");
        propertyAdded = true;
    } else {
        collapse.classList.add("hidden");
        collapse.classList.remove("show");
        for (const element of collitem) {
            element.classList.add("hide")
        }
        console.log("aboellil");
        propertyAdded = false;
    }
}, {
    transitionTime: "0.5s",
});