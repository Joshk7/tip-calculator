const tipForm = document.querySelector("form");
const billInput = document.getElementById("bill");
const percentageLabels = tipForm.querySelectorAll(".percentage__label");
const percentages = tipForm.querySelectorAll(".percentage");
const custom = document.getElementById("custom");
const peopleInput = document.getElementById("people");
const reset = document.getElementById("reset");
const numberInputs = tipForm.querySelectorAll("input[type=number]");
const error = document.getElementById("error");
const tip = document.getElementById("tip");
const total = document.getElementById("total");

var unClicked = true;

const labelPercent = {};
percentages.forEach((input) => {
    labelPercent[input.id] = input.value;
});

const getPercentage = () => {
    if (custom.value) {
        return parseFloat((custom.value / 100));
    }

    for (const button of percentageLabels) {
        if (button.classList.contains("clicked")) {
            const key = button.getAttribute("for");
            return parseFloat(labelPercent[key]);
        }
    }
};

const inputLimit = {
    bill: 10000000,
    custom: 1000,
    people: 100000,
};

const handleInputLimit = (e) => {
    if (e.key === "-") {
        e.preventDefault();
    }

    if (e.target.id === "people" && e.key === ".") {
        e.preventDefault();
    }

    if (e.key === "Backspace") {
        return;
    }

    const value = e.target.value;
    const components = value.split(".");

    if (components.length > 1 && components[1].length === 2) {
        e.preventDefault();
    }

    if (parseFloat(value + e.key) > inputLimit[e.target.id]) {
        e.preventDefault();
    }
};

const formData = () => {
    return {
        bill: billInput.value ? parseFloat(billInput.value): 0,
        percent: getPercentage(),
        people: peopleInput.value ? parseFloat(peopleInput.value) : 0,
    };
};

const resetPercentButtons = () => {
    unClicked = true;
    percentageLabels.forEach((button) => {
        button.classList.remove("clicked");
    });
};

const resetCustom = () => {
    custom.value = "";
    custom.classList.remove("outlined");
};

const resetTip = () => {
    tip.innerText = "$0.00";
}

const resetTotal = () => {
    total.innerText = "$0.00";
}

const disableButton = () => {
    if (
        billInput.value === "" &&
        unClicked &&
        custom.value === "" &&
        peopleInput.value === ""
    ) {
        reset.disabled = true;
    } else {
        reset.disabled = false;
    }
};

const clearError = () => {
    error.classList.add("invisible");
    peopleInput.classList.remove("error__input");
    console.log("no error!");
};

const renderError = () => {
    error.classList.remove("invisible");
    peopleInput.classList.add("error__input");
    console.log("error!");
};

const validate = (bill, people) => {
    return !bill || people;
};

const calculateTip = (bill, percentage = 0, people) => {
    const tip = (bill * percentage) / people;
    return tip.toFixed(2);
};

const calculateTotal = (bill, people) => {
    const total = bill / people;
    return total.toFixed(2);
};

const handleBillInput = (e) => {
    disableButton();
}

const handleRadioClick = (e) => {
    resetCustom();
    resetPercentButtons();
    unClicked = false;
    e.target.classList.toggle("clicked");
    disableButton();
};

const handleRadioKeypress = (e) => {
    if (e.key === "Enter") {
        e.target.click();
    }
};

const handleCustomClick = (e) => {
    resetPercentButtons();
    custom.classList.toggle("outlined");
};

const handleCustomInput = (e) => {
    disableButton();
};

const handlePeopleInput = (e) => {
    disableButton();
};

const handleResetClick = (e) => {
    billInput.value = "";
    resetPercentButtons();
    resetCustom();
    peopleInput.value = "";
    resetTip();
    resetTotal();
    clearError();
    disableButton();
};

const handleFormInput = (e) => {
    const { bill, percent, people } = formData();
    const valid = validate(bill, people);
    if (bill === 0) {
        return;
    }

    if (!valid) {
        renderError();
    } else {
        const tipAmount = calculateTip(bill, percent, people);
        const totalAmount = calculateTotal(bill, people);
        tip.innerText = `$${tipAmount}`;
        total.innerText = `$${totalAmount}`;
        clearError(); 
    }
}

billInput.addEventListener("input", handleBillInput);

percentageLabels.forEach((button) => {
    button.addEventListener("click", handleRadioClick);
    button.addEventListener("keypress", handleRadioKeypress);
});

custom.addEventListener("click", handleCustomClick);
custom.addEventListener("input", handleCustomInput);

peopleInput.addEventListener("input", handlePeopleInput);

reset.addEventListener("click", handleResetClick);

numberInputs.forEach((input) => {
    input.addEventListener("keydown", handleInputLimit);
});

tipForm.addEventListener("input", handleFormInput);