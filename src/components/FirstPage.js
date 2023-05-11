import ArrowBottom from "./ArrowBottom";

function FirstPage({ open, onClick, to }) {
  return (
    <div
      className={` ${
        open ? "h-0 backdrop-blur-none" : "h-screen backdrop-blur-sm"
      } fixed flex justify-center w-screen overflow-hidden bg-cokelat bg-opacity-20 ease-in-out duration-700 z-50 `}
      onClick={open ? onClick : null}
    >
      <div
        className={` relative flex flex-col justify-center items-center my-auto rounded-lg text-stone-300`}
      >
        <h1 className="text-center font-spaceMono text-2xl md:text-4xl font-semibold">
          THE WEDDING
        </h1>
        <h1 className="text-center font-spaceMono font-light mb-9">
          CELEBRATION
        </h1>
        <div className="relative w-40 md:w-[100%] bg-paint bg-no-repeat bg-center bg-contain">
          <h1 className="font-andasia text-left text-[3rem] md:text-[5rem] md:font-normal">
            Teguh
          </h1>
          <h1 className="text-right font-andasia text-[3rem] md:text-[5rem] md:font-normal">
            Aisyah
          </h1>
          <span className="font-andasia absolute top-[37%] right-[40%] md:text-3xl">
            &
          </span>
        </div>
        <div className="flex justify-center items-center space-x-2 mt-5">
          <p className="font-spaceMonon font-bold">JUNI</p>
          <div className="bg-grayDark rounded-full p-2">
            <span className="text-3xl text-blue-50 font-bold font-spaceMono">
              23
            </span>
          </div>

          <div className="">
            <p className="font-spaceMono font-bold">2023</p>
          </div>
        </div>
        <p className="font-spaceMono mt-5 text-sm">
          Kepada Bapak/Ibu/Saudara/i
        </p>
        <h1 className="text-xl text-stone-300 font-bold font-spaceMono uppercase mt-2">
          {to && atob(to)}
        </h1>
        <button
          onClick={onClick}
          className="flex bg-primary px-5 items-center rounded-lg hover:bg-primary-900 text-white py-1 mt-10 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="w-5 h-5 mr-1"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Buka Undangan
        </button>
      </div>
      {/* <ArrowBottom
        className={`${
          open ? "opacity-[100%]" : "opacity-0"
        } text-slate-300 w-10`}
      /> */}
      <div
        className={` absolute bg-blue-700 right-[50%] -bottom-6 z-30 rounded-b-full opacity-50`}
      >
        <ArrowBottom className="w-6 text-white" />
      </div>
    </div>
  );
}

export default FirstPage;
