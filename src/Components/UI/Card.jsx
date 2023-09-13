import React from "react";

const Card = ({ children, width, margin }) => {
  return (
    <div
      className={`rounded-2xl border-[#BE123CB2] border bg-[#fcf5f7] p-4 ${width} ${margin}`}
    >
      {children}
    </div>
  );
};

export default Card;
