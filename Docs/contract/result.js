
const client = document.querySelector('#clientName');
const usernameInput = document.querySelector('#username');
const payments = document.querySelector('#payments')
const paymentInput = document.querySelector('#paymentAmount');
const service = document.querySelector('#service');
const serviceInput = document.querySelector('#serviceDescription');
const startDay = document.querySelector('#sDate');
const startDateInput = document.querySelector('#startDate');
const endDay = document.querySelector('#eDate');
const endDateInput = document.querySelector('#endDate');

const params = new URLSearchParams(window.location.search);

params.forEach((value, key) =>{
    //Client name
    if(key == 'username'){
        client.append(`${value}`)
     //payment amount
    }else if(key == 'paymentAmount'){
        payments.append(`${value}`)
    //service description
    }else if(key == 'serviceDescription'){
        service.append(`${value}`)
    //start date
    }else  if(key == 'startDate'){
        startDay.append(`${value}`)
    //end date
    }else  if(key == 'endDate'){
        endDay.append(`${value}`)
    }
});


