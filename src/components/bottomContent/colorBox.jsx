import { useState } from "react";

function ColorBox({ color, isLarge = false }) {
  const [copy, setCopy] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const copyClipboardText = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => setCopy(false), 1500);
  };

  const boxSize = isLarge
    ? "w-[20rem] h-[24rem] md:w-80 md:h-96 xl:w-80 xl:h-96"
    : "w-48 h-64";

  return (
    <>
      <div
        className={`group relative ${boxSize} m-6 flex items-center justify-center perspective-1000`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onTouchStart={() => setIsFlipped((prev) => !prev)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? "rotate-180" : ""}`}
        >
          <div
            className="absolute w-full h-full shadow-2xl flex items-center justify-center rounded-2xl backface-hidden"
            style={{ backgroundColor: `${color.hex}` }}
          ></div>

          <div className="absolute w-full h-full bg-mainColor flex items-center justify-center rounded-2xl rotate-180 backface-hidden">
            <div className="w-full h-full px-3 py-3 flex flex-col justify-between rounded-2xl">
              <div
                className="flex-1 rounded-2xl"
                style={{ backgroundColor: `${color.hex}` }}
                onClick={() => copyClipboardText(color.hex)}
                onTouchStart={() => copyClipboardText(color.hex)}
              ></div>
              <p className="text-white text-lg font-semibold text-center py-2">
                {copy ? "copy" : `${color.hex} (${color.size})`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorBox;
