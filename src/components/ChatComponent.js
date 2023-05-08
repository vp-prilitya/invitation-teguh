import BubbleChat from "./BubbleChat";

function ChatComponent({
  open,
  openChat,
  onClick,
  dataChat,
  form,
  onSubmit,
  hadndleChange,
}) {
  return (
    <div
      className={`${
        openChat ? "h-screen backdrop-blur-sm" : "h-0"
      } fixed z-30 w-screen bg-blue-900 bg-opacity-10`}
    >
      <div
        className={` ${
          openChat ? "h-[90%]" : "h-0 -bottom-10"
        } fixed flex flex-col w-screen bottom-0 bg-white z-40 shadow-2xl rounded-t-xl duration-500 ease-in-out text-sky-900 md:w-96 md:right-6 `}
      >
        <div className="flex items-center justify-between p-5">
          <div>
            <h1 className="font-bold font-spaceMono text-lg uppercase">
              Ucapkan Sesuatu
            </h1>
            <p className="text-sm text-gray-400 font-light">
              Berikan Ucapan dan Doa Restu
            </p>
          </div>
          <button
            onClick={onClick}
            className="bg-grayLight hover:bg-grayDark h-fit hover:cursor-pointer rounded-full p-1 duration-200"
          >
            <svg
              fill="none"
              stroke="currentColor"
              className="w-7 text-white"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-5 border-b border-gray-100">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={hadndleChange}
            className="bg-white border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-red-500 focus:border-red-500"
            placeholder="Nama Lengkap"
          />
          <div className="flex justify-between gap-3 items-center">
            <textarea
              className="bg-white border mt-3 w-full h-20 text-sm rounded-lg block p-2.5"
              placeholder="Tulis ucapan"
              name="message"
              value={form.message}
              onChange={hadndleChange}
            ></textarea>
            <button
              type="submit"
              onClick={onSubmit}
              className="bg-blue-700 h-full p-2 rounded-full hover:bg-blue-800 duration-300"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="h-full rounded-md overflow-auto space-y-2 p-5">
          {dataChat.map((data, index) => {
            return (
              <BubbleChat key={index} name={data.name} message={data.message} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
