// Add an event listener to run the script when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class "fade-in"
    const sections = document.querySelectorAll(".fade-in");
  
    // Create an IntersectionObserver to detect when elements are in the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // If the element is in the viewport, add the "visible" class
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });
  
    // Observe each section with the "fade-in" class
    sections.forEach(section => observer.observe(section));
  });
  
  // Quiz Questions (Mathematics and Science)
  const quizQuestions = [
    {
        question: "What is 2 + 2?", // Question text
        options: ["3", "4", "5", "6"], // Answer options
        answer: "4" // Correct answer
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "H2"],
        answer: "H2O"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the value of π (pi) approximately?",
        options: ["3.14", "2.71", "1.62", "4.13"],
        answer: "3.14"
    }
  ];
  
  // Function to Start the Quiz
  function startQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = "block"; // Show the quiz container
  
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = ""; // Clear previous content
  
    // Display each question
    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
  
        // Add the question text
        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionText);
  
        // Display options for the question
        question.options.forEach(option => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio"; // Radio button for options
            input.name = `question${index}`; // Group options by question
            input.value = option; // Set the option value
            label.appendChild(input); // Add the radio button to the label
            label.appendChild(document.createTextNode(` ${option}`)); // Add the option text
            questionDiv.appendChild(label); // Add the label to the question div
        });
  
        quizElement.appendChild(questionDiv); // Add the question to the quiz container
    });
  }
  
  // Function to Submit the Quiz
  function submitQuiz() {
    const quizElement = document.getElementById("quiz");
    const resultsElement = document.getElementById("results");
    let score = 0; // Initialize score
  
    // Check each question for the correct answer
    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.answer) {
            score++; // Increment score if the answer is correct
        }
    });
  
    // Display results
    resultsElement.innerHTML = `You scored ${score} out of ${quizQuestions.length}!`;
  }