import Button from "@/ui/Button";
import { previewImage } from "@/utils/previewImage";
import React, { ChangeEvent } from "react";

type Props = {
  image: File;
  preview: string;
  icon: React.ReactNode;
  setPreview: (objectUrl: string) => void;
  setImage: (file: File) => void;
};

const BoxLayOut = ({ preview, image, icon, setPreview, setImage }: Props) => {
  return (
    <div className="flex flex-col justify-around ">
      <div className="shrink w-full  bg-box mb-2 px-[1.8rem] py-[2.3rem] h-[21rem] sm:h-[40rem] sm:px-[6rem] sm:py-[3rem] rounded-xl shadow-xl text-[1rem] sm:text-[1.3rem] border border-border-box ">
        <div className="mb-2">
          <div className="flex justify-center text-title-text ">
            Upload image of medicine label
          </div>
          <div className="flex justify-center text-title-text ">
            or input your medicine name.
          </div>
        </div>
        <div className=" flex justify-center  ">
          <div className="flex justify-center items-center mx-auto border-dashed border-2 rounded-xl border-border-box w-[9rem] h-[6rem] sm:w-[20rem] sm:h-[13rem]">
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
                <div className="flex justify-center">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer  px-2 py-1 text-text-upload  rounded-md "
                  >
                    <span>Browse</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={async (e) => {
                        previewImage(e, setPreview, setImage, image!);
                      }}
                      required
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <Button title="Upload" type="upload" />
        </div>
        <div>
          <div className="text-title-text mt-6">Medicine name.</div>
          <div className="flex flex-row">
            <div className="w-[14rem] sm:w-[20rem] ">
              <input
                placeholder="Input your medicine name. "
                className="w-full  border border-border-box rounded-3xl py-1 px-2"
              />
            </div>
            <div>aa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxLayOut;
