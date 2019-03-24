import { stringify } from "querystring";

const cssParser = require("cssom");
const mapping = new Map<string, Map<string, string>>();
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
  cssParser.parse(fileText).cssRules.filter(filterSelectorText).forEach((element: any) => {
    const selectors = element.selectorText.split(",").map((selector: string) => selector.replace(/(\s)/gm, ""));
    console.log(element);
    for (const style of element.style) {
      selectors.forEach((selector: string) => {
        if (!mapping.has(selector)) {
          mapping.set(selector, new Map());
        }
        if (mapping.has(selector)) {
          const selectorMapping = mapping.get(selector);
          if (element.style._importants[style] === "important") {
            selectorMapping.set(style, element.style[style] + " !important");
          } else {
            selectorMapping.set(style, element.style[style]);
          }
        }
      });
    }
  });
  console.log("height: " + mapping.get("body").get("height"));
  console.log("display: " + mapping.get(".date-picker").get("display"));
}

function filterSelectorText(object: any) {
  if (object.selectorText !== undefined) {
    return true;
  }
  return false;
}
export {};
