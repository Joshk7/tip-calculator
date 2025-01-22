const tipForm = document.getElementById("tip-form");
const percentages = tipForm.querySelectorAll("input[name=percent]");


const clearError = () => {

}

const renderError = () => {

}

const dataIsValid = (data) => {
    console.log(data);
}


const handleClick = (e) => {
    e.preventDefault();
    console.log(tipForm.elements);
}


const handleSubmit = (e) => {
    e.preventDefault();
    // Reset the form and possibly call clear error
}

const handleChange = (e) => {
    // const data = Object.fromEntries(new FormData(e.target));
    // dataIsValid(data);
    console.log(e);
}

percentages.forEach((button) => {
    button.addEventListener("click", handleClick);
});

tipForm.addEventListener("submit", handleSubmit);
tipForm.addEventListener("change", handleChange);