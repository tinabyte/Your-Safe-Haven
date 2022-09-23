//assign each song with number and if the forward is clicked then i++ vice versa, when reached highest number, the song index =0 and restarts.
//location.href="selfCare.html";






var bb = document.getElementById("back");
var ff = document.getElementById("forward");
var vid = document.getElementById("myVideo");
var songName=document.getElementById("songName");


var songIndex=10;
chooseSong();

bb.addEventListener("click",back);
ff.addEventListener("click",forward);


function back(){
if(songIndex>0){
  songIndex--;
}else{
  songIndex=12;
  }
chooseSong();
}

function forward(){
  if(songIndex<11){
    songIndex++;
  }else{
    songIndex=0;
  }
  chooseSong();
}

function chooseSong(){
  console.log("Song: "+songIndex);
if(songIndex==0){
songName.innerHTML="Chilly by Purple Cat";
vid.src="pics/Chilly.mp3";
}else if(songIndex==1){
songName.innerHTML="Easy -by Ron Gelinas Chillout Lounge ";
vid.src="pics/Easy.mp3";
}else if(songIndex==2){
  songName.innerHTML=" Eternal Springtime by | e s c p |  ";
vid.src="pics/Eternal Springtime.mp3";
}else if(songIndex==3){
  songName.innerHTML=" Ferris Wheel by Purrple Cat  ";
vid.src="pics/Ferris Wheel.mp3";
}else if(songIndex==4){
  songName.innerHTML=" Last Promise by Nettson  ";
vid.src="pics/Last Promise.mp3";
}else if(songIndex==5){
  songName.innerHTML=" Nature by Scandinavianz  ";
vid.src="pics/Nature.mp3";
}else if(songIndex==6){
  songName.innerHTML=" Slow Down by LiQWYD  ";
vid.src="pics/Slow Down.mp3";
}else if(songIndex==7){
  songName.innerHTML=" Star Bright by Purrple Cat  ";
vid.src="pics/Star Bright.mp3";
}else if(songIndex==8){
  songName.innerHTML="sumi by Barradeen";
vid.src="pics/sumi.mp3";
}else if(songIndex==9){
  songName.innerHTML=" Upside Quest by Ron Gelinas Chillout Lounge  ";
vid.src="pics/Upside Quest.mp3";
}else if(songIndex==10){
  songName.innerHTML=" when she’s near me by Barradeen";
vid.src="pics/when she's near me.mp3";
}else if(songIndex==11){
  songName.innerHTML=" Wishing Well by Purrple Cat  ";
vid.src="pics/Wishing Well.mp3";
}else if(songIndex==12){
  songName.innerHTML=" you had me at hello by Barradeen  ";
vid.src="pics/you had me at hello.mp3";
}
}

///////////////NAVIGATION 
var p1=document.getElementById("1p");
var p2=document.getElementById("2p");
var p3=document.getElementById("3p");
var p4=document.getElementById("4p");
var p5=document.getElementById("5p");

p1.addEventListener("click",causes);
p2.addEventListener("click",selfCare);
p3.addEventListener("click",stories);
p4.addEventListener("click",donate);
p5.addEventListener("click",urFeeling);

//location.href="Causes.html";

function causes(){
location.href="Causes.html";
}
 function selfCare(){
location.href="selfCare.html";
 }
 function stories(){
location.href="stories.html";
}
 function donate(){
location.href="donate.html";
}
function urFeeling(){
location.href="autog.html";
}


