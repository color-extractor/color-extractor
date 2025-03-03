import { useState } from "react";

function ColorBox({ color, rank }) {
  const [copy, setCopy] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const copyClipboardText = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => setCopy(false), 1500);
  };

  return (
    <>
      <div
        className="group relative w-48 h-64 m-6 flex items-center justify-center perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? "rotate-180" : ""}`}
        >
          <div
            className="absolute w-full h-full shadow-2xl flex items-center justify-center rounded-2xl backface-hidden"
            style={{ backgroundColor: `${color.hex}` }}
          ></div>
          <div className="absolute w-full h-full bg-mainColor flex items-center justify-center rounded-2xl rotate-180 backface-hidden">
            <div
              className="w-full h-40 m-3 mb-8 flex items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${color.hex}` }}
              onClick={() => copyClipboardText(color.hex)}
              onTouchStart={() => copyClipboardText(color.hex)}
            >
              <p className="text-white mt-48">
                {copy ? "copy" : `${rank}.${color.hex}(${color.size})`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorBox;
