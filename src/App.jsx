import "./App.css";
import SearchResultBox from "./components/bottomContent/searchResultBox";
import SearchInputBox from "./components/topContent/searchInputBox";

function App() {
  return (
    <>
      <h2>Color Extractor</h2>
      <SearchInputBox />
      <SearchResultBox />
    </>
  );
}

export default App;
