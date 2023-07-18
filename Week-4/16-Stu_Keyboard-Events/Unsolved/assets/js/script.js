function keydownAction(event) {
  // TODO: Complete keydown function

  var keyPress = event.key;

  var keyCode = event.code;

  document.querySelector('#key').textContent = keyPress;
  document.querySelector('#code').textContent = keyCode;
  document.querySelector('#status').textContent = "KEYUP Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keydown", keydownAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener('keyup', keyupAction);


