for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){ // query is used for finding the no. of buttons

  document.querySelectorAll(".drum")[i].addEventListener("click",function (){     // anonymous function  that is function without a name.
    var buttoninnerhtml =  this.innerHTML;
    makesound(buttoninnerhtml);
    buttonAnimation(buttoninnerhtml);
})
}

document.addEventListener("keydown",function(event){   // addiung eventlistener to the keyboard using keydown.
  makesound(event.key);    // event.key is uesd to capture the key which is pressed on the keyboard
  buttonAnimation(event.key);
})


function makesound(key){
  switch (key) {
    case "w":
     var tom1 = new Audio("sounds/tom-1.mp3");
     tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
     var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
    break;
    case "d":
     var tom4 = new Audio("sounds/tom-4.mp3");
     tom4.play();
     break;
    case "j":
     var snare = new Audio("sounds/snare.mp3");
     snare.play();
     break;
    case "k":
     var crash = new Audio("sounds/crash.mp3");
     crash.play();
     break;
    case "l":
     var kick = new Audio("sounds/kick-bass.mp3");
     kick.play();
     break;
    default:
     alert("please, select the correct key.");
}
}

 function buttonAnimation(currentkey){
   var activebutton = document.querySelector("."+currentkey);  //capture the button we pressed

   activebutton.classList.add("pressed");   // adding the class named "pressed" to the button we pressed.

  setTimeout(function () {
    activebutton.classList.remove("pressed");  // removing the class from the button after certain time limit.
  }, 100);
 }
