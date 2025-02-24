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
  return (
    <>
      {hexColorArray && (
        <div className="flex bg-gray-800 h-40 p-2 mt-16 w-full overflow-hidden items-center">
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
