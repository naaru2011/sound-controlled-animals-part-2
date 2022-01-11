//https://teachablemachine.withgoogle.com/models/_BaFJVhlH/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
  classifer = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_BaFJVhlH/model.json", modelReady);
    
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error, results){

  console.log('Got Result!')
}