var form = ['affirmative', 'negative'];
var sentence = ['proposition', 'question'];
var person = ['First', 'Second', 'Third'];
var quantity = ['singular', 'plural'];
var tense = ['simple', 'participle'];
var time = ['past', 'present', 'conditional', 'future'];
var verb = ['to be', 'regular', 'irregular', 'modal'];
var progressive = ['not progressive', 'progressive'];

function generator() {
  var randomForm = Math.round(Math.random());
  var randomSentence = Math.round(Math.random());
  var randomPerson = Math.round(Math.random() * 2);
  var randomQuantity = Math.round(Math.random());
  var randomTense = Math.round(Math.random());
  var randomTime = Math.round(Math.random() * 3);
  var randomVerb = Math.round(Math.random() * 3);
  var randomProgressive = Math.round(Math.random());

  var results = [
    form[randomForm],
    sentence[randomSentence],
    person[randomPerson],
    quantity[randomQuantity],
    tense[randomTense],
    time[randomTime],
    verb[randomVerb],
    progressive[randomProgressive],
  ];

  document.getElementById("form0").innerHTML = results[0];
  document.getElementById("sentence1").innerHTML = results[1];
  document.getElementById("person2").innerHTML = results[2];
  document.getElementById("quantity3").innerHTML = results[3];
  document.getElementById("tense4").innerHTML = results[4];
  document.getElementById("time5").innerHTML = results[5];
  document.getElementById("verb6").innerHTML = results[6];
  document.getElementById("progressive7").innerHTML = results[7];

} 
