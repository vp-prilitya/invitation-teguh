function ChatNavigation({ open, onClick, count }) {
  return (
    <div
      onClick={onClick}
      className={` ${
        open ? "right-6" : "-right-16"
      }  fixed bg-gold bottom-9 z-30 rounded-md p-1 shadow-xl shadow-gray-500 hover:cursor-pointer hover:bg-primary-900 duration-700`}
    >
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        className="w-11 text-white"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"
        />
      </svg>
      <p className="text-white text-xs text-center">{count}</p>
    </div>
  );
}

export default ChatNavigation;
