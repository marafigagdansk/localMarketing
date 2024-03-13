let produtos;

window.onload = function () {
    var storedUser = localStorage.getItem("user");
    var user = JSON.parse(storedUser);
    
    document.getElementById("user").textContent = user.name;
    document.getElementById("perfil").textContent = user.entryDate;
    document.getElementById("idPerfil").textContent = user.id;
}

