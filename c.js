var random = Math.floor(Math.random()*6)+1;
var randomimagedice ="dice"+random+".png";
var randomfolder ="dic/"+randomimagedice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomfolder);
var random2=Math.floor(Math.random()*6)+1;
var randomimagedice2="dice"+random2+".png";
var randomfolder2="dic/"+randomimagedice2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomfolder2);
if (random > random2) {
  document.getElementById("refresh").innerHTML="Player 1 Win :)"
}
else if (random2 > random){
  document.getElementById("refresh").innerHTML="Player 2 Win :)"
}else {
  document.getElementById("refresh").innerHTML="Draw!"
}
