import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#978dc3] to-[#6b5ca5] text-white font-[Poppins]">
      <div className="text-center">
        <h1 className="mb-6 text-3xl font-bold drop-shadow">
          Value is : {count}
        </h1>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-gradient-to-tr from-[#8e2de2] to-[#4a00e0] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105 hover:from-[#4a00e0] hover:to-[#8e2de2] active:scale-95"
          >
            Increment
          </button>
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="bg-gradient-to-tr from-[#8e2de2] to-[#4a00e0] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105 hover:from-[#4a00e0] hover:to-[#8e2de2] active:scale-95"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
