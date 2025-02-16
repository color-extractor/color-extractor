function ColorBox({ hexCodeArray }) {
  return (
    <div className="flex bg-gray-800 p-4">
      {/* <div 
        className="w-20 h-10 bg-slate-300 rounded-lg"
        style={{ backgroundColor: hexCodeArray[100] }}
      />
      <div 
        className="w-20 h-10 bg-slate-300 rounded-lg"
        style={{ backgroundColor: hexCodeArray[200] }}
      />
      <div 
        className="w-20 h-10 bg-slate-300 rounded-lg"
        style={{ backgroundColor: hexCodeArray[300] }}
      />
      <div 
        className="w-20 h-10 bg-slate-300 rounded-lg"
        style={{ backgroundColor: hexCodeArray[400] }}
      />
      <div 
        className="w-20 h-10 bg-slate-300 rounded-lg"
        style={{ backgroundColor: hexCodeArray[500] }}
      /> */}

      {hexCodeArray.map((hexCode, index) => (
        // <ColorBox key={index} hexCode={hexCode} />
        <div
          className="w-20 h-10 rounded-lg"
          key={index}
          style={{ backgroundColor: hexCode }}
        />
      ))}
    </div>
  );
}

export default ColorBox;
