window.onload = () => {
  // Create Open File Button
  const button = document.createElement("button");
  button.innerText = "Browse Files";
  button.onclick = () => {
    document.getElementById("upload").click();
  };
  document.body.appendChild(button);

  document.getElementById("upload").onchange = (event) => {
    parseDirectory(event);
  };
};

function parseDirectory(event: any) {
  Array.from(event.target.files).filter((file: any) => {
    return validFile(file);
  }).forEach((file: any) => {
    console.log(file);
  });
}
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
