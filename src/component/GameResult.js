export default function GameResult({ time, handleRefresh, flip }) {
  return (
    <div className="mt-5 flex justify-between text-white text-center select-none">
      <p className="w-[33%] border-r border-white">Time: {time}s</p>
      <p className="w-[33%]  border-r border-white">
        Flips: {Number.isInteger(flip) ? flip : flip - 0.5}
      </p>
      <button className="w-[33%]" onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
}
