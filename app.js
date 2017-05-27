function populate(){
    if(quiz.isEnded()){
        //show score
      showScores();
    }else
    {
        //show ques
        var element= document.getElementById("question");
        element.innerHTML= quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i=0; i< choices.length; i++){
            var element=document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    } showProgress();

};
function guess(id, guess){
    var button= document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element =document.getElementById("progress");
    element.innerHTML= "Question " + currentQuestionNumber + "of " + quiz.questions.length;

}

function showScores(){
    var gameOverHtml= "<h1>Result</h1>";
    gameOverHtml +="<h2 id='score'>Your score :" + quiz.score + "</h2>";
    var element= document.getElementById("quiz");
    element.innerHTML= gameOverHtml;

}

var questions= [
    new Question(" The common element which describe the web page, is ?", ["heading", "	paragraph", "list", "All of these"], "All of these"),
    new Question(" MVC is a ___", ["Library", "Header", "Framework", "none"], "Framework"),
    new Question(" Markup tags tell the web browser", ["How to organise the page", "How to display the page", "How to display message box on page", "None of these"], "How to display the page"),
    new Question(" www is based on which model?", ["Local-server", "Client-server", "3-tier", "None of these"], "Client-server"),
    new Question(" Which of the following attributes of text box control allow to limit the maximum character?", ["size", "len", "maxlength", "All of these"], "maxlength")
];

var quiz=new Quiz(questions);

populate();