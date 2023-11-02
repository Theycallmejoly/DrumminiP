function handleclick(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    default:
  }
}

function buttonanimation(currentkey) {
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);
}

let numberOfDrumButtons = document.querySelectorAll("button").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  const button = document.querySelectorAll(".drum")[i];
  const buttoninnerhtml = button.innerHTML;
  button.addEventListener("click", function() {
    handleclick(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
  });
}

document.addEventListener("keypress", function(event) {
  handleclick(event.key);
  buttonanimation(event.key);
});
