import { useState } from "react";

function ColorBox({ color, rank }) {
  const [copy, setCopy] = useState(false);

  const copyClipboardText = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => setCopy(false), 1500);
  };

  return (
    <>
      <div
        className="w-1/5 h-24 m-3 bg-mainColor"
        style={{ backgroundColor: color.hex }}
        onClick={() => copyClipboardText(color.hex)}
        onTouchStart={() => copyClipboardText(color.hex)}
      >
        <div className="w-1/5 h-20 m-3 text-white" />
        <p className="text-white mt-2">
          {copy ? "copy" : `${rank}.${color.hex}(${color.size})`}
        </p>
      </div>
    </>
  );
}

export default ColorBox;
