import ColorBox from "./colorBox";

function SearchResultBox({ hexColorArray, loading }) {
  if (loading) {
    return (
      <div className="relative flex h-96 left-0 mt-20 overflow-hidden items-center justify-center bg-mainColor">
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="flex gap-4">
          {new Array(5).fill(null).map((_, index) => (
            <div
              key={index}
              className="w-48 h-64 m-3 bg-gray-300 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div>
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
            />
          ))}
        </div>
      )}
    </>
  );
}

export default SearchResultBox;
