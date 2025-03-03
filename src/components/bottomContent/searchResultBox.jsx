import { ClipLoader } from "react-spinners";

import ColorBox from "./colorBox";

function SearchResultBox({ hexColorArray, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <ClipLoader
          color="#2269ee"
          size={50}
        />
      </div>
    );
  }

  const backgroundGradientColor = {
    background: `linear-gradient(
    to right,
      #121212 5%,
      ${hexColorArray[0] ? hexColorArray[0].hex : "#121212"} 25%,
      ${hexColorArray[1] ? hexColorArray[1].hex : "#121212"} 40%,
      ${hexColorArray[2] ? hexColorArray[2].hex : "#121212"} 60%,
      ${hexColorArray[3] ? hexColorArray[3].hex : "#121212"} 80%,
      ${hexColorArray[4] ? hexColorArray[4].hex : "#121212"} 100%)`,
  };

  return (
    <>
      {hexColorArray && (
        <div
          className="relative flex h-96 left-0 mt-20 overflow-hidden items-center justify-center"
          style={backgroundGradientColor}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

          {hexColorArray.map((color, index) => (
            <ColorBox
              key={index}
              color={color}
              rank={index + 1}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default SearchResultBox;
