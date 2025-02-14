function SearchInputBox() {
  return (
    <div className="flex items-center gap-2 bg-gray-300">
      <input
        type="text"
        className="flex-1 bg-gray-300 text-black outline-none"
      />
      <button className="bg-black p-2 text-white">search</button>
    </div>
  );
}

export default SearchInputBox;
