import { useState } from "react";

function BGChanger1() {

    const [color, setColor] = useState('purple')

  return (
    <>
      <div
        className="w-full h-screen duration-100"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-8 inset-x-0 flex justify-center text-white">
          <div className="flex justify-center gap-2 items-center bg-white text-black px-4 py-2 rounded-3xl">
            <button
              className="px-4 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="px-4 py-1 rounded-2xl text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="px-4 py-1 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BGChanger1;
