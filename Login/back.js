function login() {
    var name = $('user').val();
    var password = $('password').val();

    if (name && password && name === "admin" && password === "admin") {
        const user = {
            name: nome,
            entryDate: new Date(),
            id: Math.floor(Math.random() * 100000),
        }

        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "../Store";
    }else {
        document.getElementById("error-mordal").style.display = "flex";
        document.getElementById("user").style.boreder = "2px solid red";
        document.getElementById("password").style.border = "2px solid red";
    }
}

function closeError() {
        document.getElementById("error-mordal").style.display = "none";
        document.getElementById("user").style.boreder = "2px solid rgba(235, 41, 206, 0.781)";
        document.getElementById("password").style.border = "2px solid rgba(235, 41, 206, 0.781)";
}

function showPassword() {
    var inputPassword = document.querySelector("#password");

    if (inputPassword.getAttribute("type") === "password"){
        inputPassword.setAttribute("type", "text");
    }else {
        inputPassword.setAttribute("type", "password");
    }
}