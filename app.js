let rawQuestions;
let quesArr;
let formPage = document.getElementById("formPage");
let questionPage = document.getElementById("questionPage");
let resultPage = document.getElementById("resultPage");
let quizName = document.getElementById("quizName");
let firstName = [];
let lastName = [];
let headerName = document.getElementById("headerName");
let userName;
let sec = 0;
let min = 0;
let form = document.querySelector(".form");
let questionElem = document.getElementById("question");
let options = document.getElementById("options");
let optionElements = Array.from(options.children);
let nextQuesBtn = document.getElementById("nextQuesBtn");
let submitQuesBtn = document.getElementById("submitQuesBtn");
let quesCounter = 0;
let correctAnsCounter = 0;
let wrongAnsCounter = 0;

gsap.from("#formPage", {
    x: "75px",
    opacity: 0,
    ease: "power1.out",
    duration: 0.5,
});

const toggleDropDown = () => {
    let dropDownContent = document.getElementById("dropDownContent");
    if (dropDownContent.style.display == "block") {
        dropDownContent.style.display = "none";
        quizName.style.transition = "border ease 100ms";
        quizName.textContent.includes("Select")
            ? (quizName.style.border = "1px solid #D9183B")
            : (quizName.style.border = "1px solid #8afd98");
    } else {
        dropDownContent.style.display = "block";
    }
};

