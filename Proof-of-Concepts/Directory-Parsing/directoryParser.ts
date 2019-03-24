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
    const fileArray = file.name.split(".");
    if (validFileTypes(fileArray[fileArray.length - 1])) {
      return true;
    }
    return false;
  }).forEach((file: any) => {
    console.log(file);
  });
}
function validFileTypes(fileExt: string): boolean {
  if (fileExt === "css" || fileExt === "scss") {
    return true;
  } else if (fileExt === "html") {
    return true;
  } else {
    return false;
  }
}
