console.log("Opening emotion to emoji app");
console.log("Are you happy");
console.log("Are you sad");
console.log("Are you angry");
prediction_1="";
prediction_2="";
accuracy_1="";
accuracy_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
console.log("Camera is set")
camera = document.getElementById("camera");
Webcam.attach("#camera")

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    console.log("Snapshot taken")
}
console.log('ml5 version:',ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/H5vCnH6U4/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!')
}
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult)
    console.log("Predicting emotion")
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_1 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
accuracy_2="";
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;9
        if(results[0].label == "Thumbs up")
        {
            document.getElementById("update_emoji").innerHTML = "Thumbs up1";
        }
        if(results[0].label == "Thumbs down")
        {
            document.getElementById("update_emoji").innerHTML = "Thumbs down";
        }
        if(results[0].label == "Victory")
        {
            document.getElementById("update_emoji").innerHTML = "Victory";
        }
        }
        console.log("You are showing" + prediction_1)

    }