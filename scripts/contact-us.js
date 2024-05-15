// Contact-us form 

const contactUsForm = document.getElementById("contactUsForm");
const thankYou = document.querySelector(".thank-you");

contactUsForm.addEventListener("submit", function(event) {
    contactUsForm.remove();
    thankYou.style.display = "block";
});