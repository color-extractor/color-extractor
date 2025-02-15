function SearchResultBox(rgbData) {
  return (
    <div className="bg-gray-500 p-8 m-10">
      {rgbData &&
        Object.keys(rgbData).map((color, index) => (
          <ul key={index}>
            {Object.keys(color).map((col, key) => (
              <span key={key}>
                {Array.from(col).map((c, idx) => {
                  return <div key={idx}>{"rgbArray: " + c[idx]}</div>;
                })}
              </span>
            ))}
          </ul>
        ))}
    </div>
  );
}

export default SearchResultBox;
