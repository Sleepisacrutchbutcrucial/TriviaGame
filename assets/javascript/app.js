
var countDownDate = new Date("Nov 9, 2020 15:37:25").getTime();

//buildQuiz.addEventListener("click", myScript);
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds

    var minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60) - 55));
    var seconds = Math.floor((distance % (1000 * 60) / 1000));

    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = "Time Remaining: " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        alert("Times Up!");
    }
}, 1000);




(function () {
    function buildQuiz() {
       
        const output = [];

      
        myQuestions.forEach((currentQuestion, questionNumber) => {
           
            const answers = [];

           
            for (letter in currentQuestion.answers) {
               
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

           
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
            );
        });

       
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
       
        const answerContainers = quizContainer.querySelectorAll(".answers");

       
        let numCorrect = 0;

       
        myQuestions.forEach((currentQuestion, questionNumber) => {
            
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

           
            if (userAnswer === currentQuestion.correctAnswer) {
               
                numCorrect++;

               
                answerContainers[questionNumber].style.color = "lightgreen";
            } else {
               
                answerContainers[questionNumber].style.color = "red";
            }
        });

       
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "Amps are a unit of measurement of what?",

            answers: {
                a: "electric charge",
                b: "electric current",
                c: "electric field strength",
                d: "electric potential",

            },
            correctAnswer: "b",
        },

        // 2
        {
            question: "What was the average life expectancy of white males born in the U.S. just before the Civil War?",

            answers: {
                a: "40 years",
                b: "50 years",
                c: "60 years",
                d: "70 years",
            },
            correctAnswer: "a",
        },
        // 3
        {
            question: "Which one of the following instruments is used to measure humidity?",

            answers: {
                a: "anemometer",
                b: "ammeter",
                c: "hygrometer",
                d: "barometer",
            },
            correctAnswer: "c",
        },
        //4
        {
            question: "Which two planets are most similar in size diameter wise?",

            answers: {
                a: "Mars and Mercury",
                b: "Venus and Earth",
                c: "Uranus and Neptune",
                d: "Jupiter and Saturn",
            },
            correctAnswer: "b",
        },
        //5
        {
            question: "If a hertz is equal to one cylce per second, how manyh cycles per second does a megahertz  equal?",

            answers: {
                a: "1/1,000",
                b: "1,000",
                c: "1,000,000",
                d: "1,000,000,000",

            },
            correctAnswer: "c",
        },
        //6
        {
            question: "What principle explains why cold food warms up and hot food cools off when stored at room temperature?",

            answers: {
                a: "entropy",
                b: "chemical equilibrium",
                c: "momentum",
                d: "relativity",

            },
            correctAnswer: "a",
        },
        //7
        {
            question: "What is the slowest wind speed a hurricane can have according to the Saffir-Simpson scale?",

            answers: {
                a: "50 m.p.h.",
                b: "74 m.p.h.",
                c: "96 m.p.h.",
                d: "110 m.p.h.",

            },
            correctAnswer: "b",
        },
        //8
        {
            question: "Which of the following heavenly bodies have never had a spacecraft landed on it?",

            answers: {
                a: "Venus",
                b: "Mars",
                c: "the moon",
                d: "Jupiter",

            },
            correctAnswer: "d",
        },
        //9
        {
            question: "Many scientists think that some of the dinosaurs did not go extinct, but rather evolved into what kind of creature?",

            answers: {
                a: "amphibians",
                b: "reptiles",
                c: "birds",
                d: "mammals",

            },
            correctAnswer: "c",
        },
        //10

        {

            question: "Who would win in a fight?",

            answers: {
                a: "Oprah Winfrey",
                b: "Chuck Norris",
                c: "Your Mom",
            },
            correctAnswer: "c",
        },]


   
    buildQuiz();

    
    submitButton.addEventListener("click", showResults);
})();
