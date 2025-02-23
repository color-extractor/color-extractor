import { useState } from "react";

function SearchInputBox({ onSearch }) {
  const [url, setUrl] = useState("");

  const handleSearch = async () => {
    if (url.trim() === "") {
      return;
    }
    await onSearch(url);
  };

  const handleInputUrl = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
    setUrl(event.currentTarget.value);
  };

  return (
    <div className="flex items-center gap-2 bg-gray-300">
      <input
        type="text"
        className="flex-1 bg-gray-300 ml-2 text-black outline-none"
        value={url}
        onChange={(event) => {
          handleInputUrl(event);
        }}
        onKeyDown={(event) => {
          handleInputUrl(event);
        }}
        placeholder="url을 입력해주세요"
      />
      <button
        className="bg-black p-2 text-white"
        onClick={handleSearch}
      >
        search
      </button>
    </div>
  );
}

export default SearchInputBox;