const setArr = (arr) => {
    let numOfQues = document.getElementById("numOfQues");
    let nameOfQuiz = document.getElementById("nameOfQuiz");
    if (arr === "html") {
        rawQuestions = [
            {
                question: "What does HTML stand for?",
                options: {
                    1: "Hyper Text Markup Language",
                    2: "Home Tool Markup Language",
                    3: "Hyperlinks and Text Markup Language",
                    4: "None of the above",
                },
                answer: "1",
            },
            {
                question:
                    "Which HTML element is used to define the title of a document?",
                options: {
                    1: "<h1>",
                    2: "<head>",
                    3: "<html>",
                    4: "<title>",
                },
                answer: "4",
            },
            {
                question:
                    "Which HTML element is used to specify the main content of a document?",
                options: {
                    1: "<main>",
                    2: "<body>",
                    3: "<section>",
                    4: "<div>",
                },
                answer: "1",
            },
            {
                question: "Which HTML element is used to define a hyperlink?",
                options: {
                    1: "<a>",
                    2: "<link>",
                    3: "<href>",
                    4: "<url>",
                },
                answer: "1",
            },
            {
                question:
                    "Which HTML attribute specifies an alternate text for an image?",
                options: {
                    1: "src",
                    2: "title",
                    3: "alt",
                    4: "link",
                },
                answer: "3",
            },
            {
                question:
                    "Which HTML element is used to define an unordered list?",
                options: {
                    1: "<ul>",
                    2: "<li>",
                    3: "<ol>",
                    4: "<list>",
                },
                answer: "1",
            },
            {
                question: "Which HTML element is used to define a table row?",
                options: {
                    1: "<td>",
                    2: "<tr>",
                    3: "<table>",
                    4: "<th>",
                },
                answer: "2",
            },
            {
                question: "Which HTML element is used to define a form?",
                options: {
                    1: "<input>",
                    2: "<form>",
                    3: "<button>",
                    4: "<label>",
                },
                answer: "2",
            },
            {
                question:
                    "Which HTML element is used to define a header for a document or section?",
                options: {
                    1: "<head>",
                    2: "<h1>",
                    3: "<header>",
                    4: "<section>",
                },
                answer: "3",
            },
            {
                question:
                    "Which HTML attribute is used to specify inline styles?",
                options: {
                    1: "css",
                    2: "class",
                    3: "id",
                    4: "style",
                },
                answer: "4",
            },
            {
                question:
                    "Which HTML element is used to display a horizontal line?",
                options: {
                    1: "<line>",
                    2: "<hr>",
                    3: "<break>",
                    4: "<br>",
                },
                answer: "2",
            },
            {
                question:
                    "Which HTML element is used to define a footer for a document or section?",
                options: {
                    1: "<section>",
                    2: "<h1>",
                    3: "<div>",
                    4: "<footer>",
                },
                answer: "4",
            },
            {
                question:
                    "Which HTML attribute is used to specify a target URL for a hyperlink?",
                options: {
                    1: "src",
                    2: "href",
                    3: "target",
                    4: "link",
                },
                answer: "2",
            },
            {
                question:
                    "Which HTML element is used to define a section in a document?",
                options: {
                    1: "<div>",
                    2: "<h1>",
                    3: "<section>",
                    4: "<article>",
                },
                answer: "3",
            },
            {
                question:
                    "Which HTML element is used to define emphasized text?",
                options: {
                    1: "<strong>",
                    2: "<italic>",
                    3: "<emphasis>",
                    4: "<em>",
                },
                answer: "4",
            },
            {
                question:
                    "Which HTML element is used to define a definition list?",
                options: {
                    1: "<dl>",
                    2: "<ul>",
                    3: "<ol>",
                    4: "<list>",
                },
                answer: "1",
            },
            {
                question:
                    "Which HTML attribute specifies the source URL of a script file?",
                options: {
                    1: "href",
                    2: "src",
                    3: "link",
                    4: "script",
                },
                answer: "2",
            },
            {
                question:
                    "Which HTML element is used to define a navigation menu?",
                options: {
                    1: "<list>",
                    2: "<menu>",
                    3: "<ul>",
                    4: "<nav>",
                },
                answer: "4",
            },
            {
                question:
                    "Which HTML attribute is used to specify a unique identifier for an element?",
                options: {
                    1: "class",
                    2: "style",
                    3: "id",
                    4: "name",
                },
                answer: "3",
            },
            {
                question:
                    "Which HTML element is used to define a level of heading?",
                options: {
                    1: "<h1>",
                    2: "<level>",
                    3: "<header>",
                    4: "<h2>",
                },
                answer: "1",
            },
            {
                question:
                    "Which HTML element is used to define an input field for entering text?",
                options: {
                    1: "<textfield>",
                    2: "<text>",
                    3: "<input type='text'>",
                    4: "<textbox>",
                },
                answer: "3",
            },
            {
                question:
                    "Which HTML element is used to define a subscripted text?",
                options: {
                    1: "<subscript>",
                    2: "<sup>",
                    3: "<sub>",
                    4: "<superscript>",
                },
                answer: "3",
            },
            {
                question:
                    "Which HTML attribute is used to specify an alternative text for an image map?",
                options: {
                    1: "src",
                    2: "alt",
                    3: "usemap",
                    4: "link",
                },
                answer: "2",
            },
            {
                question:
                    "Which HTML element is used to define an option in a dropdown list?",
                options: {
                    1: "<select>",
                    2: "<option>",
                    3: "<dropdown>",
                    4: "<list>",
                },
                answer: "2",
            },
            {
                question:
                    "Which HTML attribute is used to specify a title for an element?",
                options: {
                    1: "header",
                    2: "name",
                    3: "id",
                    4: "title",
                },
                answer: "4",
            },
        ];
        nameOfQuiz.textContent = "HTML";
        numOfQues.textContent = rawQuestions.length;
        quizName.textContent = "HTML";
    } else if (arr === "css") {
        rawQuestions = [
            {
                question: "What does CSS stand for?",
                options: {
                    1: "Coded Style Sheets",
                    2: "Creative Style Sheets",
                    3: "Computer Style Sheets",
                    4: "Cascading Style Sheets",
                },
                answer: "4",
            },
            {
                question:
                    "Which HTML element is used to link an external CSS file?",
                options: {
                    1: "<link>",
                    2: "<style>",
                    3: "<script>",
                    4: "<css>",
                },
                answer: "1",
            },
            {
                question:
                    "What is the correct CSS syntax to select an element by its ID?",
                options: {
                    1: "#elementID",
                    2: ".elementID",
                    3: "elementID",
                    4: "ID.elementID",
                },
                answer: "1",
            },
            {
                question:
                    "Which CSS property is used to add space between the content and border of an element?",
                options: {
                    1: "spacing",
                    2: "margin",
                    3: "border-spacing",
                    4: "padding",
                },
                answer: "4",
            },
            {
                question:
                    "Which CSS property is used to create a shadow effect around an element?",
                options: {
                    1: "shadow",
                    2: "text-shadow",
                    3: "box-shadow",
                    4: "element-shadow",
                },
                answer: "3",
            },
            {
                question:
                    "Which CSS property is used to change the color of the text?",
                options: {
                    1: "text-style",
                    2: "text-color",
                    3: "font-color",
                    4: "color",
                },
                answer: "4",
            },
            {
                question:
                    "Which CSS property is used to set the space between lines of text?",
                options: {
                    1: "line-spacing",
                    2: "text-spacing",
                    3: "line-height",
                    4: "spacing",
                },
                answer: "3",
            },
            {
                question:
                    "Which CSS property is used to align text vertically within an element?",
                options: {
                    1: "text-align",
                    2: "vertical-align",
                    3: "line-height",
                    4: "align-items",
                },
                answer: "2",
            },
            {
                question:
                    "Which CSS property is used to specify the size of the font?",
                options: {
                    1: "font-size",
                    2: "text-size",
                    3: "size",
                    4: "font-style",
                },
                answer: "1",
            },
            {
                question:
                    "Which CSS property is used to specify the style of a border?",
                options: {
                    1: "border-width",
                    2: "border-style",
                    3: "border-color",
                    4: "border",
                },
                answer: "2",
            },
            {
                question:
                    "Which CSS property is used to control the spacing between elements?",
                options: {
                    1: "spacing",
                    2: "padding",
                    3: "margin",
                    4: "border-spacing",
                },
                answer: "3",
            },
            {
                question: "Which CSS property is used to make text bold?",
                options: {
                    1: "font-style",
                    2: "font-weight",
                    3: "text-weight",
                    4: "bold",
                },
                answer: "2",
            },
            {
                question:
                    "Which CSS property is used to create rounded corners on an element?",
                options: {
                    1: "rounded-corners",
                    2: "border-style",
                    3: "corner-radius",
                    4: "border-radius",
                },
                answer: "4",
            },
            {
                question:
                    "Which CSS property is used to create an underline below text?",
                options: {
                    1: "text-underline",
                    2: "underline",
                    3: "text-decoration",
                    4: "underline-style",
                },
                answer: "3",
            },
            {
                question:
                    "Which CSS property is used to control the order of overlapping elements?",
                options: {
                    1: "stack-order",
                    2: "order",
                    3: "z-index",
                    4: "overlap-order",
                },
                answer: "3",
            },
            {
                question:
                    "Which CSS property is used to add a background image to an element?",
                options: {
                    1: "background-image",
                    2: "background-url",
                    3: "image-background",
                    4: "background-picture",
                },
                answer: "1",
            },
            {
                question:
                    "Which CSS property is used to control the size of the font?",
                options: {
                    1: "size",
                    2: "text-size",
                    3: "font-style",
                    4: "font-size",
                },
                answer: "4",
            },
            {
                question:
                    "Which CSS property is used to set the transparency of an element?",
                options: {
                    1: "transparency",
                    2: "opacity",
                    3: "alpha",
                    4: "transparent",
                },
                answer: "2",
            },
            {
                question:
                    "Which CSS property is used to control the order of flex items?",
                options: {
                    1: "order",
                    2: "flex-order",
                    3: "flex-position",
                    4: "position",
                },
                answer: "1",
            },
            {
                question:
                    "Which CSS property is used to align flex items vertically?",
                options: {
                    1: "align-items",
                    2: "justify-items",
                    3: "align-content",
                    4: "align-self",
                },
                answer: "1",
            },
            {
                question:
                    "Which CSS property is used to distribute extra space among flex items?",
                options: {
                    1: "flex-shrink",
                    2: "flex-grow",
                    3: "flex-basis",
                    4: "flex",
                },
                answer: "2",
            },
            {
                question:
                    "Which CSS property is used to align a single flex item within a flex container?",
                options: {
                    1: "justify-content",
                    2: "align-items",
                    3: "align-content",
                    4: "align-self",
                },
                answer: "4",
            },
            {
                question:
                    "Which CSS property is used to wrap flex items onto multiple lines?",
                options: {
                    1: "flex-line",
                    2: "flex-flow",
                    3: "flex-wrap",
                    4: "flex-align",
                },
                answer: "3",
            },
            {
                question:
                    "Which CSS property is used to set the size of a flex item?",
                options: {
                    1: "flex-basis",
                    2: "flex-grow",
                    3: "flex-size",
                    4: "flex-shrink",
                },
                answer: "1",
            },
            {
                question:
                    "Which CSS property is used to create flexible boxes and establish a flex formatting context?",
                options: {
                    1: "flexbox",
                    2: "display",
                    3: "flex-layout",
                    4: "flex-container",
                },
                answer: "2",
            },
        ];
        nameOfQuiz.textContent = "CSS";
        numOfQues.textContent = rawQuestions.length;
        quizName.textContent = "CSS";
    } else if (arr === "js") {
        rawQuestions = [
            {
                question:
                    "What is the output of the following code: console.log(typeof 42);",
                options: {
                    1: "number",
                    2: "boolean",
                    3: "undefined",
                    4: "string",
                },
                answer: "1",
            },
            {
                question:
                    "What is the correct syntax for a single-line comment in JavaScript?",
                options: {
                    1: "!-- This is a comment --",
                    2: "/* This is a comment */",
                    3: "// This is a comment",
                    4: "# This is a comment",
                },
                answer: "3",
            },
            {
                question:
                    "What is the output of the following code: console.log(2 + '2');",
                options: {
                    1: "4",
                    2: "Error",
                    3: "NaN",
                    4: "22",
                },
                answer: "4",
            },
            {
                question:
                    "Which function is used to parse a string and return an integer in JavaScript?",
                options: {
                    1: "toInteger()",
                    2: "parseInt()",
                    3: "parseFloat()",
                    4: "parseInteger()",
                },
                answer: "2",
            },
            {
                question:
                    "What is the output of the following code: console.log(5 === '5');",
                options: {
                    1: "true",
                    2: "NaN",
                    3: "Error",
                    4: "false",
                },
                answer: "4",
            },
            {
                question:
                    "What is the output of the following code: console.log(Boolean(''));",
                options: {
                    1: "true",
                    2: "Error",
                    3: "false",
                    4: "undefined",
                },
                answer: "3",
            },
            {
                question:
                    "Which of the following is not a valid JavaScript variable name?",
                options: {
                    1: "123abc",
                    2: "myVariable",
                    3: "_myVar",
                    4: "$price",
                },
                answer: "1",
            },
            {
                question:
                    "Which method is used to remove the last element from an array in JavaScript?",
                options: {
                    1: "splice()",
                    2: "pop()",
                    3: "shift()",
                    4: "push()",
                },
                answer: "2",
            },
            {
                question:
                    "What is the output of the following code: console.log(typeof null);",
                options: {
                    1: "undefined",
                    2: "null",
                    3: "object",
                    4: "string",
                },
                answer: "3",
            },
            {
                question:
                    "What is the result of the following expression: 3 * '2'?",
                options: {
                    1: "6",
                    2: "32",
                    3: "5",
                    4: "NaN",
                },
                answer: "1",
            },
            {
                question:
                    "Which method is used to remove the first element from an array in JavaScript?",
                options: {
                    1: "unshift()",
                    2: "pop()",
                    3: "splice()",
                    4: "shift()",
                },
                answer: "4",
            },
            {
                question:
                    "What is the output of the following code: console.log(4 > 2 > 1);",
                options: {
                    1: "undefined",
                    2: "true",
                    3: "Error",
                    4: "false",
                },
                answer: "4",
            },
            {
                question:
                    "What is the purpose of the 'this' keyword in JavaScript?",
                options: {
                    1: "To refer to the current object",
                    2: "To create a new object",
                    3: "To define a function",
                    4: "To access the global scope",
                },
                answer: "1",
            },
            {
                question:
                    "Which array method is used to combine two or more arrays?",
                options: {
                    1: "concat()",
                    2: "join()",
                    3: "push()",
                    4: "slice()",
                },
                answer: "1",
            },
            {
                question:
                    "What is the output of the following code: console.log(typeof NaN);",
                options: {
                    1: "undefined",
                    2: "NaN",
                    3: "number",
                    4: "string",
                },
                answer: "3",
            },
            {
                question:
                    "What is the output of the following code: console.log(Math.floor(4.7));",
                options: {
                    1: "4",
                    2: "5",
                    3: "4.7",
                    4: "Error",
                },
                answer: "1",
            },
            {
                question:
                    "Which array method is used to add one or more elements to the end of an array?",
                options: {
                    4: "push()",
                    2: "pop()",
                    3: "shift()",
                    1: "unshift()",
                },
                answer: "4",
            },
            {
                question:
                    "What does the 'includes' method in JavaScript return?",
                options: {
                    1: "A new array with all the elements that satisfy a provided condition",
                    2: "The index of the first occurrence of the specified value in the array",
                    3: "True if the array contains the specified value, otherwise false",
                    4: "The first element in the array that satisfies a provided condition",
                },
                answer: "3",
            },
            {
                question:
                    "Which built-in method is used to join the elements of an array into a string?",
                options: {
                    1: "slice()",
                    2: "concat()",
                    3: "join()",
                    4: "toString()",
                },
                answer: "3",
            },
            {
                question:
                    "What does the 'typeof' operator return for an array?",
                options: {
                    1: "array",
                    2: "array",
                    3: "object",
                    4: "function",
                },
                answer: "3",
            },
            {
                question: "What does the 'Array.isArray()' method check?",
                options: {
                    1: "Whether a value is a string or not",
                    2: "Whether a value is an array or not",
                    3: "Whether a value is a number or not",
                    4: "Whether a value is a function or not",
                },
                answer: "2",
            },
            {
                question: "What does the 'Math.random()' function return?",
                options: {
                    1: "A random integer",
                    2: "A random number between 0 and 1",
                    3: "The value of Pi (π)",
                    4: "The square root of a number",
                },
                answer: "2",
            },
            {
                question:
                    "What is the purpose of the 'switch' statement in JavaScript?",
                options: {
                    1: "To perform different actions based on different conditions",
                    2: "To define a loop",
                    3: "To define a function",
                    4: "To concatenate strings",
                },
                answer: "1",
            },
            {
                question:
                    "Which logical operator in JavaScript returns true if any of the operands is true?",
                options: {
                    1: "!==",
                    2: "&&",
                    3: "!",
                    4: "||",
                },
                answer: "4",
            },
            {
                question:
                    "What is the purpose of the 'typeof' operator in JavaScript?",
                options: {
                    1: "To perform mathematical operations",
                    2: "To convert a value to a string",
                    3: "To determine the data type of a value",
                    4: "To compare two values",
                },
                answer: "3",
            },
            {
                question:
                    "What is the result of the expression '2 + 3 + '7'' in JavaScript?",
                options: {
                    1: "NaN",
                    2: "12",
                    3: "'57'",
                    4: "Error",
                },
                answer: "3",
            },
            {
                question:
                    "What is the purpose of the 'reduce' method in JavaScript?",
                options: {
                    1: "To filter an array based on a condition",
                    2: "To transform an array into a new array",
                    3: "To iterate over an array and perform an action on each element",
                    4: "To reduce an array to a single value by applying a function to each element",
                },
                answer: "4",
            },
            {
                question:
                    "What is the purpose of the 'find' method in JavaScript?",
                options: {
                    1: "To find the index of an element in an array",
                    2: "To find the maximum value in an array",
                    3: "To find the first element in an array that satisfies a provided testing function",
                    4: "To find the length of an array",
                },
                answer: "3",
            },
            {
                question:
                    "What is the purpose of the 'slice' method in JavaScript?",
                options: {
                    1: "To remove elements from an array",
                    2: "To create a new array containing a portion of the original array",
                    3: "To add elements to an array",
                    4: "To reverse the order of elements in an array",
                },
                answer: "2",
            },
            {
                question:
                    "Which method is used to sort the elements of an array in JavaScript?",
                options: {
                    1: "sort",
                    2: "concat",
                    3: "slice",
                    4: "reverse",
                },
                answer: "1",
            },
            {
                question:
                    "What is the purpose of the 'splice' method in JavaScript?",
                options: {
                    1: "To add elements to an array",
                    2: "To remove elements from an array",
                    3: "To create a new array containing a portion of the original array",
                    4: "To reverse the order of elements in an array",
                },
                answer: "2",
            },
            {
                question:
                    "What is the purpose of the 'reverse' method in JavaScript?",
                options: {
                    1: "To remove elements from an array",
                    2: "To add elements to an array",
                    3: "To create a new array containing a portion of the original array",
                    4: "To reverse the order of elements in an array",
                },
                answer: "4",
            },
            {
                question:
                    "How would you convert a string to lowercase in JavaScript?",
                options: {
                    1: "string.toLower()",
                    2: "string.toUpperCase()",
                    3: "string.toLowerCase()",
                    4: "string.upperCase()",
                },
                answer: "3",
            },
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
        nameOfQuiz.textContent = "JavaScript";
        numOfQues.textContent = rawQuestions.length;
        quizName.textContent = "JavaScript";
    }
    quesArr = shuffleArray(rawQuestions);
};

const startQuiz = () => {
    let firstNameRaw = document.getElementById("firstName");
    let lastNameRaw = document.getElementById("lastName");
    let quizName = document.getElementById("quizName");
    if (!firstNameRaw.value) {
        firstNameRaw.style.border = "1px solid #D9183B";
    }
    if (!lastNameRaw.value) {
        lastNameRaw.style.border = "1px solid #D9183B";
    }
    if (quizName.textContent.includes("Select")) {
        quizName.style.border = "1px solid #D9183B";
    }
    if (
        !firstNameRaw.value ||
        !lastNameRaw.value ||
        quizName.textContent.includes("Select")
    ) {
        return;
    }
    for (var i = 0; i < firstNameRaw.length; i++) {
        i === 0
            ? firstName.push(firstNameRaw[i].toUpperCase())
            : firstName.push(firstNameRaw[i].toLowerCase());
    }
    firstName = firstName.join("");
    for (var i = 0; i < lastNameRaw.length; i++) {
        i === 0
            ? lastName.push(lastNameRaw[i].toUpperCase())
            : lastName.push(lastNameRaw[i].toLowerCase());
    }
    lastName = lastName.join("");
    userName = firstName + " " + lastName;
    gsap.to("#formPage", {
        x: "-75px",
        opacity: 0,
        ease: "power1.out",
        duration: 0.5,
        onComplete: function () {
            formPage.style.display = "none";
            questionPage.style.display = "flex";
            gsap.from("#questionPage", {
                x: "75px",
                opacity: 0,
                ease: "power1.out",
                duration: 0.5,
            });
        },
    });

    headerName.textContent = userName;
    setQuestion();
    headCounter();
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
let timerInterval;
const headCounter = () => {
    timerInterval = setInterval(() => {
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
            clearInterval(timerInterval);
        }
    }, 1000);
};

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
    document.getElementById("quizNameHead").textContent =
        document.getElementById("nameOfQuiz").textContent;
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
        if (quesArr[quesCounter].options[i + 1].includes("<")) {
            const html = {
                unescape: function (text) {
                    const entities = {
                        "&lt;": "<",
                        "&gt;": ">",
                    };
                    return text.replace(/&(lt|gt);/g, (match, entity) => {
                        return entities[match];
                    });
                },
            };
            const escapedText = html.unescape(
                quesArr[quesCounter].options[i + 1]
            );
            optionElements[i].textContent = escapedText;
        } else {
            optionElements[i].innerHTML = quesArr[quesCounter].options[i + 1];
        }
    }
    let btnCheck = quesCounter + 1;
    if (btnCheck == quesArr.length) {
        nextQuesBtn.style.display = "none";
        submitQuesBtn.style.display = "block";
        submitQuesBtn.style.visibility = "hidden";
    }
    quesCounter++;
};

