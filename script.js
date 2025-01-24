const tipForm = document.getElementById("tip-form");
const percentages = tipForm.querySelectorAll("input[name=percent]");
const largeInputs = tipForm.querySelectorAll(".large__input");
const billInput = tipForm.getElementById("bill");
const peopleInput = tipForm.getElementById("people");
// const billInput = document.getElementById("bill");
// const peopleInput = document.getElementById("people");
var clicked;

const clearError = () => {

}

const renderError = () => {

}

const dataIsValid = (data) => {
    console.log(data);
}

const handleLargeInputKeypress = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
    }
}

const handlePercentageClick = (e) => {
    if (clicked) {
        clicked.classList.toggle("clicked");
    }
    e.target.classList.toggle("clicked");
    clicked = e.target;
}

const handlePercentageKeypress = (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        e.target.click();
    }
}

const handleChange = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(tipForm));
}

percentages.forEach((button) => {
    button.addEventListener("click", handlePercentageClick);
    button.addEventListener("keypress", handlePercentageKeypress);
});

largeInputs.forEach((input) => {
    input.addEventListener("keydown", handleLargeInputKeypress);
});


tipForm.addEventListener("change", handleChange);