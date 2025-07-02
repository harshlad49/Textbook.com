import React, { useState, useEffect } from 'react';

const subjects = {
  police: [
    { question: "What is IPC?", options: ["Indian Police Court", "Indian Penal Code", "Indian Power Code", "Indian Private Court"], answer: "Indian Penal Code" },
    { question: "Who controls law and order in a state?", options: ["Governor", "Chief Minister", "Police Commissioner", "Home Minister"], answer: "Police Commissioner" },
    { question: "Which of these is a traffic rule?", options: ["Don't wear helmet", "Ignore signals", "Overtake in turn", "Stop at red light"], answer: "Stop at red light" },
    { question: "What does FIR stand for?", options: ["Final Investigation Report", "First Information Report", "First Incident Record", "Fast Investigation Rule"], answer: "First Information Report" },
    { question: "Who is head of Indian Police at national level?", options: ["DGP", "SP", "IG", "Director General"], answer: "Director General" },
    { question: "What color is used for police emergency?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Red" },
    { question: "Which of these is a cybercrime?", options: ["Driving fast", "Stealing phone", "Hacking", "Not paying fine"], answer: "Hacking" },
    { question: "Who investigates crimes?", options: ["Doctor", "Lawyer", "Police", "Teacher"], answer: "Police" },
    { question: "What is the police emergency number in India?", options: ["100", "108", "101", "112"], answer: "100" },
    { question: "Who is responsible for a district’s law enforcement?", options: ["Collector", "SP", "IG", "Sub Inspector"], answer: "SP" }
  ],
  ips: [
    { question: "IPS stands for?", options: ["Indian Public Service", "Indian Police Service", "Internal Police Service", "Indian Power Staff"], answer: "Indian Police Service" },
    { question: "Which exam is needed for IPS?", options: ["NEET", "CAT", "UPSC", "SSC"], answer: "UPSC" },
    { question: "IPS officers are trained at?", options: ["LBSNAA", "SVPNPA", "IIM", "ISI"], answer: "SVPNPA" },
    { question: "IPS batch ranking is based on?", options: ["Interview", "Height", "Marks", "Quota"], answer: "Marks" },
    { question: "Who appoints IPS officers?", options: ["President", "CM", "Governor", "PM"], answer: "President" },
    { question: "Minimum age for IPS exam?", options: ["18", "21", "23", "25"], answer: "21" },
    { question: "IPS is an ____ service.", options: ["State", "All India", "Foreign", "Local"], answer: "All India" },
    { question: "IPS handles ____ affairs.", options: ["Finance", "Law and order", "Agriculture", "Education"], answer: "Law and order" },
    { question: "Which one is not a police rank?", options: ["DGP", "SP", "IRS", "IG"], answer: "IRS" },
    { question: "IPS full form again?", options: ["Indian Police Service", "India Protection Squad", "Internal Patrol System", "None"], answer: "Indian Police Service" }
  ],
  gpsc: [
    { question: "Who appoints the governor of a state?", options: ["President", "Prime Minister", "Chief Minister", "Parliament"], answer: "President" },
    { question: "Full form of GPSC?", options: ["Gujarat Public Service Commission", "General Police Service Council", "Gujarat Planning and Survey Committee", "None"], answer: "Gujarat Public Service Commission" },
    { question: "Which article mentions Public Service Commission?", options: ["Art 12", "Art 315", "Art 356", "Art 144"], answer: "Art 315" },
    { question: "GPSC exams are conducted by?", options: ["UPSC", "State government", "High Court", "Governor"], answer: "State government" },
    { question: "Which one is NOT GPSC subject?", options: ["Science", "Law", "Dance", "Economics"], answer: "Dance" },
    { question: "Who conducts interviews in GPSC?", options: ["Governor", "President", "GPSC Board", "Public"], answer: "GPSC Board" },
    { question: "Who is current CM of Gujarat?", options: ["Bhupendra Patel", "Modi", "Rupani", "Amit Shah"], answer: "Bhupendra Patel" },
    { question: "Where is GPSC head office?", options: ["Rajkot", "Gandhinagar", "Vadodara", "Surat"], answer: "Gandhinagar" },
    { question: "Which body ensures fair exams?", options: ["Supreme Court", "UPSC", "GPSC", "SSC"], answer: "GPSC" },
    { question: "Which is highest post in GPSC exams?", options: ["Talati", "IAS", "PSI", "Deputy Collector"], answer: "Deputy Collector" }
  ],
  railway: [
    { question: "Which is the first railway station in India?", options: ["Mumbai", "Delhi", "Chennai", "Howrah"], answer: "Mumbai" },
    { question: "When did Indian Railways start?", options: ["1853", "1900", "1947", "1830"], answer: "1853" },
    { question: "Which is the longest railway platform in India?", options: ["Gorakhpur", "Kharagpur", "Howrah", "Chennai"], answer: "Gorakhpur" },
    { question: "Who is Railway Minister (2024)?", options: ["Ashwini Vaishnaw", "Nitin Gadkari", "Piyush Goyal", "Modi"], answer: "Ashwini Vaishnaw" },
    { question: "Fastest train in India?", options: ["Tejas", "Shatabdi", "Vande Bharat", "Rajdhani"], answer: "Vande Bharat" },
    { question: "Indian Railways comes under?", options: ["State Govt", "Ministry of Transport", "Ministry of Railways", "Defense"], answer: "Ministry of Railways" },
    { question: "Which zone covers Gujarat?", options: ["Northern", "Western", "Central", "Eastern"], answer: "Western" },
    { question: "Railway exams conducted by?", options: ["SSC", "RRB", "GPSC", "UPSC"], answer: "RRB" },
    { question: "Railway recruitment board is?", options: ["RRB", "IRCTC", "RRC", "PST"], answer: "RRB" },
    { question: "Ticket booking site?", options: ["Amazon", "IRCTC", "Flipkart", "MakeMyTrip"], answer: "IRCTC" }
  ]
};


const Quiz = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [subject, setSubject] = useState('');
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);

  const questions = subjects[subject] || [];

  // Countdown timer effect
  useEffect(() => {
    if (!startQuiz || currentQ >= 10) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [startQuiz, currentQ]);

  // Reset timer only (no auto next)
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(10); // just reset timer
    }
  }, [timeLeft]);

  const handleStart = () => {
    if (name && id && subject) {
      setStartQuiz(true);
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
            <h2 className="text-2xl font-bold mb-4">Online Quiz Module</h2>
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
            <select
              className="w-full mb-4 p-2 border rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              <option value="police">Police</option>
              <option value="ips">IPS</option>
              <option value="gpsc">GPSC</option>
              <option value="railway">Railway</option>
            </select>
            <button
              onClick={handleStart}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
            <p className="text-lg mb-2">
              Name: <strong>{name}</strong>
            </p>
            <p className="text-lg mb-2">
              ID: <strong>{id}</strong>
            </p>
            <p className="text-lg mb-2">
              Subject: <strong>{subject.toUpperCase()}</strong>
            </p>
            <p className="text-xl text-green-700 mt-4">
              You scored: <strong>{score} / 10</strong>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
