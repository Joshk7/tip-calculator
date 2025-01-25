const tipForm = document.querySelector("form");
const percentages = tipForm.querySelectorAll("input[name=percent]");
const numberInputs = tipForm.querySelectorAll("input[type=number]");
const reset = document.getElementById("reset");
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");

var clicked;

const clearError = () => {
    console.log("no error!");
}

const renderError = () => {
    console.log("error!")
}

const digits = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
}

const inputLimit = {
    "bill": 10000000000000,
    "custom": 100,
    "people": 100000,
}

const handleKeyPress = (e) => {
    if (e.key === "." || e.key === "-") {
        e.preventDefault();
    }

    if (e.key in digits && parseInt(e.target.value + e.key) > inputLimit[e.target.id]) {
        e.preventDefault()
    }
}

const handlePercentageClick = (e) => {
    if (clicked) {
        if (clicked.id === "custom") {
            clicked.value = "";
        }
        clicked.classList.toggle("clicked");
    }

    e.target.classList.toggle("clicked");
    clicked = e.target;
}

const handlePercentageKeypress = (e) => {
    if (e.key === "Enter") {
        e.target.click();
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    const fields = tipForm.querySelectorAll("input");
    for (const field of fields) {
        formData[field.name] = field.value;
    }

    if (formData.bill && clicked && !formData.people) {
        renderError();
    } else {
        clearError();
    }

    console.log(formData);
}

const handleResetClick = (e) => {
    // doesn't work :(
    tipForm.reset();
}

percentages.forEach((button) => {
    button.addEventListener("click", handlePercentageClick);
    button.addEventListener("keypress", handlePercentageKeypress);
});

numberInputs.forEach((input) => {
    input.addEventListener("keydown", handleKeyPress);
});

// tipForm.addEventListener("change", handleChange);
tipForm.addEventListener("submit", handleSubmit)
reset.addEventListener("click", handleResetClick);