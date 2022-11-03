function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("blue");
}

function preload(){
    classifier = ml5.imageclassifier('DoodleNet');
}

function clearCanvas() {
    background("blue");
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

check_sketch()
  if(drawn_sketch == sketch)
  {
    answer_holder = "set"
    score++;
    document.getElementById('score').innerHTML = 'Score: ' + score;
  }


function classifyCanvas(){
    classifier.classify(canvas, gotResult);
    }
    function gotResult(error, results) {
       if(error) {
console.error(error);
    }
console.log(results);
document.getElementById('label').innerHTML = 'label:' +results[0].label;
document.getElementById('confidence').innerHTML = 'Confidence:' +Math.round(results[0].confidence * 100) + '%';
utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
    }