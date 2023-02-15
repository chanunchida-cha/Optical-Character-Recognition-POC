import axios from "axios";

export async function uploadImage(formData: FormData) {
 const res = await axios.post(`${process.env.NEXT_PUBLIC_UPLOAD_PICTURE}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data
}
