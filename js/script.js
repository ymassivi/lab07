function init() {
  var button = document.getElementById("entrybutton");
  var message = document.getElementById("entryinput");
  var result = document.getElementById("textoutput");
  button.addEventListener("click", function () {
    alert("Yannick Massiv: " + message.value);
    document.getElementById("textoutput").innerHTML = message.value;
    result.innerHTML = message.value;
  });
}

window.addEventListener('load', init);
