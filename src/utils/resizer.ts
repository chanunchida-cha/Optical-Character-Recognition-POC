import Resizer from "react-image-file-resizer";
export async function resizer(file: File) {
  const resizeFile = new Promise((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      400, ////width
      400, /// height
      "WEBP",
      90, /// quality
      0, // Rotate degree
      (uri: any) => {
        resolve(uri);
      },
      "file"
    );
  });
  const resizeFiled = await Promise.all([resizeFile]);
  const result = resizeFiled[0];

  return result;
}
