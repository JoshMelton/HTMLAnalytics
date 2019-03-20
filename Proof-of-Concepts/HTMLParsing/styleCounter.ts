let htmlParser = require("htmlparser2");
let styleArray: string[] = [];

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
    styleArray = [];
    const text = reader.result;
    parseFileText(String(text));
  };
  reader.readAsText(input.files[0]);
}

function parseFileText(fileText: string) {
  htmlParser.write(fileText);
  htmlParser.end();
  analyzeFile();
}

function analyzeFile() {
  styleArray.forEach((style) => {
    console.log("style: " + style);
  });
  console.log("total in-line style count: " + styleArray.length);
}

htmlParser = new htmlParser.Parser({
  onopentag(tag: string, attribs: any) {
    if (attribs !== undefined) {
      if (attribs.style !== undefined) {
        styleArray.push(attribs.style);
      }
    }
  },
  }, {
    decodeEntities: true,
  });
export {};
