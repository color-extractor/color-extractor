import { useState } from "react";

import ColorBox from "../components/bottomContent/colorBox";
import SearchInputBox from "../components/topContent/searchInputBox";

function getRandomHex() {
  const hex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${hex}`;
}

function HomePage({ onSearch, loading }) {
  const [mainColor, setMainColor] = useState(() => ({
    hex: getRandomHex(),
    size: 0,
  }));

  const handleHover = () => {
    const newHex = getRandomHex();
    setMainColor({ hex: newHex, size: 0 });
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between min-h-screen px-6 sm:px-10 md:px-24 lg:px-32 xl:px-48 2xl:px-64 py-12 bg-black text-white">
      <div className="flex-1 h-full flex flex-col mt-10 md:mt-28 justify-center md:text-left gap-3 max-w-xl">
        <h1 className="text-3xl md:text-6xl xl:text-7xl font-bold tracking-wide md:leading-tight xl:leading-tight">
          브랜드의
          <br />
          대표 색상을
          <br />
          확인해보세요
        </h1>
        <p className="text-base mt-3 sm:text-xl text-white">
          URL만 입력하면, 브랜드의 색상을 바로 확인할 수 있어요.
        </p>
        <p className="text-base sm:text-lg text-gray-300">
          브랜드의 대표 색상을 빠르게 파악하고, 디자인이나 마케팅에
          활용해보세요.
        </p>
        <div className="md:mt-2 md:w-full">
          <SearchInputBox
            onSearch={onSearch}
            loading={loading}
          />
        </div>
      </div>

      <div className="flex-1 h-full mt-16 md:mt-28 mb-48 flex justify-center md:justify-end">
        <div
          onMouseEnter={handleHover}
          onTouchStart={handleHover}
        >
          <ColorBox
            color={mainColor}
            isLarge={true}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
