var randomNumber1=Math.floor((Math.random()*6)+1);


var randomimages="dice"+randomNumber1+".png";
var randomimageSource="images/"+randomimages;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimageSource);


var randomNumber2=Math.floor((Math.random()*6)+1);


var randomimages="dice"+randomNumber2+".png";
var randomimageSource="images/"+randomimages;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimageSource);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩player 1 wins!";
}

else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins!🚩";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}
