const quizData = [{
        question: 'How old is Me?',
        a: '10',
        b: '12',
        c: '3',
        d: '6',
        correct: 'c'

    },
    {
        question: 'Who is president of Uganda?',
        a: 'Museveni',
        b: 'Besigye',
        c: 'Muhoozi',
        d: 'Bibi wine',
        correct: 'a'

    },
    {
        question: 'What is the best programming language in 2022?',
        a: 'javaScript',
        b: 'Python',
        c: 'Java',
        d: 'C++',
        correct: 'b'

    },
    {
        question: 'Which is the best University in Uganda?',
        a: 'KIU',
        b: 'Kyambogo University',
        c: 'Makerere University',
        d: 'Isbat',
        correct: 'c'

    },
    {
        question: 'What does HTML stands for?',
        a: 'hyper make text',
        b: 'hyper mark text',
        c: 'hyper markup text',
        d: 'hybernate margin texas',
        correct: 'c'
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuiz++;
}

function getSelected() {
    const answersEl = document.querySelectorAll(".answer");

    answersEl.forEach((answersEl) => {
        if (answersEl.checked) {
            return answersEl.id;
        }
    })
    return answer
}


submit.addEventListener("click", () => {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TODO:Show results
        alert("You finalised!")
    }

})