export default function GameResult({
  time,
  handleRefresh,
  flip,
  selected,
  handleChange,
  options,
}) {
  return (
    <div className="mt-5 flex justify-between text-white text-center select-none">
      <div className="w-[25%] border-r border-white">
        <select
          value={selected}
          onChange={handleChange}
          className=" text-black w-[80%]"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <p className="w-[25%] border-r border-white">Time: {time}s</p>
      <p className="w-[25%]  border-r border-white">
        Flips: {Number.isInteger(flip) ? flip : flip - 0.5}
      </p>
      <button className="w-[25%]" onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
}
