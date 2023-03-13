function Question(text, choices, answer){
    this.text = text;
    this.chocies = choices,
    this.answer = answer;
}

// Question Prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0
    this.questionIndex = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// Quiz is finish
Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

// Quiz guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
}

var q1 = new Question('What is the capital of France?', ['Paris', 'London', 'New York','Istanbul'],'Paris');   

var q2 = new Question('What is the capital of Turkey?', ['Istanbul', 'Konya', 'Ankara','Antalya'],'Ankara')

var questions = [q1,q2];

// Start Quiz
 var quiz = new Quiz(questions);
 loadQuestion();

 function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{
        var question = quiz.getQuestion();
        var choices = question.chocies;

        document.querySelector('#question').textContent = question.text;

        for(var i = 0; i < choices.length; i++){
            var element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];

            guess('btn'+i, choices[i]);

        }

        showProgress();
    }
 }

 function guess(id, guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion();
    }
 }

 function showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber = quiz.questionIndex + 1;
    document.querySelector('#progress').innerHTML = 'Question ' + questionNumber + ' of ' + totalQuestion;
 }

 function showScore(){
    var html = `<h3>Score ${(quiz.score)*5}</h3>`;
 }