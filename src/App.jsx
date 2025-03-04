import { useState } from "react";

import "./App.css";
import SearchResultBox from "./components/bottomContent/searchResultBox";
import SearchInputBox from "./components/topContent/searchInputBox";
import getMainColor from "./utils/getMainColor";

function App() {
  const [hexColorArray, setHexColorArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputUrl, setInputUrl] = useState("");

  const fetchRgbData = async (url) => {
    setLoading(true);
    setHexColorArray([]);
    setInputUrl(checkUrl(url));

    const encodedUrl = encodeURIComponent(checkUrl(url));
    const response = await fetch(`/api/crawl/${encodedUrl}`);
    const jsonResponseData = await response.json();
    const mainColor = getMainColor(jsonResponseData["data"]) || [];

    setHexColorArray(mainColor);
    setLoading(false);
  };

  const checkUrl = (url) => {
    if (!url) {
      return "";
    }
    if (url.startsWith("https://") || url.startsWith("http://")) {
      return url;
    }
    if (url.startsWith("www.")) {
      return `https://${url}`;
    }
    return `https://www.${url}`;
  };

  const topBackgroundColor =
    loading || hexColorArray.length === 0 ? "#2a2a2a" : hexColorArray[0].hex;

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
              background: `linear-gradient(to top, #121212, ${topBackgroundColor})`,
            }}
          ></div>
          <h2 className="relative text-white mt-2 text-5xl font-extrabold">
            {hexColorArray.length > 0
              ? getDomain(inputUrl)
              : "대표 색상을 확인해보세요"}
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

function getDomain(url) {
  const hostname = new URL(url).hostname;
  const domainData = hostname.replace(/^www\./, "").split(".");

  return domainData.length > 1 ? domainData[0] : hostname;
}

export default App;
