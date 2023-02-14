import { log } from "console";
import { getBase64 } from "./convertImageToBase64";
import Tesseract from "tesseract.js";
// const tesseract = require("tesseract.js");






export async function findPharmacy(imageFile: File, pharmacies: string[]): Promise<string> {
    let base64= await getBase64(imageFile)
    // console.log(base64);
    base64=base64.split(",")[1]
    
    let imageBuffer = Buffer.from(base64 as string, "base64");
    const result = await Tesseract.recognize(imageBuffer);
    // console.log(result);
    
    const text = result.data.text.toLowerCase().replace(/[^\w\s]/gi, "");
    console.log("Log[info] ORC:",text);
    let foundPharmacy = "";
    for (const pharmacy of pharmacies) {
        if (text.includes(pharmacy.toLowerCase())) {
            
            foundPharmacy = pharmacy;
            console.log("Log[info] found:",foundPharmacy);
            
            break;
        }
    }
    return foundPharmacy;
    // return ""
}