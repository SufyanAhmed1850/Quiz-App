var rawQuestions = [
    // {
    //     question:
    //         "What is the output of the following code: console.log(typeof 42);",
    //     options: {
    //         1: "number",
    //         2: "boolean",
    //         3: "undefined",
    //         4: "string",
    //     },
    //     answer: "1",
    // },
    // {
    //     question:
    //         "What is the correct syntax for a single-line comment in JavaScript?",
    //     options: {
    //         1: "!-- This is a comment --",
    //         2: "/* This is a comment */",
    //         3: "// This is a comment",
    //         4: "# This is a comment",
    //     },
    //     answer: "3",
    // },
    // {
    //     question:
    //         "What is the output of the following code: console.log(2 + '2');",
    //     options: {
    //         1: "4",
    //         2: "Error",
    //         3: "NaN",
    //         4: "22",
    //     },
    //     answer: "4",
    // },
    // {
    //     question:
    //         "Which function is used to parse a string and return an integer in JavaScript?",
    //     options: {
    //         1: "toInteger()",
    //         2: "parseInt()",
    //         3: "parseFloat()",
    //         4: "parseInteger()",
    //     },
    //     answer: "2",
    // },
    // {
    //     question:
    //         "What is the output of the following code: console.log(5 === '5');",
    //     options: {
    //         1: "true",
    //         2: "NaN",
    //         3: "Error",
    //         4: "false",
    //     },
    //     answer: "4",
    // },
    // {
    //     question:
    //         "What is the output of the following code: console.log(Boolean(''));",
    //     options: {
    //         1: "true",
    //         2: "Error",
    //         3: "false",
    //         4: "undefined",
    //     },
    //     answer: "3",
    // },
    // {
    //     question:
    //         "Which of the following is not a valid JavaScript variable name?",
    //     options: {
    //         1: "123abc",
    //         2: "myVariable",
    //         3: "_myVar",
    //         4: "$price",
    //     },
    //     answer: "1",
    // },
    // {
    //     question:
    //         "Which method is used to remove the last element from an array in JavaScript?",
    //     options: {
    //         1: "splice()",
    //         2: "pop()",
    //         3: "shift()",
    //         4: "push()",
    //     },
    //     answer: "2",
    // },
    // {
    //     question:
    //         "What is the output of the following code: console.log(typeof null);",
    //     options: {
    //         1: "undefined",
    //         2: "null",
    //         3: "object",
    //         4: "string",
    //     },
    //     answer: "3",
    // },
    // {
    //     question: "What is the result of the following expression: 3 * '2'?",
    //     options: {
    //         1: "6",
    //         2: "32",
    //         3: "5",
    //         4: "NaN",
    //     },
    //     answer: "1",
    // },
    // {
    //     question:
    //         "Which method is used to remove the first element from an array in JavaScript?",
    //     options: {
    //         1: "unshift()",
    //         2: "pop()",
    //         3: "splice()",
    //         4: "shift()",
    //     },
    //     answer: "4",
    // },
    // {
    //     question:
    //         "What is the output of the following code: console.log(4 > 2 > 1);",
    //     options: {
    //         1: "undefined",
    //         2: "true",
    //         3: "Error",
    //         4: "false",
    //     },
    //     answer: "4",
    // },
    // {
    //     question: "What is the purpose of the 'this' keyword in JavaScript?",
    //     options: {
    //         1: "To refer to the current object",
    //         2: "To create a new object",
    //         3: "To define a function",
    //         4: "To access the global scope",
    //     },
    //     answer: "1",
    // },
    // {
    //     question: "Which array method is used to combine two or more arrays?",
    //     options: {
    //         1: "concat()",
    //         2: "join()",
    //         3: "push()",
    //         4: "slice()",
    //     },
    //     answer: "1",
    // },
    // {
    //     question:
    //         "What is the output of the following code: console.log(typeof NaN);",
    //     options: {
    //         1: "undefined",
    //         2: "NaN",
    //         3: "number",
    //         4: "string",
    //     },
    //     answer: "3",
    // },
    // {
    //     question:
    //         "What is the output of the following code: console.log(Math.floor(4.7));",
    //     options: {
    //         1: "4",
    //         2: "5",
    //         3: "4.7",
    //         4: "Error",
    //     },
    //     answer: "1",
    // },
    // {
    //     question:
    //         "Which array method is used to add one or more elements to the end of an array?",
    //     options: {
    //         4: "push()",
    //         2: "pop()",
    //         3: "shift()",
    //         1: "unshift()",
    //     },
    //     answer: "4",
    // },
    // {
    //     question: "What does the 'includes' method in JavaScript return?",
    //     options: {
    //         1: "A new array with all the elements that satisfy a provided condition",
    //         2: "The index of the first occurrence of the specified value in the array",
    //         3: "True if the array contains the specified value, otherwise false",
    //         4: "The first element in the array that satisfies a provided condition",
    //     },
    //     answer: "3",
    // },
    // {
    //     question:
    //         "Which built-in method is used to join the elements of an array into a string?",
    //     options: {
    //         1: "slice()",
    //         2: "concat()",
    //         3: "join()",
    //         4: "toString()",
    //     },
    //     answer: "3",
    // },
    // {
    //     question: "What does the 'typeof' operator return for an array?",
    //     options: {
    //         1: "array",
    //         2: "array",
    //         3: "object",
    //         4: "function",
    //     },
    //     answer: "3",
    // },
    // {
    //     question: "What does the 'Array.isArray()' method check?",
    //     options: {
    //         1: "Whether a value is a string or not",
    //         2: "Whether a value is an array or not",
    //         3: "Whether a value is a number or not",
    //         4: "Whether a value is a function or not",
    //     },
    //     answer: "2",
    // },
    // {
    //     question: "What does the 'Math.random()' function return?",
    //     options: {
    //         1: "A random integer",
    //         2: "A random number between 0 and 1",
    //         3: "The value of Pi (π)",
    //         4: "The square root of a number",
    //     },
    //     answer: "2",
    // },
    // {
    //     question:
    //         "What is the purpose of the 'switch' statement in JavaScript?",
    //     options: {
    //         1: "To perform different actions based on different conditions",
    //         2: "To define a loop",
    //         3: "To define a function",
    //         4: "To concatenate strings",
    //     },
    //     answer: "1",
    // },
    // {
    //     question:
    //         "Which logical operator in JavaScript returns true if any of the operands is true?",
    //     options: {
    //         1: "!==",
    //         2: "&&",
    //         3: "!",
    //         4: "||",
    //     },
    //     answer: "4",
    // },
    // {
    //     question: "What is the purpose of the 'typeof' operator in JavaScript?",
    //     options: {
    //         1: "To perform mathematical operations",
    //         2: "To convert a value to a string",
    //         3: "To determine the data type of a value",
    //         4: "To compare two values",
    //     },
    //     answer: "3",
    // },
    // {
    //     question:
    //         "What is the result of the expression '2 + 3 + '7'' in JavaScript?",
    //     options: {
    //         1: "NaN",
    //         2: "12",
    //         3: "'57'",
    //         4: "Error",
    //     },
    //     answer: "3",
    // },
    // {
    //     question: "What is the purpose of the 'reduce' method in JavaScript?",
    //     options: {
    //         1: "To filter an array based on a condition",
    //         2: "To transform an array into a new array",
    //         3: "To iterate over an array and perform an action on each element",
    //         4: "To reduce an array to a single value by applying a function to each element",
    //     },
    //     answer: "4",
    // },
    // {
    //     question: "What is the purpose of the 'find' method in JavaScript?",
    //     options: {
    //         1: "To find the index of an element in an array",
    //         2: "To find the maximum value in an array",
    //         3: "To find the first element in an array that satisfies a provided testing function",
    //         4: "To find the length of an array",
    //     },
    //     answer: "3",
    // },
    // {
    //     question: "What is the purpose of the 'slice' method in JavaScript?",
    //     options: {
    //         1: "To remove elements from an array",
    //         2: "To create a new array containing a portion of the original array",
    //         3: "To add elements to an array",
    //         4: "To reverse the order of elements in an array",
    //     },
    //     answer: "2",
    // },
    // {
    //     question:
    //         "Which method is used to sort the elements of an array in JavaScript?",
    //     options: {
    //         1: "sort",
    //         2: "concat",
    //         3: "slice",
    //         4: "reverse",
    //     },
    //     answer: "1",
    // },
    // {
    //     question: "What is the purpose of the 'splice' method in JavaScript?",
    //     options: {
    //         1: "To add elements to an array",
    //         2: "To remove elements from an array",
    //         3: "To create a new array containing a portion of the original array",
    //         4: "To reverse the order of elements in an array",
    //     },
    //     answer: "2",
    // },
    // {
    //     question: "What is the purpose of the 'reverse' method in JavaScript?",
    //     options: {
    //         1: "To remove elements from an array",
    //         2: "To add elements to an array",
    //         3: "To create a new array containing a portion of the original array",
    //         4: "To reverse the order of elements in an array",
    //     },
    //     answer: "4",
    // },
    // {
    //     question: "How would you convert a string to lowercase in JavaScript?",
    //     options: {
    //         1: "string.toLower()",
    //         2: "string.toUpperCase()",
    //         3: "string.toLowerCase()",
    //         4: "string.upperCase()",
    //     },
    //     answer: "3",
    // },
    {
        question:
            "Which method is used to determine the index of the first occurrence of a specified value in an array?",
        options: {
            1: "includes",
            2: "indexOf",
            3: "find",
            4: "lastIndexOf",
        },
        answer: "2",
    },
    {
        question: "What does the term 'DOM' stand for in JavaScript?",
        options: {
            1: "Data Object Model",
            2: "Document Oriented Model",
            3: "Document Object Model",
            4: "Digital Object Model",
        },
        answer: "3",
    },
];
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

