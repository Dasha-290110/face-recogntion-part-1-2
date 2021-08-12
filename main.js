Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function captureimage(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='taken_image' src="+data_uri+">"
});
}
console.log("ml5-version",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2YWULgM2D/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}

