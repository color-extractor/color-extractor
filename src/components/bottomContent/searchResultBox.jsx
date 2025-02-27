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
        <div className="flex bg-black h-80 p-2 mt-8 w-full overflow-hidden items-center">
          {hexColorArray.map((color, index) => (
            <ColorBox
              key={index}
              color={color}
              rank={index + 1}
            />
          ))}
        </div>
      )}
      {/* {hexColorArray && (
        <div className="flex bg-black h-80 p-2 mt-8 w-full overflow-hidden items-center">
          <div className="w-1/5 h-72 m-3 mb-3 bg-mainColor">
            <div className="w-40 h-44 m-3 mb-3  bg-white">
              <div className="w-1/5 h-20 m-3 text-white" />
            </div>
            <p className="text-white font-medium tracking-wide mt-4">#ffffff</p>
            <p className="text-white mt-4">RGB(255, 255, 255)</p>
          </div>
        </div>
      )} */}
    </>
  );
}

export default SearchResultBox;
