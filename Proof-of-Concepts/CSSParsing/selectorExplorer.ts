const cssParser = require("cssom");

window.onload = () => {
  // Create Open File Button
  const button = document.createElement("button");
  button.innerText = "Browse Files";
  button.onclick = () => {
    document.getElementById("upload").click();
  };
  document.body.appendChild(button);

  document.getElementById("upload").onchange = (event) => {
    parseFile(event);
  };
};

function parseFile(event: any) {
  const input = event.target;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    parseFileText(String(text));
  };
  reader.readAsText(input.files[0]);
}

function parseFileText(fileText: string) {
  console.log(cssParser.parse(fileText).cssRules.filter(filterSelectorText));
  analyzeFile();
}

function analyzeFile() {
  console.log("--------------");
}

function filterSelectorText(object: any) {
  if (object.selectorText !== undefined) {
    return true;
  }
  return false;
}
export {};
