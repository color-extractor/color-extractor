import Skeleton from "../UI/Skeleton";
import ColorBox from "./colorBox";

function SearchResultBox({ hexColorArray, loading }) {
  if (loading) {
    return <Skeleton />;
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
          className="fixed top-10 left-0 w-screen h-screen z-0 flex items-center justify-center"
          style={backgroundGradientColor}
        >
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

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
