import moment from "moment";
import BubbleChat from "./BubbleChat";

import Lottie from "lottie-react";
import animationData from "../assets/lottie/chat.json";

function ChatComponent({
  open,
  openChat,
  onClick,
  dataChat,
  form,
  onSubmit,
  hadndleChange,
  setOffset,
  loading,
  sendLoading,
  dataLength,
}) {
  function dateShow(index) {
    if (index === 0) {
      return true;
    } else {
      if (
        moment(dataChat[index].createdAt).format("L") ===
        moment(dataChat[index - 1].createdAt).format("L")
      ) {
        return false;
      } else {
        return true;
      }
    }
  }

  function time(date) {
    const now = Date.now();

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (
      moment(now).format("DD/MM/YYYY") === moment(date).format("DD/MM/YYYY")
    ) {
      return "hari ini";
    } else if (
      moment(yesterday).format("DD/MM/YYYY") ===
      moment(date).format("DD/MM/YYYY")
    ) {
      return "kemaren";
    }

    return moment(date).format("DD/MM/YYYY");
  }

  function onScroll(e) {
    const clientHeight = e.target.clientHeight;
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;

    if (scrollTop + clientHeight >= scrollHeight) {
      if (dataChat.length < dataLength) {
        setOffset();
      }
    }
  }

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
            className=" border text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Nama Lengkap"
          />
          <div className="flex justify-between gap-3 items-center">
            <textarea
              className=" border mt-3 w-full h-16 text-sm rounded-lg block p-2.5"
              placeholder="Tulis ucapan"
              name="message"
              value={form.message}
              onChange={hadndleChange}
            ></textarea>
            <button
              type="submit"
              disabled={form.message === ""}
              onClick={onSubmit}
              className="bg-gold h-full p-2 rounded-full hover:bg-gold duration-300 disabled:bg-gold disabled:opacity-70"
            >
              {sendLoading ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-6 h-6 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {dataChat.length === 0 ? (
          <div>
            <Lottie animationData={animationData} />
          </div>
        ) : (
          <div
            onScroll={onScroll}
            className="h-full rounded-md overflow-auto  px-5 pt-2 pb-3"
          >
            {dataChat.map((data, index) => {
              return (
                <span key={index}>
                  {dateShow(index) && (
                    <div className="mx-auto mb-2 shadow-md bg-gray-400 sticky top-0 text-white text-xs rounded-full px-2 w-fit">
                      {time(data.createdAt)}
                    </div>
                  )}

                  <BubbleChat
                    name={data.name}
                    message={data.message}
                    time={moment(data.createdAt).format("HH:mm")}
                  />
                </span>
              );
            })}
            {loading && (
              <div className="flex justify-center">
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-7 h-7 text-gold animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatComponent;
