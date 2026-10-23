import { useState } from "react";

const BGChanger2 = () => {
    
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'magenta', 'lime'];
    
    //const [backgroundColor, setBackgroundColor] = useState(colors[Math.floor(Math.random() * colors.length)]);
    const [backgroundColor, setBackgroundColor] = useState(colors[0]);

    return (
        <>
        <div className="w-full h-screen duration-100 flex flex-row items-center gap-10 justify-between px-5" style={{backgroundColor: backgroundColor}}>
            <div className="w-full flex justify-center items-center">
                <p>
                    Current color: <strong>{backgroundColor.charAt(0).toUpperCase() + backgroundColor.slice(1).toLowerCase()}</strong>
                </p>
            </div>
            

            <div className="inset-x-0 flex justify-end right-5 text-white">
                <div className="color-list flex justify-center gap-4 items-center flex-col bg-white text-black px-4 py-4 rounded-4xl">
                    {colors.map((color) => (
                        <button key={color} className="color-btn px-4 py-2 rounded-4xl cursor-pointer" style={{backgroundColor: color}} onClick={() => setBackgroundColor(color)}>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </button>                      
                    ))}
                </div>

            </div>
        </div>
        </>
    );
};

export default BGChanger2;
