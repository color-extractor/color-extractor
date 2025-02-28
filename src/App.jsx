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

  return (
    <>
      {/* <header className="text-white w-full bg-white">header</header> */}
      <h2 className="text-white mt-2 text-3xl font-semibold">
        대표 색상을 확인해보세요
      </h2>
      <SearchInputBox onSearch={fetchRgbData} />
      <SearchResultBox
        hexColorArray={hexColorArray}
        loading={loading}
      />
    </>
  );
}

export default App;
