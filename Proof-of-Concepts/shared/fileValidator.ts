function validFile(file: any) {
  if (file.size !== 0) {
    if (validFileTypes(file.name)) {
      return true;
    }
  }
  return false;
}
function validFileTypes(fileName: string): boolean {
  const fileArray = fileName.split(".");
  const fileExt = fileArray.length === 0 ? "" : fileArray[fileArray.length - 1];
  if (fileExt === "css" || fileExt === "scss") {
    return true;
  } else if (fileExt === "html") {
    return true;
  } else {
    return false;
  }
}
