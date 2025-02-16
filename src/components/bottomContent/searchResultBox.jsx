import ColorBox from "./colorBox";

function SearchResultBox({ rgbData }) {
  const rgbToHex = (rgb) => {
    const conversionProcess = (i) => {
      const hex = parseInt(i).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${conversionProcess(rgb[0])}${conversionProcess(rgb[1])}${conversionProcess(rgb[2])}`;
  };

  const hexCodeArray = rgbData["data"] ? rgbData["data"].map(rgbToHex) : [];

  return (
    <>
      <div className="p-4 m-10 bg-gray-500 items-center">
        <ColorBox hexCodeArray={hexCodeArray} />
      </div>
    </>
  );
}

export default SearchResultBox;
