import { useState } from "react";

const BGChanger3 = () => {
    
    const colors = [
        "#ef4444",
        "#f97316",
        "#eab308",
        "#22c55e",
        "#06b6d4",
        "#3b82f6",
        "#8b5cf6",
        "#ec4899",
    ];    
   
    const defaultColor = "#f8fafc";
    const [backgroundColor, setBackgroundColor] = useState(defaultColor);

    return (
      <>
        <div
          className="w-full h-screen duration-100 flex flex-col items-center gap-10 justify-center   px-5"
          style={{ backgroundColor: backgroundColor }}
        >
            <h1 className='text-4xl'>Background Color Changer With Color Picker</h1>

            <div className="w-full flex justify-center items-center">
                <p>
                    Current color: <strong>{backgroundColor}</strong>
                </p>
            </div>

            <div className="inset-x-0 flex flex-col justify-end">
            
                <div className="custom-picker">
                    <label htmlFor="colorPicker">Choose a custom color:</label>

                    <input
                    id="colorPicker"
                    type="color"
                    value={backgroundColor}
                    onChange={(event) => setBackgroundColor(event.target.value)}
                    />

                    <span>{backgroundColor}</span>
                </div>
                <br />

                <button
                    className="reset-button flex-initial border-2 border-black px-4 py-4 rounded-2xl cursor-pointer shadow-lg"
                    onClick={() => setBackgroundColor(defaultColor)}
                >
                    Reset Background
                </button>

            </div>
        </div>
      </>
    );
};

export default BGChanger3;
