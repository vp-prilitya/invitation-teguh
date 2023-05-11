import avatarColor from "../configs/utils";

function BubbleChat({ name, message, time }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <button
        className={`${
          avatarColor[name[0].toUpperCase()]
        } text-white text-sm rounded-full p-1 justify-center inline-flex items-center w-6 h-6 font-bold uppercase`}
      >
        {name[0]}
      </button>
      <div className="flex flex-col w-fit bg-grayInput text-sm rounded-t-xl rounded-br-xl p-2.5">
        <h1 className="mb-2 font-bold text-xs text-grayDark">{name}</h1>
        <div className="h-full">{message}</div>
        <span className="text-right text-[10px] text-gray-400">{time}</span>
      </div>
    </div>
  );
}

export default BubbleChat;
