function getAudio() {
    navigator=MediaDevices({audio:true});
    classifier=ml5.soundClassifier("",modelReady);
}
function modelReady() {
    classifier.Classify(gotResults);
}