let sec = 0;
let min = 0;
let questionElem = document.getElementById("question");
let options = document.getElementById("options");
let optionElements = Array.from(options.children);
let nextQuesBtn = document.getElementById("nextQuesBtn");
let resultContainer = document.getElementById("result-container");
let submitQuesBtn = document.getElementById("submitQuesBtn");
let quesArr = shuffleArray(rawQuestions);
let quesCounter = 0;
let correctAnsCounter = 0;
let wrongAnsCounter = 0;
console.log(quesArr);

let timerInterval = setInterval(() => {
    sec += 1;
    let headerTimer = document.getElementById("headerTimer");
    if (sec === 60) {
        if (min < 9) {
            headerTimer.children[0].innerHTML = "0" + (min += 1);
        } else {
            headerTimer.children[0].innerHTML = min += 1;
        }
        sec = 0;
    }
    if (sec < 10) {
        headerTimer.children[1].innerHTML = "0" + sec;
    } else {
        headerTimer.children[1].innerHTML = sec;
    }
    if (min === 10) {
        showResult();
    }
}, 1000);

const resetOpt = () => {
    nextQuesBtn.style.visibility = "hidden";
    options.style.pointerEvents = "auto";
    for (const opt of optionElements) {
        if (opt.classList.contains("wrongAns")) {
            opt.classList.remove("wrongAns");
            opt.classList.remove("correctAns");
        } else {
            opt.classList.remove("correctAns");
        }
    }
};

