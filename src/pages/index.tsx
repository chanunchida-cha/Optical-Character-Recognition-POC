import FormMed from "@/components/FormMed";
import BoxLayOut from "@/layouts/BoxLayout";
import React, { ReactElement, useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";

interface Props {}

function Index({}: Props): ReactElement {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();

  const resizer = async (file: File) => {
    const resizeFile = new Promise((resolve, reject) => {
      Resizer.imageFileResizer(
        file,
        500, ////width
        500, /// height
        "WEBP",
        70, /// quality
        0, // Rotate degree
        (uri: any) => {
          resolve(uri);
        },
        "file"
      );
    }).then((res) => res);
    const resizeFiled = await Promise.all([resizeFile]).then((res) => res[0]);

    return resizeFiled;
  };

  useEffect(() => {
    // console.log(image);
    if (!image) return;
    resizer(image).then((imgResize) => {
      console.log("imgResize", imgResize);
      ///do somthing with file
    });
    if (!image) return;
  }, [image]);

  return (
    <div className=" mx-5 sm:mx-auto sm:w-2/3 mt-6  object-none">
      <FormMed
        image={image!}
        preview={preview!}
        setPreview={setPreview}
        setImage={setImage}
      />
    </div>
  );
}

export default Index;
