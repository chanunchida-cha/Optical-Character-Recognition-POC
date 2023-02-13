import React from "react";
type Props = {
  title: string;
  type: string;
  onClick?: () => {};
};

function Button({ title, type }: Props) {
  return (
    <button
      className={`${
        type === "upload"
          ? "bg-button  w-[8rem]"
          : type === "add"
          ? "bg-button-add w-[5rem]"
          : "bg-button-delete w-[5rem]"
      } rounded-2xl text-sm text-white py-1 `}
    >
      {title}
    </button>
  );
}

export default Button;
