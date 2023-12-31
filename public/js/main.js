const textIn = document.querySelector(".lg-txt-in");
const textOut = document.querySelector(".lg-txt-out");
const cButton = document.querySelector(".ctl-btn");

cButton.addEventListener("click", () => {
     const formatted = JSON.stringify(JSON.parse(textIn.value), null, 3);
     textOut.value = formatted;
})
