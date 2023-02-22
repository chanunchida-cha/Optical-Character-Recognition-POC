import FormMed from "@/components/FormMed";

import React, { ReactElement, useEffect, useState } from "react";

interface Props {}

function Index({}: Props): ReactElement {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();

  //resizer image
  // useEffect(() => {
  //     console.log(image);
  //     if (!image) return;
  //     resizer(image).then((imgResize) => {
  //         console.log("imgResize", imgResize);
  //         ///do somthing with file
  //     });
  //     if (!image) return;
  // }, [image]);

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
