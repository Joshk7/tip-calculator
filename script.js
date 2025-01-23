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
    
}


const handleSubmit = (e) => {
    e.preventDefault();
    // Reset the form and possibly call clear error
}

const handleChange = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(tipForm));
    console.log(formData);
}

percentages.forEach((button) => {
    button.addEventListener("click", handleClick);
});

tipForm.addEventListener("submit", handleSubmit);
tipForm.addEventListener("change", handleChange);