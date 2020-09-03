import React from "react";

export default function CardItem({ active }) {
  return (
    <svg
      viewBox="0 0 328 488"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svg"
    >
      <mask id="path-1-inside-1" fill="white">
        <path d="M311 0C320.389 0 328 7.61116 328 17V471C328 480.389 320.389 488 311 488H17C7.61115 488 0 480.389 0 471V46.3431L46.3431 0H311Z" />
      </mask>
      <path
        d="M311 0C320.389 0 328 7.61116 328 17V471C328 480.389 320.389 488 311 488H17C7.61115 488 0 480.389 0 471V46.3431L46.3431 0H311Z"
        stroke="#A1A1A1"
        strokeWidth="8"
        mask="url(#path-1-inside-1)"
        className={active ? "stroke_active" : "stroke"}
      />
    </svg>
  );
}
