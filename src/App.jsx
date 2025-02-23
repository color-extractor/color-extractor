import { useState } from "react";

import "./App.css";
import SearchResultBox from "./components/bottomContent/searchResultBox";
import SearchInputBox from "./components/topContent/searchInputBox";
import { SERVER_URL } from "./constants/constants";
import getMainColor from "./utils/getMainColor";

function App() {
  const [hexColorArray, setHexColorArray] = useState([]);

  const fetchRgbData = async (url) => {
    const encodedUrl = encodeURIComponent(url);
    const response = await fetch(`${SERVER_URL}/crawl/${encodedUrl}`);
    const jsonResponseData = await response.json();
    const mainColor = getMainColor(jsonResponseData["data"]) || [];

    setHexColorArray(mainColor);
  };

  return (
    <>
      <h2>Color Extractor</h2>
      <SearchInputBox onSearch={fetchRgbData} />
      <SearchResultBox hexColorArray={hexColorArray} />
    </>
  );
}

export default App;
