import { useState } from "react";

import "./App.css";
import SearchResultBox from "./components/bottomContent/searchResultBox";
import SearchInputBox from "./components/topContent/searchInputBox";
import { SERVER_URL } from "./config/constants";
import getMainColor from "./utils/getMainColor";

function App() {
  const [hexColorArray, setHexColorArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRgbData = async (url) => {
    setLoading(true);
    const encodedUrl = encodeURIComponent(checkUrl(url));
    const response = await fetch(`${SERVER_URL}/crawl/${encodedUrl}`);
    const jsonResponseData = await response.json();
    const mainColor = getMainColor(jsonResponseData["data"]) || [];

    setHexColorArray(mainColor);
    setLoading(false);
  };

  const checkUrl = (url) => {
    if (url.startsWith("www.")) {
      return `https://${url}`;
    } else if (url.startsWith("https")) {
      return url;
    }
  };

  const backgroundColor =
    hexColorArray.length > 0 ? hexColorArray[1].hex : "#2a2a2a";

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-8 md:h-12 bg-black text-white flex items-center p-4 z-50">
        <h1 className="text-lg font-bold">
          <img
            src="/tempWhitelogo.png"
            alt="Logo"
            className="w-6 ml-6 mb-1 mr-2 h-auto inline-block"
          />
          color-X
        </h1>
      </header>
      <div className="left-0">
        <div className="relative w-full h-24 mt-0 p-10">
          <div
            className="absolute inset-0 w-full"
            style={{
              background: `linear-gradient(to top, #121212, ${backgroundColor})`,
            }}
          ></div>
          <h2 className="relative text-white mt-2 text-4xl font-extrabold">
            대표 색상을 확인해보세요
          </h2>
        </div>
        <SearchInputBox onSearch={fetchRgbData} />
        <SearchResultBox
          hexColorArray={hexColorArray}
          loading={loading}
        />
      </div>
    </>
  );
}

export default App;
