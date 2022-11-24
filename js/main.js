let email = document.getElementById("emial")
let massege = document.getElementById("error")

document.getElementById("submit").onsubmit = function () {
    let valid = /\w@\w.\w/
    if (valid.test(email.value) !== true) {
        console, console.log("hi");
        massege.innerHTML = "please inter vailed email"
        email.style.border = "1px solid red"
    } else {
        massege.innerHTML = ""
        email.style.border = "1px solid green"
    }
    return false
}