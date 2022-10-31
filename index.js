
function clearScreen(){
  document.getElementById("result").value = "";
}

function ram(value){
  let res= document.getElementById("result");
  if(res.value == "undefined"){
    res.value ="";
  }

  res.value += value;
}

document.addEventListener('keydown',function(event)){
  playSounds(event.key);
});

function playSounds(button){
  var song1= new Audio('sounds\crash.mp3');
  song1.play();
}
