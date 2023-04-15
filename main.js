var ojox=0
var ojoy=0

function preload(){
  sombrero=loadImage("Mexican hat.webp")

}

function setup(){
  canvas = createCanvas(400, 400);
  video = createCapture(VIDEO);
    video.hide();
    net=ml5.poseNet(video,model_loaded)
    net.on("pose",posar )
}

function model_loaded(){
 console.log("Model Loaded! ");
}

function posar(results){
console.log(results)
ojox=results[0].pose.leftEye.x-200
ojoy=results[0].pose.leftEye.y-300
}

function draw(){
image(video ,0,0,400,400)
image(sombrero,ojox,ojoy,200,200)
}