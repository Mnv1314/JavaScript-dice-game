var randomNumber1 = Math.floor(Math.random()*6 )+ 1; // random number generator 1-6
var randomImage = "dice"+randomNumber1+".png"; //set random dice dice1-dice6
var randomImageSource= "images/"+randomImage;// retrieve image
var image1= document.querySelectorAll("img")[0]; //setting image src to dice img
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var rImage = "dice" + randomNumber2 + ".png";
var rImageSource = "images/" + rImage;
document.querySelectorAll("img")[1].setAttribute("src",rImageSource);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins !!!";
}
else if(randomNumber1 === randomNumber2)
{
  document.querySelector("h1").innerHTML = "DRAW";
}
else {
   document.querySelector("h1").innerHTML = "Player 2 wins !!!";
}
