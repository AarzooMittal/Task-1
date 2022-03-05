var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".alt-item");
var pickedColor = pickColor();
var color = document.getElementById("colors");
var optns = document.querySelector(".alts");
var h1 = document.querySelector("h1");
var newGameButton = document.querySelector(".newGame");
dLevelSelect();
function dLevelSelect() {
    var dLevel = "easy";
    dLevel = document.getElementById("dLevel").value;

    console.log(dLevel);
    console.log(typeof (dLevel));
    if (dLevel === "easy") {
        easydLevel();
    }
    if(dLevel === "hard" ) {
        harddLevel();
    }
}

function sizekmezz(x) {
    if(x.matches)
    {
        optns.style.gridTemplateRows = "100px 100px 100px";
        optns.style.gridTemplateColumns = "100px";
    }
    else
    {
        optns.style.gridTemplateRows = "300px";
        optns.style.gridTemplateColumns = "300px 300px 300px";
      }
}
function easydLevel(){
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
    color.textContent = pickedColor;
    var x = window.matchMedia("(max-width: 700px)");

    sizekmezz(x);
    x.addListener(sizekmezz);

  for(var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
}

function sizekm(x) {
    if(x.matches)
    {
        optns.style.gridTemplateRows = "100px 100px 100px";
        optns.style.gridTemplateColumns = "100px 100px";
    }
    else
    {
        optns.style.gridTemplateRows = "200px 200px";
        optns.style.gridTemplateColumns = "200px 200px 200px";
      }
}
function harddLevel(){

  numSquares = 6;
  colors = generateRandomColors(numSquares);
    pickedColor = pickColor();


    var x = window.matchMedia("(max-width: 700px)");

    sizekm(x);
    x.addListener(sizekm);


  color.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
      square[i].style.background = colors[i];
      square[i].style.display = "flex";
  }
}

newGameButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  color.textContent = pickedColor;
  this.textContent = "New Color";
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = "whitesmoke";
})

color.textContent = pickedColor;

for(var i = 0; i < square.length; i++) {
  square[i].style.background = colors[i];
  square[i].addEventListener("click", function() {

    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
        alert("Hurray! Op Op!🔥");
      newGameButton.textContent = "New Game";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }else{
      this.style.background = "#232323";
        alert("Try again!🫂");
    }
  })
}

function changeColors(color){
for (var i = 0; i < square.length; i++) {
    square[i].style.background = color;
}

}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
var r = Math.floor(Math.random() * 256)
var g = Math.floor(Math.random() * 256)
var b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}