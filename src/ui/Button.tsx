import React, { ChangeEvent } from "react";
type Props = {
  title: string;
  type: string;
  image?:FormData
  upload?: (image: FormData, e: ChangeEvent<HTMLInputElement>) => Promise<void>;
};

function Button({ title, type,upload,image }: Props) {
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
