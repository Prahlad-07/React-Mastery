
import React from 'react'
import tailwindcss from '@tailwindcss/vite'
const App = () => {
  return (
    <div>
      <button className='bg-red'>
        Get-Data
      </button>
    </div>
  )
}

export default App

// import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Navbar/>
//     </div>
//   );
// };

// export default App;





/* 
port { useState } from "react";
import Counter from "./Counter.jsx";
import FormHandling from "./FormHandling.jsx";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("home");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-tr from-[#978dc3] to-[#6b5ca5] text-white font-[Poppins]">
      {currentComponent === "home" && (
        <>
          <h1 className="text-3xl font-bold">Prahlad Yadav</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentComponent("counter")}
              className="bg-purple-600 px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition"
            >
              Go to Counter
            </button>
            <button
              onClick={() => setCurrentComponent("form")}
              className="bg-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Go to Form
            </button>
          </div>
        </>
      )}

      {currentComponent === "counter" && (
        <>
          <Counter />
          <button
            onClick={() => setCurrentComponent("home")}
            className="mt-6 bg-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Back to Home
          </button>
        </>
      )}

      {currentComponent === "form" && (
        <>
          <FormHandling />
          <button
            onClick={() => setCurrentComponent("home")}
            className="mt-6 bg-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
          >
            Back to Home
          </button>
        </>
      )}
    </div>
  );
};

export default App;
*/