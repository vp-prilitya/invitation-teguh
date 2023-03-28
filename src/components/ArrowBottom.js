import React from "react";

function ArrowBottom(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={props.className}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      ></path>
    </svg>
  );
}

export default ArrowBottom;
