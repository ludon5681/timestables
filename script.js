var input = document.getElementById("input");
var submit = document.getElementById("submit");
var correct;

function newProblem() {
    var text = document.getElementById("prompt");
    var num1 = Math.ceil(Math.random() * 12);
    var num2 = Math.ceil(Math.random() * 12);
    text.innerHTML = `${num1} x ${num2}`
    correct = num1 * num2;
}

function handleSubmit(val) {
    var text = document.getElementById("prompt");

    input.value = "";
    try {
        if (parseInt(val) === correct) {
            if (window.localStorage.getItem("correct") !== null) {
                correctValue = window.localStorage.getItem("correct");
                window.localStorage.setItem("correct", (parseInt(correctValue) + 1).toString());
                document.getElementById("correct").innerHTML = `Correct: ${window.localStorage.getItem("correct")}`;
                newProblem();
            } else {
                window.localStorage.setItem("correct", "1");
                document.getElementById("correct").innerHTML = `Correct: ${window.localStorage.getItem("correct")}`;
                newProblem();
            }
        } else {
            if (window.localStorage.getItem("incorrect") !== null) {
                incorrectValue = window.localStorage.getItem("incorrect");
                window.localStorage.setItem("incorrect", (parseInt(incorrectValue) + 1).toString());
                document.getElementById("incorrect").innerHTML = `Incorrect: ${window.localStorage.getItem("incorrect")}`;
            } else {
                window.localStorage.setItem("incorrect", "1");
                document.getElementById("incorrect").innerHTML = `Incorrect: ${window.localStorage.getItem("incorrect")}`;
            }
        }
    } catch (e) {
        return;
    }
    
}

// event listeners
submit.addEventListener("click", (e) => {
    e.preventDefault();
    handleSubmit(input.value);
})
document.addEventListener("keydown", (e) => {
    if (e.code == "Enter") {
        handleSubmit(input.value)
    }
})
document.getElementById("reset").addEventListener("click", function() {
    console.log("hi")
    window.localStorage.clear();
    window.localStorage.getItem("incorrect") === null 
        ? document.getElementById("incorrect").innerHTML = "Incorrect: 0" 
        : document.getElementById("incorrect").innerHTML = `Incorrect: ${window.localStorage.getItem("incorrect")}`;
    window.localStorage.getItem("correct") === null 
        ? document.getElementById("correct").innerHTML = "Correct: 0" 
        : document.getElementById("correct").innerHTML = `Correct: ${window.localStorage.getItem("correct")}`;
})
document.addEventListener("DOMContentLoaded", (e) => {
    window.localStorage.getItem("incorrect") === null 
        ? document.getElementById("incorrect").innerHTML = "Incorrect: 0" 
        : document.getElementById("incorrect").innerHTML = `Incorrect: ${window.localStorage.getItem("incorrect")}`;
    window.localStorage.getItem("correct") === null 
        ? document.getElementById("correct").innerHTML = "Correct: 0" 
        : document.getElementById("correct").innerHTML = `Correct: ${window.localStorage.getItem("correct")}`;
    newProblem();
});