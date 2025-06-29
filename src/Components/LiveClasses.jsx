import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LiveClasses = () => {
  const categories = [
    "Teaching Exams",
    "State Govt. Exams",
    "Regulatory Body Exams",
    "Banking Exams",
    "Civil Services Exam",
    "Judiciary Exams",
    "Defence Exams",
    "Law Exams",
    
  ];

  const classes = [
    {
      id: 1,
      subject: "Mapping based Best Questions (Indian...",
      tag: "GEOGRAPHY Paper 2 | UGC NET June...",
      teacher: "Shuaib Ahemed",
      time: "Lesson Ended",
      status: "ended",
    },
    {
      id: 2,
      subject: "SST GK/GS Practice Set",
      tag: "BPSC TRE 4.0 SST, GK/GS Practice Set",
      teacher: "Raj Rana",
      time: "29th Jun, 4:15 PM",
      status: "upcoming",
    },
    {
      id: 3,
      subject: "Sanskrit Practice Set",
      tag: "CTET JULY 2025 Sanskrit Practice Set",
      teacher: "Prakash Prajapat",
      time: "29th Jun, 9:15 PM",
      status: "upcoming",
    },
    {
      id: 4,
      subject: "Science Mock Practice",
      tag: "REET Level 2 Science",
      teacher: "Kavita Sharma",
      time: "30th Jun, 10:00 AM",
      status: "upcoming",
    },
    {
      id: 5,
      subject: "Science Mock Practice",
      tag: "REET Level 2 Science",
      teacher: "Kavita Sharma",
      time: "30th Jun, 10:00 AM",
      status: "upcoming",
    },
    {
      id: 6,
      subject: "Science Mock Practice",
      tag: "REET Level 2 Science",
      teacher: "Kavita Sharma",
      time: "30th Jun, 10:00 AM",
      status: "upcoming",
    },
  ];

  const categoryRef = useRef(null);
  const cardRef = useRef(null);

  const scroll = (ref, dir) => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white py-10 px-4 text-gray-800">
  
      <div className="text-center mb-6">
        <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold mr-2">
          FREE
        </span>
        <span className="text-2xl font-semibold">Live Classes</span>
      </div>

      
      <div className="relative mb-10 items-start max-w-7xl mx-auto">
        <div className="flex items-center  justify-center h-[70px]  gap-2">
          <button onClick={() => scroll(categoryRef, "left")} className="p-2 items-start h-[40px]  bg-gray-200 rounded-r-full">
            <ArrowLeft size={18} />
          </button>

          <div
            ref={categoryRef}
            className="flex overflow-x-auto whitespace-nowrap gap-3 scrollbar-hide scroll-smooth w-full max-w-5xl px-2"
          >
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 border rounded-full flex-shrink-0 ${
                  i === 0
                    ? "bg-cyan-400 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button onClick={() => scroll(categoryRef, "right")} className="p-2 bg-gray-200 rounded-s-full">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={() => scroll(cardRef, "left")}
            className="bg-cyan-100 p-2 rounded-full"
          >
            <ArrowLeft size={20} className="text-cyan-500" />
          </button>
        </div>

        <div
          ref={cardRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth w-full px-2"
        >
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="w-[300px] flex-shrink-0 border rounded-xl shadow-sm p-4 bg-white hover:shadow-lg transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  FREE
                </span>
                <span className="text-xs text-gray-600 truncate">{cls.tag}</span>
              </div>

              <h3 className="text-md font-semibold mb-4">{cls.subject}</h3>

              <div className="mb-4">
                <span className="text-sm text-gray-500">Start On: </span>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded ${
                    cls.status === "ended"
                      ? "bg-red-200 text-red-800"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {cls.time}
                </span>
              </div>

              <div className="mb-4 text-sm text-right text-gray-700 italic">
                {cls.teacher}
              </div>

              <div className="flex justify-between">
                {cls.status === "ended" ? (
                  <button className="bg-gray-200 text-gray-600 px-4 py-2 text-sm rounded" disabled>
                    Lesson Ended
                  </button>
                ) : (
                  <button className="bg-cyan-100 text-cyan-700 px-4 py-2 text-sm rounded flex items-center gap-2">
                    🔔 Remind Me
                  </button>
                )}
                <button className="border px-4 py-2 text-sm rounded">
                  View Series
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button
            onClick={() => scroll(cardRef, "right")}
            className="bg-cyan-500 p-2 rounded-full text-white"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveClasses;
