import Button from "@/ui/Button";
import ButtonAmount from "@/ui/ButtonAmount";
import { previewImage } from "@/utils/previewImage";
import React, { ChangeEvent } from "react";

type Props = {
  image: File;
  preview: string;
  icon: React.ReactNode;
  buttonUpload: React.ReactNode;
  buttonDelete: React.ReactNode;
  setPreview: (objectUrl: string) => void;
  setImage: (file: File) => void;
};

const BoxLayout = ({
  preview,
  image,
  icon,
  setPreview,
  setImage,
  buttonDelete,
  buttonUpload,
}: Props) => {
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageDataUrl = event.target?.result;
      const imageElement = document.createElement("img");
      const imageString = imageDataUrl?.toString();
      imageElement.src = imageString!;

      const specifiedFrame = document.getElementById("specified-frame");
      specifiedFrame?.appendChild(imageElement);
    };
    reader.readAsDataURL(file!);
  };

  return (
    <div className="flex flex-col justify-around ">
      <div className="shrink w-full  bg-box mb-2 px-[1rem] py-[2.3rem] h-fit sm:h-[40rem] sm:px-[6rem] sm:py-[3rem] rounded-xl shadow-xl text-[1rem] sm:text-[1.3rem] border border-border-box ">
        <div className="mb-2">
          <div className="flex justify-center text-title-text ">
            Upload image of medicine label
          </div>
        </div>
        <div className=" flex  justify-center  ">
          <div className="flex p-5 flex-col justify-center items-center mx-auto border-dashed border-2 rounded-xl border-border-box w-[10rem] h-[9rem] sm:w-[20rem] sm:h-[13rem]">
            {image ? (
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={preview}
                />
              </div>
            ) : (
              <div>
                <div className="flex justify-center">{icon}</div>
              </div>
            )}
            <div className="flex justify-center">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer  px-2 py-1 text-text-upload  rounded-md  text-sm"
              >
                <span>Browse</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={(e) => {
                    handleFileSelect(e);
                    // previewImage(e, setPreview, setImage, image!);
                  }}
                  required
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2">{buttonUpload}</div>
        <div>
          <div className="text-title-text mt-6">Medicine name.</div>
          <div className="flex flex-row">
            <div className="w-[15rem] sm:w-[20rem] ">
              <input
                placeholder="Input your medicine name. "
                className="w-full text-sm sm:text-[1rem]  border border-border-box rounded-3xl py-1 sm:py-2 px-2"
              />
            </div>
            <div className="w-[6rem] sm:w-[10rem] ml-2 sm:ml-2">
              <ButtonAmount />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxLayout;
