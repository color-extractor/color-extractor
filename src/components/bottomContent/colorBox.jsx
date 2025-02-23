function ColorBox({ color, rank }) {
  return (
    <>
      <div
        className="w-1/5 h-24 m-3 bg-slate-300"
        style={{ backgroundColor: color.hex }}
      >
        <div className="w-1/5 h-20 m-3" />
        <p className="text-white mt-2">
          {rank}.{color.hex}({color.size})
        </p>
      </div>
    </>
  );
}

export default ColorBox;
