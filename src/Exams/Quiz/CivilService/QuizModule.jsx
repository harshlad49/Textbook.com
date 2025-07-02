import React, { useState, useEffect } from 'react';

const subjects = {
  uppsc: [
    {
      question: "Who was the first Chief Minister of Uttar Pradesh?",
      options: ["Charan Singh", "Govind Ballabh Pant", "Mulayam Singh Yadav", "Yogi Adityanath"],
      answer: "Govind Ballabh Pant"
    },
    {
      question: "Which river is known as the lifeline of Uttar Pradesh?",
      options: ["Yamuna", "Sarayu", "Ganga", "Gomti"],
      answer: "Ganga"
    },
    {
      question: "Which article of the Indian Constitution deals with Public Service Commissions?",
      options: ["Article 315", "Article 370", "Article 356", "Article 124"],
      answer: "Article 315"
    },
    {
      question: "Who appoints the Governor of a State?",
      options: ["Chief Minister", "Prime Minister", "President", "Speaker"],
      answer: "President"
    },
    {
      question: "What is the official language of Uttar Pradesh?",
      options: ["Hindi", "Urdu", "English", "Sanskrit"],
      answer: "Hindi"
    },
    {
      question: "Which of the following is a UNESCO World Heritage Site in UP?",
      options: ["Sarnath", "Qutub Minar", "Taj Mahal", "Ajanta Caves"],
      answer: "Taj Mahal"
    },
    {
      question: "Who is the current Governor of Uttar Pradesh? (as of 2025)",
      options: ["Anandiben Patel", "Yogi Adityanath", "Rajnath Singh", "Narendra Modi"],
      answer: "Anandiben Patel"
    },
    {
      question: "What is the capital of Uttar Pradesh?",
      options: ["Prayagraj", "Varanasi", "Lucknow", "Kanpur"],
      answer: "Lucknow"
    },
    {
      question: "Which dam is built on the Rihand River?",
      options: ["Rihand Dam", "Sardar Sarovar Dam", "Tehri Dam", "Bhakra Dam"],
      answer: "Rihand Dam"
    },
    {
      question: "Who conducts UPPSC exams?",
      options: ["Union Government", "State Government", "Parliament", "President"],
      answer: "State Government"
    }
  ]
};

const QuizModule = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);

  const questions = subjects["uppsc"];

  useEffect(() => {
    if (!startQuiz || currentQ >= 10) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [startQuiz, currentQ]);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(10);
    }
  }, [timeLeft]);

  const handleStart = () => {
    if (name && id) {
      setStartQuiz(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected('');
    setTimeLeft(10);
    if (currentQ < 9) {
      setCurrentQ(currentQ + 1);
    } else {
      setStartQuiz(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        {!startQuiz && currentQ === 0 ? (
          <>
            <h2 className="text-2xl font-bold mb-4">UPPSC Quiz</h2>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full mb-3 p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Your ID"
              className="w-full mb-3 p-2 border rounded"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button
              onClick={handleStart}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Start Quiz
            </button>
          </>
        ) : startQuiz ? (
          <>
            <h3 className="text-xl font-semibold mb-2">
              Q{currentQ + 1}. {questions[currentQ].question}
            </h3>
            <div className="mb-4 text-right text-sm text-gray-600">
              Time Left: {timeLeft}s
            </div>
            <div className="space-y-2">
              {questions[currentQ].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`block w-full text-left px-4 py-2 border rounded ${
                    selected
                      ? option === questions[currentQ].answer
                        ? 'bg-green-200 border-green-500'
                        : option === selected
                        ? 'bg-red-200 border-red-500'
                        : ''
                      : ''
                  }`}
                  disabled={!!selected}
                >
                  {option}
                </button>
              ))}
            </div>
            {selected && (
              <button
                onClick={handleNext}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Next
              </button>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-lg mb-2">Name: <strong>{name}</strong></p>
            <p className="text-lg mb-2">ID: <strong>{id}</strong></p>
            <p className="text-lg mb-2">Subject: <strong>UPPSC</strong></p>
            <p className="text-xl text-green-700 mt-4">
              You scored: <strong>{score} / 10</strong>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizModule;
