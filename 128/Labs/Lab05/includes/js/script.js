//variables
let firstName = document.getElementById(`firstName`).value;
let lastName = document.getElementById(`lastName`).value;
let email = document.getElementById(`email`).value;
let age = document.getElementById(`ageInput`).value;
let postal = document.getElementById(`postalCode`).value;
let phoneNumber = document.getElementById(`phoneNumber`).value;

//regex for validation
const regFirstName = /^[a-zA-Z]+$/;
const regLastName = /^[a-zA-Z]+$/;
const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regAge = /^(?:[1-9]?\d|1[01]\d|120)$/;
const regPostal = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
const regPhone = /^(\d{3}[- ]?\d{3}[- ]?\d{4}|\(\d{3}\)\s*\d{3}[- ]?\d{4}|\d{3}[- ]?\d{7})$/;

//other elements (buttons, modal, etc.)
const submitBtn = document.getElementById(`submitBtn`);
const cancelBtn = document.getElementById('cancelBtn');
const errDiv = document.getElementById(`errorMsg`);
const modal2 = document.getElementById(`loginModal`);
const modal = new bootstrap.Modal(modal2); 
const loginBtn = document.getElementById(`loginButton`);
const logoutBtn = document.getElementById(`logoutButton`);
const desktopLoginMsg = document.getElementById(`desktopGreetingMessage`);
const mobileLoginMsg = document.getElementById(`mobileGreetingMessage`);
mobileLoginMsg.style.display = `none`;
let validForm = true;
const navMenu = document.querySelector(`.navbar-toggler`);
let formattedPostalCode = ``;
let formattedPhoneNumber = ``;
let formattedFirstName = ``;
let formattedLastName = ``;

//validation functions
function validateAllFields() {
    if ((firstName === ``) || (lastName === ``) || (email === ``) || (age === ``) || (postal === ``) || (phoneNumber === ``)) {
        errDiv.innerHTML = `<span style=color:red>All fields are required</span>`;
        validForm = false;
        return false;
    }
    else {
        return true;
    }
}

function validateName(name, regex, type) {
    if (name === ``) {
        errDiv.innerHTML = `<span style=color:red>${type} Name is required</span>`;
        validForm = false;
        return false;
    }
    else {
        if (regex.test(name) === false) {
            errDiv.innerHTML = `<span style=color:red>${type} Name must contain only letters and no spaces</span>`;
            validForm = false;
            return false;
        }
        else {
            let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
            return formattedName;
        }
    }
}

function validateEmail(email, regex) {
    if (email === ``) {
        errDiv.innerHTML = `<span style=color:red>Email is required</span>`;
        validForm = false;
        return false;
    }
    else {
        if (regex.test(email) === false) {
            errDiv.innerHTML = `<span style=color:red>Email format is invalid (Must be "email@email.com")</span>`;
            validForm = false;
            return false;
        }
        else {
            return true;
        }
    }
}

function validateAge(age, regex) {
    if (age === ``) {
        errDiv.innerHTML = `<span style=color:red>Age is required</span>`;
        validForm = false;
        return false;
    }
    else {
        if (regex.test(age) === false) {
            errDiv.innerHTML = `<span style=color:red>Age must be between 1 and 120</span>`;
            validForm = false;
            return false;
        }
        else {
            return true;
        }
    }
}

function validatePostalCode(postal, regex) {
    if (postal === ``) {
        errDiv.innerHTML = `<span style=color:red>Postal Code is required</span>`;
        validForm = false;
        return false;
    }
    else {
        if (regex.test(postal) === false) {
            errDiv.innerHTML = `<span style=color:red>Postal Code is an invalid format (A1A1A1 or A1A 1A1)</span>`;
            validForm = false;
            return false;
        }
        else {
            formattedPostalCode = postal.toUpperCase().replace(/(.{3})/g, '$1 ').trim();
            return true;
        }
    }
}

function validatePhoneNumber(phoneNumber, regex) {
    if (phoneNumber === ``) {
        errDiv.innerHTML = `<span style=color:red>Phone Number is required</span>`;
        validForm = false;
        return false;
    }
    else {
        phoneNumber = phoneNumber.replace(/[^\d]/g, '');
        if (phoneNumber.length !== 10) {
            errDiv.innerHTML = `<span style=color:red>Phone Number must be 10 digits</span>`;
            validForm = false;
            return false;
        }
        phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
        if (regex.test(phoneNumber) === false) {
            errDiv.innerHTML = `<span style=color:red>Phone Number format incorrect (000-000-0000 | 000 000 0000 | 0000000000)</span>`;
            validForm = false;
        }
        else {
            formattedPhoneNumber = phoneNumber.replace(/[^\d]/g, '-')
            return true;
        }
    }
}

