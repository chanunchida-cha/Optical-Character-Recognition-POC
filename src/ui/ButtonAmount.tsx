import React from "react";

function ButtonAmount() {
  return (
    <div className="flex flex-row">
      <div className="">
        <button className="text-text-button-plus-minus border px-2 rounded-l-xl">
          -
        </button>
      </div>
      <div className="basis-8">
        <input className="border w-full " />
      </div>
      <div className="">
        <button className="text-text-button-plus-minus border px-2 rounded-r-xl">
          +
        </button>
      </div>
    </div>
  );
}

export default ButtonAmount;
