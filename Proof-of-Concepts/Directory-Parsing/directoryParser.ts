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