const chkAns = (event) => {
    options.style.pointerEvents = "none";
    let ans = quesArr[quesCounter - 1].answer;
    let answer = quesArr[quesCounter - 1].options[ans];
    if (event.textContent === answer) {
        event.classList.add("correctAns");
        correctAnsCounter++;
    } else {
        wrongAnsCounter++;
        event.classList.add("wrongAns");
        optionElements[ans - 1].classList.add("correctAns");
    }
    submitQuesBtn.style.visibility = "visible";
    nextQuesBtn.style.visibility = "visible";
};

const showResult = () => {
    clearInterval(timerInterval);
    gsap.to(".quesContainerNoneGsap", {
        x: "-50px",
        opacity: 0,
        ease: "power1.out",
        duration: 0.5,
        onComplete: function () {
            questionElem.parentNode.style.display = "none";
            resultPage.style.display = "flex";
            gsap.from("#resultPage", {
                x: "50px",
                opacity: 0,
                ease: "power1.out",
                duration: 0.5,
                onComplete: showResultAfterAnimation(),
            });
        },
    });
    const showResultAfterAnimation = () => {
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

const handleBorder = (element) => {
    element.style.transition = "border ease 100ms";
    element.value.trim() == ""
        ? (element.style.border = "1px solid #D9183B")
        : (element.style.border = "1px solid #8afd98");
};

const loadPage = () => {
    gsap.to("#resultPage, #questionPage", {
        x: -75,
        opacity: 0,
        ease: "power1.out",
        duration: 0.5,
    });
    setTimeout(() => {
        location.reload(true);
    }, 500);
};
