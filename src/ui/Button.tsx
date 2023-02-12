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
          ? "bg-button"
          : type === "add"
          ? "bg-button-add"
          : "bg-button-delete"
      } rounded-2xl text-white py-1 w-[8rem] `}
    >
      {title}
    </button>
  );
}

export default Button;
