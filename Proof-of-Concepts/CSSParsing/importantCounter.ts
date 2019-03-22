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
let importantCount = 0;
function parseFileText(fileText: string) {
  importantCount = 0;
  cssParser.parse(fileText).cssRules.filter(filterSelectorText).forEach((element: any) => {
    console.log(element.selectorText);
    for (const style of element.style) {
      if (element.style._importants[style] === "important") {
        console.log("\t" + style + ": " + element.style[style] + " !important");
        importantCount += 1;
      } else {
        console.log("\t" + style + ": " + element.style[style]);
      }
    }
  });
  analyzeFile();
}

function analyzeFile() {
  console.log("Number of !important's found: " + importantCount);
}

function filterSelectorText(object: any) {
  if (object.selectorText !== undefined) {
    return true;
  }
  return false;
}
export {};
