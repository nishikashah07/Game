const startButton = document.getElementById('startButton');
const startContainer = document.getElementById('startContainer');
const nameContainer = document.getElementById('nameContainer');
const nameForm = document.getElementById('nameForm');
const yearContainer = document.getElementById('yearContainer');
const yearForm = document.getElementById('yearForm');
const contactContainer = document.getElementById('contactContainer');
const contactForm = document.getElementById('contactForm');
const questionContainer = document.getElementById('questionContainer');
const resultContainer = document.getElementById('resultContainer');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultMessageElement = document.getElementById('resultMessage');
const committeeInfoElement = document.getElementById('committeeInfo');

const questions = [
    {
        question: "If you had a superpower, which one would you choose to help our community?",
        options: {
            "1": "Innovative 🖥️",
            "2": "Creative 📚",
            "3": "Athletic 🏅",
            "4": "Thought-provoking 🎤",
            "5": "Artistic 🎭",
            "6": "Compassionate 🌍"
        },
        mapping: {
            "1": "Tech",
            "2": "Editorial",
            "3": "Sports",
            "4": "Colloquium",
            "5": "Cultural",
            "6": "Social Impact"
        }
    },
    {
        question: "Which type of project would you be most excited to lead?",
        options: {
            "1": "Future-focused 🚀",
            "2": "Literary 📰",
            "3": "Competitive 🏆",
            "4": "Intellectual 🎙️",
            "5": "Fancy aesthetic 🎉",
            "6": "Socially conscious 💡"
        },
        mapping: {
            "1": "Tech",
            "2": "Editorial",
            "3": "Sports",
            "4": "Colloquium",
            "5": "Cultural",
            "6": "Social Impact"
        }
    },
    {
        question: "What's your dream role in our committee?",
        options: {
            "1": "Innovation expert 💻🔮",
            "2": "Wordsmith ✍️",
            "3": "Motivator ⚽",
            "4": "Discussion leader 🗣️",
            "5": "Event planner 🎨",
            "6": "Change-maker 🤝"
        },
        mapping: {
            "1": "Tech",
            "2": "Editorial",
            "3": "Sports",
            "4": "Colloquium",
            "5": "Cultural",
            "6": "Social Impact"
        }
    },
    {
        question: "Which fictional character do you relate to most in a committee setting?",
        options: {
            "1": "Innovative like Tony Stark (Iron Man) 🦾",
            "2": "Editorial genius like Hermione Granger 📖",
            "3": "Sporty like Ted Lasso ⚽",
            "4": "Thoughtful like Leslie Knope 🎙️",
            "5": "Cultural like Moana 🌺",
            "6": "Social advocate like Atticus Finch ⚖️"
        },
        mapping: {
            "1": "Tech",
            "2": "Editorial",
            "3": "Sports",
            "4": "Colloquium",
            "5": "Cultural",
            "6": "Social Impact"
        }
    },
    {
        question: "If you could organize a dream event, what would it be?",
        options: {
            "1": "Discovering the undiscovered 🛠️✨",
            "2": "Literary and workshop retreat 📓",
            "3": "Sporty and energetic championship 🏃‍♂️",
            "4": "Intellectual and insightful colloquium 🎤",
            "5": "Cultural and artsy festival 🎭",
            "6": "Socially conscious and impactful summit 🌱"
        },
        mapping: {
            "1": "Tech",
            "2": "Editorial",
            "3": "Sports",
            "4": "Colloquium",
            "5": "Cultural",
            "6": "Social Impact"
        }
    }
];

let currentQuestionIndex = 0;
let answers = [];
let userName = '';
let userYear = '';
let userContact = '';

startButton.addEventListener('click', showNameForm);
nameForm.addEventListener('submit', handleNameSubmit);
yearForm.addEventListener('submit', handleYearSubmit);
contactForm.addEventListener('submit', handleContactSubmit);

function showNameForm() {
    startContainer.classList.add('hide');
    nameContainer.classList.remove('hide');
}

function handleNameSubmit(event) {
    event.preventDefault();
    userName = document.getElementById('name').value;
    nameContainer.classList.add('hide');
    yearContainer.classList.remove('hide');
}

function handleYearSubmit(event) {
    event.preventDefault();
    userYear = document.getElementById('year').value;
    yearContainer.classList.add('hide');
    contactContainer.classList.remove('hide');
}

function handleContactSubmit(event) {
    event.preventDefault();
    userContact = document.getElementById('contact').value;
    contactContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    questionElement.textContent = questions[currentQuestionIndex].question;
    Object.keys(questions[currentQuestionIndex].options).forEach(key => {
        const option = questions[currentQuestionIndex].options[key];
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('optionButton');
        button.addEventListener('click', () => selectOption(key));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectOption(key) {
    const selectedCommittee = questions[currentQuestionIndex].mapping[key];
    answers.push(selectedCommittee);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    const committee = determineCommittee(answers);
    resultMessageElement.textContent = `The committee that suits you, ${userName}, in year of study ${userYear} is ${committee.name}.`;
    committeeInfoElement.innerHTML = `
        <img src="${committee.logo}" alt="${committee.name} logo">
        <p>${committee.name}</p>
    `;
    saveUserData(userName, userYear, userContact);
}

function determineCommittee(answers) {
    // Count occurrences of each committee
    const counts = {
        "Tech": 0,
        "Editorial": 0,
        "Sports": 0,
        "Colloquium": 0,
        "Cultural": 0,
        "Social Impact": 0
    };
    
    answers.forEach(committee => {
        counts[committee]++;
    });

    // Determine the committee with the highest count
    let maxCount = 0;
    let mostSuitableCommittee = '';
    for (const committee in counts) {
        if (counts[committee] > maxCount) {
            maxCount = counts[committee];
            mostSuitableCommittee = committee;
        }
    }

    return getCommitteeDetails(mostSuitableCommittee);
}

function getCommitteeDetails(committeeName) {
    switch (committeeName) {
        case "Tech":
            return { name: "Tech and Research Cell", logo: "trc.jpeg" };
        case "Editorial":
            return { name: "Editorial Board", logo: "edb.jpeg"};
        case "Sports":
            return { name: "Sports", logo: "sports.jpeg" };
        case "Colloquium":
            return { name: "Colloquium", logo: "cq.jpeg"};
        case "Cultural":
            return { name: "Cultural", logo: "cult.jpeg" };
        case "Social Impact":
            return { name: "Social Impact", logo: "si.jpeg"};
        default:
            return { name: "Unknown", logo: "" };
    }
}

function saveUserData(name, year, contact) {
    // Implement this function to save or process user data as needed
    console.log(`User: ${name}, Year: ${year}, Contact: ${contact}`);
}

