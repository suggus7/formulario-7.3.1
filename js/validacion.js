
document.getElementById('regBtn').addEventListener('click', function(event) {
    const password = document.getElementById('password1').value;

    if (password.length < 6) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});



function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}   


function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}
function Comprobar(){
    let password1 = document.getElementById("password1").value
    let password2= document.getElementById("password2").value
    if (password1==password2){
        showAlertSuccess()
    } else
    {showAlertError}
}
