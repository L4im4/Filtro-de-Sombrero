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
}

function draw(){
image(video ,0,0,400,400)
}