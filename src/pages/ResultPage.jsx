// import SearchResultBox from "../components/bottomContent/SearchResultBox";
import SearchResultBox from "../components/bottomContent/searchResultBox";
import SearchInputBox from "../components/topContent/SearchInputBox";

function ResultPage({ inputUrl, hexColorArray, loading, onSearch }) {
  const getDomain = (url) => {
    const hostname = new URL(url).hostname;
    const domainData = hostname.replace(/^www\./, "").split(".");

    return domainData.length > 1 ? domainData[0] : hostname;
  };

  return (
    <div className="left-0">
      <div className="relative w-full h-24 mt-0 p-10 top-10">
        <h2 className="relative z-10 text-white mt-2 tracking-wide text-5xl font-bold">
          {hexColorArray.length > 0
            ? getDomain(inputUrl) + " 대표 색상이에요"
            : " 대표 색상을 추출하는 중이에요"}
        </h2>
      </div>
      <SearchInputBox
        onSearch={onSearch}
        loading={loading}
      />
      <SearchResultBox
        hexColorArray={hexColorArray}
        loading={loading}
      />
    </div>
  );
}

export default ResultPage;
