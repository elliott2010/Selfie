var SpeechRecognition = window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
 function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
recognition.onresult = function run (event) 
{
 console.log(event); 
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML = Content;
if(Content=="selfie"){
speak();

}
 
}
function speak(){
var wow=window.speechSynthesis;
var speakdata="bruh bruh bruh bruh bruh";
var saythis=new SpeechSynthesisUtterance(speakdata);
wow.speak(saythis);
Webcam.attach(camera)
setTimeout(function ()
{
takeSnapShot();
save()
}
,5000
)
}

camera=document.getElementById("camera")
Webcam.set({
  width:360,
  height:250,
  image_format: "jpg",
  jpg_quality:100,
})
function takeSnapShot(){
 Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML='<img id="selImg" src="'+data_uri+'">' 
 }) 
}
function save (){
  link=document.getElementById("link")
  img=document.getElementById ("selImg").src;
  link.href=img;
  link.click();

}