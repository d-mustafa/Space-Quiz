// Create A Quiz

document.getElementById("btn").addEventListener("click", calculateScore);
let input1 = document.getElementById("question-1");
let input2 = document.getElementById("question-2");
let input3 = document.getElementById("question-3");
let input4 = document.getElementById("question-4");
let input5 = document.getElementById("question-5");

function calculateScore() {
  // Input
  let question1 = document.getElementById("question-1").value;
  let question2 = document.getElementById("question-2").value;
  let question3 = document.getElementById("question-3").value;
  let question4 = document.getElementById("question-4").value;
  let question5 = document.getElementById("question-5").value;

  question1 = question1.toLowerCase();
  question2 = question2.toLowerCase();
  question3 = question3.toLowerCase();
  question4 = question4.toLowerCase();
  question5 = question5.toLowerCase();

  // Process
  let output = document.getElementById("output-score");
  let reaction = document.getElementById("output-reaction");
  let score = 0;

  // Check Answers (Correct = Orange & Incorrect = Black)
  if (question1 == "milky way" || question1 == "the milky way") {
    score++;
    input1.style.borderColor = "orange";
  } else {
    input1.style.borderColor = "black";
  }
  if (question2 == "comets" || question2 == "comet") {
    score++;
    input2.style.borderColor = "orange";
  } else {
    input2.style.borderColor = "black";
  }
  if (question3 == "blackhole" || question3 == "a blackhole") {
    score++;
    input3.style.borderColor = "orange";
  } else {
    input3.style.borderColor = "black";
  }
  if (question4 == "hydrogen" || question4 == "helium") {
    score++;
    input4.style.borderColor = "orange";
  } else {
    input4.style.borderColor = "black";
  }
  if (question5 == "supernova" || question5 == "a supernova") {
    score++;
    input5.style.borderColor = "orange";
  } else {
    input5.style.borderColor = "black";
  }
  // Output
  if (score == 0) {
    output.innerHTML = `${score}/5 (0%)`;
    reaction.innerHTML = "That's just... sad";
  } else if (score == 1) {
    output.innerHTML = `${score}/5 (20%)`;
    reaction.innerHTML = "I mean, its better than a 0.";
  } else if (score == 2) {
    output.innerHTML = `${score}/5 (40%)`;
    reaction.innerHTML = "Failing grade sadly, but studying will fix it!";
  } else if (score == 3) {
    output.innerHTML = `${score}/5 (60%)`;
    reaction.innerHTML = "Hey, not bad. You know more than most people.";
  } else if (score == 4) {
    output.innerHTML = `${score}/5 (80%)`;
    reaction.innerHTML = "Great job! A 100 is within reach!";
  } else if (score == 5) {
    output.innerHTML = `${score}/5 (100%)`;
    reaction.innerHTML = "Whoa! We got a galatical genius here!";
  }
}
