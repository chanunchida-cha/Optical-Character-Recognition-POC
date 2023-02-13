import React from "react";
type Props = {
    title: string;
    type: string;
    onClick?: () => {};
    onClickToCheck?: (imagePath: File, pharmacies: string[]) => Promise<string>;
    pharmacies?: string[];
    imagePath?: File;
};

function Button({ title, type, pharmacies, onClickToCheck, imagePath }: Props) {
    return (
        <button
            className={`${
                type === "upload"
                    ? "bg-button  w-[8rem]"
                    : type === "add"
                    ? "bg-button-add w-[5rem]"
                    : "bg-button-delete w-[5rem]"
            } rounded-2xl text-sm text-white py-1 `}
            onClick={() => {
                if (onClickToCheck && pharmacies && imagePath) {
                    onClickToCheck(imagePath, pharmacies);
                }
            }}
        >
            {title}
        </button>
    );
}

export default Button;
