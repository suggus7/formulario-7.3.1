function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
function Comprobar(){
    let password1 = document.P1.password1.value
    let password2= document.P2.password2.value
    if (password1==password2){
        showAlertSuccess()
    } else
    {showAlertError}
}