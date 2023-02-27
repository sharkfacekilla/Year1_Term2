const fname = document.getElementById(`firstName`).value;
const lname = document.getElementById(`lastName`).value;
const email = document.getElementById(`email`).value;
const age = document.getElementById(`ageInput`).value;
const postal = document.getElementById(`postalCode`).value;
const phoneNumber = document.getElementById(`phoneNumber`).value;
const submitBtn = document.getElementById(`submitBtn`);
const errDiv = document.getElementById(`errorMsg`);
const regFName = /^[a-zA-Z]+$/;
const regLName = /^[a-zA-Z]+$/;
const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regAge = /^(?:[1-9]?\d|1[01]\d|120)$/;
const regPostal = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
const regPhone = /^(\d{3}[- ]?\d{3}[- ]?\d{4}|\(\d{3}\)\s*\d{3}[- ]?\d{4}|\d{3}[- ]?\d{7})$/;
let validForm;
const modal2 = document.getElementById(`loginModal`);
const modal = new bootstrap.Modal(modal2); 



submitBtn.addEventListener(`click`, function(e){
    validForm = true;
    e.preventDefault();

    //Validation
    if (fname === ``) {
        errDiv.innerHTML = `<span style=color:red>First Name is required</span>`;
        validForm = false;
    }
    else {
        if (regFName.test(fname) === false) {
            errDiv.innerHTML = `<span style=color:red>First Name must contain only letters and no spaces</span>`;
            validForm = false;
        }
    }
    if (lname === ``) {
        errDiv.innerHTML = `<span style=color:red>Last Name is required</span>`;
        validForm = false;
    }
    else {
        if (regLName.test(lname) === false) {
            errDiv.innerHTML = `<span style=color:red>Last Name must contain only letters and no spaces</span>`;
            validForm = false;
        }
    }
    if (email === ``) {
        errDiv.innerHTML = `<span style=color:red>Email is required</span>`;
        validForm = false;
    }
    else {
        if (regEmail.test(email) === false) {
            errDiv.innerHTML = `<span style=color:red>Email is invalid</span>`;
            validForm = false;
        }
    }
    if (age === ``) {
        errDiv.innerHTML = `<span style=color:red>Age is required</span>`;
        validForm = false;
    }
    else {
        if (regAge.test(age) === false) {
            errDiv.innerHTML = `<span style=color:red>Age must be between 1 and 120</span>`;
            validForm = false;
        }
    }
    if (postal === ``) {
            errDiv.innerHTML = `<span style=color:red>Postal Code is required</span>`;
            validForm = false;
    }
    else {
        if (regPostal.test(postal) === false) {
            errDiv.innerHTML = `<span style=color:red>Postal Code is invalid</span>`;
            validForm = false;
        }
    }
    if (phoneNumber === ``) {
        errDiv.innerHTML = `<span style=color:red>Phone Number is required</span>`;
        validForm = false;
    }
    else {
        if (regPhone.test(phoneNumber) === false) {
            errDiv.innerHTML = `<span style=color:red>Phone Number must contain only numbers</span>`;
            validForm = false;
        }
    }
    if ((fname === ``) && (lname === ``) && (email === ``) && (age === ``) && (postal === ``) && (phoneNumber === ``)) {
        errDiv.innerHTML = `<span style=color:red>All fields are required</span>`;
    }
    if (validForm) {

        window.location = `#`;
        login();
        modal.hide();
  
    }
});

function login() {
    /*
        const userCard = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">User Information</h5>
                <p class="card-text">First Name: ${fname}</p>
                <p class="card-text">Last Name: ${lname}</p>
                <p class="card-text">Email: ${email}</p>
                <p class="card-text">Age: ${age}</p>
                <p class="card-text">Postal Code: ${postal}</p>
                <p class="card-text">Phone Number: ${phoneNumber}</p>
            </div>
        </div>`;
        */
       const userCard = `
       <div class="container mt-5">
       <div class="card">
         <div class="card-header bg-primary text-white">
           <h5 class="card-title mb-0">User Profile</h5>
         </div>
         <div class="card-body">
           <div class="row">
             <div class="col-md-3">
               <img class="img-fluid rounded-circle mb-3" src="profile-picture.jpg" alt="Profile picture">
               <img class="img-fluid rounded mb-3" src="./includes/images/forest.jpg" alt="Cover image">
             </div>
             <div class="col-md-9">
               <h6 class="card-subtitle mb-3">First Name</h6>
               <p class="card-text">John</p>
               <h6 class="card-subtitle mb-3">Last Name</h6>
               <p class="card-text">Doe</p>
               <h6 class="card-subtitle mb-3">Email</h6>
               <p class="card-text">johndoe@example.com</p>
               <h6 class="card-subtitle mb-3">Age</h6>
               <p class="card-text">25</p>
               <h6 class="card-subtitle mb-3">Postal Code</h6>
               <p class="card-text">12345</p>
               <h6 class="card-subtitle mb-3">Phone Number</h6>
               <p class="card-text">555-555-5555</p>
             </div>
           </div>
         </div>
       </div>
     </div>
     
     
`
        document.getElementById(`userInfo`).innerHTML = userCard;
    };
