import React from "react";

const Titlebar = ({contents}) => {
  return (
    <div className="relative titlebar flex justify-between items-center h-[45px] mb-0 w-full bg-bg1">
      <div className="bars flex block flex-col items-center text-main">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="title font-sans uppercase tracking-[4px] px-2 text-main">{contents}</div>
      <div className="bars flex block flex-col items-center text-main">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
};

export default Titlebar;
