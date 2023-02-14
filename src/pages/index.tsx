import FormMed from "@/components/FormMed";
import BoxLayOut from "@/layouts/BoxLayOut";
import { findPharmacy } from "@/utils/orc";
import React, { ReactElement, useState } from "react";
interface Props {}

const tesseract = require("tesseract.js");

const image = "./img/2.jpg";
var pharmacies = [
    "Walgreens",
    "CVS Pharmacy",
    "Rite Aid",
    "Walmart Pharmacy",
    "Duane Reade",
    "Kroger Pharmacy",
    "Safeway Pharmacy",
    "Target Pharmacy",
    "Albertsons Pharmacy",
    "trazodone",
    "dobutamine",
    "propranolol",
];

function Index({}: Props): ReactElement {
    const [image, setImage] = useState<File>();
    const [preview, setPreview] = useState<string>();
    const [file, setFile] = useState<File>();
    const [data, setData] = useState<[] | null>();
    const [pending, setPending] = useState<boolean>(false);
    return (
        <div className=" mx-5 sm:mx-auto sm:w-2/3 mt-6  object-none">
            <FormMed
                image={image!}
                preview={preview!}
                setPreview={setPreview}
                setImage={setImage}
                onClickToCheck={findPharmacy}
                pharmacies={pharmacies}
            />
        </div>
    );
}

export default Index;
