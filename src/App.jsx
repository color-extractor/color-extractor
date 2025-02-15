import { useState } from "react";

import "./App.css";
import SearchResultBox from "./components/bottomContent/searchResultBox";
import SearchInputBox from "./components/topContent/searchInputBox";
import { SERVER_URL } from "./constants/constants";

function App() {
  const [rgbData, setRgbData] = useState([]);

  const fetchRgbData = async (url) => {
    const encodedUrl = encodeURIComponent(url);
    const response = await fetch(`${SERVER_URL}/crawl/${encodedUrl}`);
    const data = await response.json();
    setRgbData(data);
  };

  // console.log(rgbData);
  return (
    <>
      <h2>Color Extractor</h2>
      <SearchInputBox onSearch={fetchRgbData} />
      <SearchResultBox rgbData={rgbData} />
    </>
  );
}

export default App;
