function Skeleton() {
  return (
    <div className="relative flex h-96 left-0 mt-20 z-20 overflow-hidden items-center justify-center">
      <div className="flex gap-4">
        {new Array(5).fill(null).map((_, index) => (
          <div
            key={index}
            className="w-48 h-64 m-3 bg-mainColor rounded-2xl animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Skeleton;
