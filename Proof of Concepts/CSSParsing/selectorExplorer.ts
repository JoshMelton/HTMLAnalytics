let cssParser = require("cssom");

window.onload = () => {
  // Create Open File Button
  const button = document.createElement("button");
  button.innerText = "Browse Files";
  button.onclick = () => {
    document.getElementById("upload").click();
  };
  document.body.appendChild(button);

  document.getElementById("upload").onchange = (event) => {
    parseCSSFile(event);
  };
};

function parseCSSFile(event: any) {
  const input = event.target;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    parseCSSFileText(String(text));
  };
  reader.readAsText(input.files[0]);
}

function parseCSSFileText(fileText: string) {
  console.log(cssParser.parse(fileText).cssRules.filter(filterSelectorText));
  analyzeCSSClasses();
}

function analyzeCSSClasses() {
  console.log("--------------");
}

function filterSelectorText(object: any) {
  if (object.selectorText !== undefined) {
    return true;
  }
  return false;
}
