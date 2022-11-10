noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
Difference = 0;
function setup(){
    canvas = createCanvas(550, 490);
    canvas.position(600, 110);
    webcam = createCapture(VIDEO);
    webcam.size(550, 550);
    posenet = ml5.poseNet(webcam, ModelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background("#36454F");
    document.getElementById("hello").innerHTML = "Square Size = " + Difference;
    fill("#19943f");
    stroke("#482bf2");
    square(noseX, noseY, Difference);
    
}

function ModelLoaded(){
    console.log("model loaded");
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        rightWristX = result[0].pose.rightWrist.x;
        leftWristX = result[0].pose.leftWrist.x;
        Difference = floor(leftWristX - rightWristX);
        console.log("noseX = " + noseX + " noseY = " + noseY );
        console.log("rightWristX = " + rightWristX + " leftWristX = " + leftWristX + " Difference = " + Difference);
        
    }
}