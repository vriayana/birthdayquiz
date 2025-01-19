const questions = [
    {
        text: "Where did you first meet your loved one?",
        options: ["College", "Cafe", "Online", "Friend's Party"],
        correct: 2,
        image: "b.png",
      },
      {
        text: "What is your favorite color?",
        options: ["Red", "Blue", "Black", "Blush on your girls cheek"],
        correct: 3,
        image: "c.png",
      },
    {
      text: "Do you love your girlfriend?",
      options: ["Yes", "A lot", "More than anything and you will do anything for her", "No, because you are dumb"],
      correct: 2,
      image: "d.png",
    },

  ];
  let currentQuestion = 0;
  
  function startQuiz() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("quiz-section").classList.remove("hidden");
    loadQuestion();
  }
  

  function loadQuestion() {
    const questionData = questions[currentQuestion];
  
    // Set the question text
    document.getElementById("question-text").textContent = questionData.text;
  
    // Set the question image in the <img> tag
    document.getElementById("question-image").src = questionData.image;
  
    // Clear previous options
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
  
    // Add options dynamically
    questionData.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className = "btn";
      button.onclick = () => checkAnswer(index); // Check answer on click
      optionsContainer.appendChild(button);
    });
  }
  

  
  
  function checkAnswer(selected) {
    const questionData = questions[currentQuestion];
    if (selected === questionData.correct) {
      document.getElementById("quiz-section").classList.add("hidden");
      document.getElementById("correct-answer-section").classList.remove("hidden");
      document.getElementById("correct-text").textContent =
        "You’re doing amazing, my love! ❤️";
      document.getElementById("congrats-image").src = "f.png";
    } else {
      document.getElementById("quiz-section").classList.add("hidden");
      document.getElementById("result-section").classList.remove("hidden");
      document.getElementById("result-message").textContent = "Oops!";
      document.getElementById("result-image").src = "e.png";
      document.getElementById("result-text").textContent =
        "Woah dude, WTF! You can't be this oblivious!";
    }
    function checkAnswer(selected) {
        const questionData = questions[currentQuestion];
      
        if (selected === questionData.correct) {
          // Scroll to top of the page
          window.scrollTo({ top: 0, behavior: 'smooth' });
      
          // Hide current section and show correct answer section
          document.getElementById("quiz-section").classList.add("hidden");
          document.getElementById("correct-answer-section").classList.remove("hidden");
          document.getElementById("congrats-image").src = questionData.image; // Example of displaying correct image
          document.getElementById("correct-text").textContent = "You're doing great!";
        } else {
          // Scroll to top of the page
          window.scrollTo({ top: 0, behavior: 'smooth' });
      
          // Hide current section and show wrong answer section
          document.getElementById("quiz-section").classList.add("hidden");
          document.getElementById("result-section").classList.remove("hidden");
          document.getElementById("result-message").textContent = "Oops!";
          document.getElementById("result-image").src = "assets/wrong-answer.jpg"; // Replace with the desired image
          document.getElementById("result-text").textContent =
            "Woah dude, WTF! You can't be this oblivious!";
        }
      }
      
  }
  
  function nextQuestion() {
    currentQuestion++;
    document.getElementById("correct-answer-section").classList.add("hidden");
    if (currentQuestion < questions.length) {
      document.getElementById("quiz-section").classList.remove("hidden");
      loadQuestion();
    } else {
      document.getElementById("final-section").classList.remove("hidden");
    }
  }
  
  function retry() {
    document.getElementById("result-section").classList.add("hidden");
    document.getElementById("quiz-section").classList.remove("hidden");
  }
  
  
  