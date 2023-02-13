import { log } from "console";
import { getBase64 } from "./convertImageToBase64";
const tesseract = require("tesseract.js");






export async function findPharmacy(imageFile: File, pharmacies: string[]): Promise<string> {
    let base64= await getBase64(imageFile)
    // base64=base64.split(",")[0]
    


    let imageBuffer = Buffer.from(base64 as string, "base64");
    const result = await tesseract.recognize(imageBuffer);
    console.log(result);
    
    // const text = result.data.text.toLowerCase().replace(/[^\w\s]/gi, "");
    // console.log(text);
    // let foundPharmacy = "";
    // for (const pharmacy of pharmacies) {
    //     if (text.includes(pharmacy.toLowerCase())) {
            
    //         foundPharmacy = pharmacy;
    //         console.log(foundPharmacy);
    //         break;
    //     }
    // }
    // return foundPharmacy;
    return ""
}