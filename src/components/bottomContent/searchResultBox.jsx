import ColorBox from "./colorBox";

function SearchResultBox({ hexColorArray }) {
  return (
    <>
      <div className="flex bg-gray-800 h-40 p-2 mt-16 w-full overflow-hidden items-center">
        {hexColorArray &&
          hexColorArray.map((color, index) => (
            <ColorBox
              key={index}
              color={color}
              rank={index + 1}
            />
          ))}
      </div>
    </>
  );
}

export default SearchResultBox;