const setQuestion = () => {
    let headerCounter = document.getElementById("headerCounter");
    let headerContainerTotal = document.getElementById("headerContainerTotal");
    headerContainerTotal.textContent = quesArr.length;
    quesCounter < 9
        ? (headerCounter.textContent = "0" + (quesCounter + 1))
        : (headerCounter.textContent = quesCounter + 1);
    resetOpt();
    questionElem.textContent = quesArr[quesCounter].question;
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].setAttribute("onclick", "chkAns(this)");
        optionElements[i].innerHTML = quesArr[quesCounter].options[i + 1];
    }
    let btnCheck = quesCounter + 1;
    if (btnCheck == quesArr.length) {
        nextQuesBtn.style.display = "none";
        submitQuesBtn.style.display = "block";
        submitQuesBtn.style.visibility = "hidden";
    }
    quesCounter++;
};
setQuestion();

const chkAns = (event) => {
    options.style.pointerEvents = "none";
    let answer = quesArr[quesCounter - 1].answer;
    if (event.textContent === quesArr[quesCounter - 1].options[answer]) {
        event.classList.add("correctAns");
        correctAnsCounter++;
    } else {
        wrongAnsCounter++;
        for (const opt of optionElements) {
            event.classList.add("wrongAns");
            if (opt.innerHTML === quesArr[quesCounter - 1].options[answer]) {
                opt.classList.add("correctAns");
            }
        }
    }
    submitQuesBtn.style.visibility = "visible";
    nextQuesBtn.style.visibility = "visible";
};

const showResult = () => {
    clearInterval(timerInterval);
    questionElem.parentNode.style.display = "none";
    resultContainer.style.display = "flex";
    let obtainedPercentage = Math.round(
        (correctAnsCounter * 100) / quesArr.length
    );
    let resultTitle = document.getElementById("resultTitle");
    let totalQues = document.getElementById("totalQues");
    let correctQues = document.getElementById("correctQues");
    if (obtainedPercentage < 70) {
        resultTitle.textContent = "Better luck, try next time";
        resultTitle.style.color = "#D9183B";
    } else {
        resultTitle.textContent = "Congratulations, you passed";
        resultTitle.style.color = "#8afd98";
    }
    totalQues.textContent = quesArr.length;
    correctQues.textContent = correctAnsCounter;
    progressBar(obtainedPercentage);
};

const progressBar = (obtainedPercentage) => {
    let dataProgressColor;
    if (obtainedPercentage < 70) {
        dataProgressColor = "#D9183B";
    } else {
        dataProgressColor = "#8afd98";
    }
    const circularProgress = document.querySelectorAll(".circular-progress");
    Array.from(circularProgress).forEach((progressBar) => {
        const progressValue = progressBar.querySelector(".percentage");
        const innerCircle = progressBar.querySelector(".inner-circle");
        let startValue = 0,
            endValue = obtainedPercentage,
            speed = 15,
            progressColor = dataProgressColor;
        const easeOutQuad = (t) => {
            return t * (2 - t);
        };
        const progress = setInterval(() => {
            const elapsedTime = endValue !== 0 ? startValue / endValue : 0;
            startValue++;
            const easingValue = easeOutQuad(elapsedTime);
            const currentValue = Math.round(easingValue * endValue);
            progressValue.textContent = `${currentValue}%`;
            progressValue.style.color = progressColor;
            innerCircle.style.backgroundColor = progressBar.getAttribute(
                "data-inner-circle-color"
            );
            progressBar.style.background = `conic-gradient(${progressColor} ${
                currentValue * 3.6
            }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
            if (startValue > endValue) {
                clearInterval(progress);
            }
        }, speed);
    });
};
