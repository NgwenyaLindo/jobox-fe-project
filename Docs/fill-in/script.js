const form = document.querySelector('#fill-in');
const usernameInput = document.querySelector('#username');
const paymentInput = document.querySelector('#paymentAmount');
const serviceInput = document.querySelector('#serviceDescription');
const startDateInput = document.querySelector('#startDate');
const endDateInput = document.querySelector('#endDate');


form.addEventListener('submit', (e)=>{
    //e.preventDefault();

    validateForm();
})

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true
    inputContainers.forEach((container) => {
        if(container.classList.contains('.error')){
            result = false
        }
    })
    return result;
}

function validateForm(){
    //username input
    if(usernameInput.value.trim() == ''){
        setError(usernameInput, 'Name cannot be empty');
    }else if(usernameInput.value.trim().length < 3 ){
        setError(usernameInput, 'Name must have a minimum of 3 characters');
    }else {
        setSuccess(usernameInput);
    }
    //payment amount
    if(paymentInput.value.trim() == ''){
        setError(paymentInput, 'Payment amount cannot be empty')
    }else if(paymentInput.value.trim() < 0){
        setError(paymentInput, 'This cannot be a negative value')
    }else {
        setSuccess(paymentInput);
    }
    //service description
    if(serviceInput.value.trim() == ''){
        setError(serviceInput, 'This field cannot be empty');
    }else {
        setSuccess(serviceInput);
    }
    //date field
    //start date
    if(startDateInput.value.trim() == ''){
        setError(startDateInput, 'This field cannot be empty');
    }else {
        setSuccess(startDateInput);
    }
    //end date
    if(endDateInput.value.trim() == ''){
        setError(endDateInput, 'Name cannot be empty');
    }else if(startDateInput.value.trim() > endDateInput.value.trim()) {
        setError(endDateInput, 'This date has to be after the start date')
    }else {
        setSuccess(endDateInput);
    }
}


function setError(element, errorMessage){
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}