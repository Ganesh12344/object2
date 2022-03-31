img="";
status="";
function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.position(250,250);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status-detecting objects";
}
function modelLoaded()
{
    console.log("model Loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
  


}
