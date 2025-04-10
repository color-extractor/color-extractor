import SearchInputBox from "../components/topContent/SearchInputBox";

function HomePage({ onSearch, loading }) {
  return (
    <div className="left-0">
      <div className="relative w-full h-24 mt-0 p-10 top-10">
        <h2 className="relative z-10 text-white mt-2 tracking-wide text-5xl font-bold">
          대표 색상을 확인해보세요
        </h2>
      </div>
      <SearchInputBox
        onSearch={onSearch}
        loading={loading}
      />
    </div>
  );
}

export default HomePage;
