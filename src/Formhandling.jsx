import React, { useState } from "react";

const Formhandling = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Radhe Radhe, ${name}! 👋`);
    setName("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col gap-4 w-80"
      >
        <h2 className="text-xl font-semibold text-center">Form Handling</h2>
        <input
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formhandling;   