//form submit button event listener
submitBtn.addEventListener(`click`, function(e){
    firstName = document.getElementById(`firstName`).value;
    lastName = document.getElementById(`lastName`).value;
    email = document.getElementById(`email`).value;
    age = document.getElementById(`ageInput`).value;
    postal = document.getElementById(`postalCode`).value;
    phoneNumber = document.getElementById(`phoneNumber`).value;

    e.preventDefault();
    validForm = true;
    formattedFirstName = validateName(firstName, regFirstName, `First`);
    formattedLastName = validateName(lastName, regLastName, `Last`);
    if (!validateName) {
        validForm = false;
    }
    if (!validateName) {
        validForm = false;
    }
    if (!validateEmail(email, regEmail)) {
        validForm = false;
    }
    if (!validateAge(age, regAge)) {
        validForm = false;
    }
    if (!validatePostalCode(postal, regPostal)) {
        validForm = false;
    }
    if (!validatePhoneNumber(phoneNumber, regPhone)) {
        validForm = false;
    }
    if (!validateAllFields(firstName, lastName, email, age, postal, phoneNumber)) {
        validForm = false;
    }
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(age)
    console.log(postal)
    console.log(phoneNumber)

    if (validForm) {
        window.location = `#`;
        login();
        modal.hide();
    }
});

//clear form if cancel button is clicked
cancelBtn.addEventListener('click', function() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('ageInput').value = '';
    document.getElementById('postalCode').value = '';
    document.getElementById('phoneNumber').value = '';
    errDiv.innerHTML = '';
    modal.hide();
});

//login function
function login() {
    navMenu.click();
    loginBtn.style.display = `none`;
    logoutBtn.style.display = `block`;
    mobileLoginMsg.innerHTML = `Welcome ${formattedFirstName} ${formattedLastName}!`;

    if (window.innerWidth < 992) {
        mobileLoginMsg.style.display = `block`;
        desktopLoginMsg.style.display = `none`;
    } else {
        desktopLoginMsg.style.display = `block`;
        mobileLoginMsg.style.display = `none`;
        desktopLoginMsg.innerHTML = `Welcome ${formattedFirstName} ${formattedLastName}!`;
    }
  
    window.addEventListener("resize", function() {
        if (window.innerWidth < 992) {
            mobileLoginMsg.style.display = `block`;
            desktopLoginMsg.style.display = `none`;
        } else {
            desktopLoginMsg.style.display = `block`;
            mobileLoginMsg.style.display = `none`;
            desktopLoginMsg.innerHTML = `Welcome ${formattedFirstName} ${formattedLastName}!`;
        }
    });
    const userCard = `
    <div class="container py-5 h-100">
       <div class="row d-flex justify-content-center align-items-center h-100">
         <div class="col-md-12 col-xl-4">
           <div class="card profileCard" style="border-radius: 15px;">
             <div class="card-body text-center">
               <div class="mt-3 mb-4">
                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" class="rounded-circle img-fluid" style="width: 100px;"/>
               </div>
               <h4 class="mb-2">${formattedFirstName} ${formattedLastName}</h4>
               <p class="card-text mt-3">${email}</p>
               <hr>
               <div class="d-grid gap-3">
                 <div class="text-start">
                   <p class="card-text mb-2 h6">Age:</p>
                   <p class="card-text"><span style="color: red;">${age}</span></p>
                 </div>
                 <div class="text-start">
                   <p class="card-text mb-2 h6">Postal:</p>
                   <p class="card-text"><span style="color: blue;">${formattedPostalCode}</span></p>
                 </div>
                 <div class="text-start">
                   <p class="card-text mb-2 h6">Phone:</p>
                   <p class="card-text"><span style="color: green;">${formattedPhoneNumber}</span></p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>`
    document.getElementById(`userInfo`).innerHTML = userCard;
};

//logout function
logoutBtn.addEventListener("click", logout);
function logout() {
    sessionStorage.clear();
    location.reload();
};