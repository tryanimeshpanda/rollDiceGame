var rand1=Math.random();
var rand2=Math.random();
var randomNumber1=Math.floor(rand1*6)+1;
var randomNumber2=Math.floor(rand2*6)+1;
var randomImage1="images/dice"+randomNumber1+".png";
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player 1 Won!";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").textContent="Draw!";
}
else{
    document.querySelector("h1").textContent="Player 2 Won!";
}