function validate() {
    event.preventDefault();
    let username = document.getElementById(`username`).value;
    let postalCode = document.getElementById(`postalCode`).value;
    let usernameRegex = /^[a-zA-Z0-9]+$/;
    let postalCodeRegex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

    let usernameResult = usernameRegex.test(username);
    let postalResult = postalCodeRegex.test(postalCode);
    if (usernameResult == false) {
        document.getElementById(`passOrFail`).innerHTML =`Please input another name`;
        return false;
    }   
    if (postalResult == false) {
        document.getElementById(`passOrFail`).innerHTML = `Please input another postal code`;
        return false;
    } 
    return true;
}

document.getElementById(`subBtn`).addEventListener(`click`, validate);