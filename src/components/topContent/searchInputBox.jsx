import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
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
    <div className="flex items-center h-14 rounded-lg gap-2 z-10 relative bg-white">
      <input
        type="text"
        className="flex-1 ml-2 text-black outline-none text-xl"
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
        className="p-4"
        onClick={handleSearch}
      >
        <MagnifyingGlassIcon className="w-6 h-6 text-mainColor" />
      </button>
    </div>
  );
}

export default SearchInputBox;
