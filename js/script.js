function init() {
document.getElementById("entrybutton").addEventListener("click", alertMes);
function alertMes() {
var message = document.getElementById("entryinput").value;
alert("Yannick Massivi: " + message);
document.getElementById("textoutput").innerHTML= message;
}
window.addEventListener("load", init);
