// @flow

export const ShimmerCard = () => {
  return (
    <div className="flex flex-col p-2 bg-white shadow-2xl rounded-md w-96 animate-pulse">
      <div className="shrink-0 w-full h-64 bg-gray-400 "></div>
      <div className=" h-4 w-24 bg-gray-400 mt-2"></div>
      <div className=" h-4 w-12 bg-gray-400 mt-2"></div>
    </div>
  );
};
