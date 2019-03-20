let htmlParser = require("htmlparser2");
let idMap: Map<string, number> = new Map<string, number>();

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
    idMap = new Map<string, number>();
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
  let idCount: number = 0;
  idMap.forEach((value: number, key: string) => {
    if (idMap.get(key) > 1) {
      console.log("count: " + ("0" + idMap.get(key)).slice(-2) + " | " + key + " - WARNING");
    } else {
      console.log("count: " + ("0" + idMap.get(key)).slice(-2) + " | " + key);
    }
    idCount += idMap.get(key);
  });
  console.log("total id count: " + idCount);
}

htmlParser = new htmlParser.Parser({
  onopentag(tag: string, attribs: any) {
    if (attribs !== undefined) {
      if (attribs.id !== undefined) {
        const idArray = attribs.id.split(" ");
        idArray.forEach((element: string) => {
          const elementCount = idMap.get(element);
          if (elementCount !== undefined) {
            idMap.set(element, elementCount + 1);
          } else {
            idMap.set(element, 1);
          }
        });
      }
    }
  },
  }, {
    decodeEntities: true,
  });
export {};
