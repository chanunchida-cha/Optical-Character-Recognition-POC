import React, {  MouseEvent } from "react";
type Props = {
  title: string;
  type: string;
  image?: FormData;
  upload: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
};

function Button({ title, type, upload, image }: Props) {
  return (
    <button
      type="submit"
      className={`${
        type === "upload"
          ? "bg-button  w-[8rem]"
          : type === "add"
          ? "bg-button-add w-[5rem]"
          : "bg-button-delete w-[5rem]"
      } rounded-2xl text-sm text-white py-1 `}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        upload(e);
      }}
    >
      {title}
    </button>
  );
}

export default Button;
