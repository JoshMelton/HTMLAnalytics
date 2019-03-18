let htmlparser = require("htmlparser2");
let classMap: Map<string, number> = new Map<string, number>();

window.onload = () => {
  // Create Open File Button
  const button = document.createElement("button");
  button.innerText = "Browse";
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
    classMap = new Map<string, number>();
    const text = reader.result;
    parseFileText(String(text));
  };
  reader.readAsText(input.files[0]);
}

function parseFileText(fileText: string) {
  parser.write(fileText);
  parser.end();
  analyzeClasses();
}

function analyzeClasses() {
  let classCount: number = 0;
  classMap.forEach((value: number, key: string) => {
    console.log("count: " + ("0" + classMap.get(key)).slice(-2) + " | " + key);
    classCount += classMap.get(key);
  });
  console.log("total class count: " + classCount);
}

let parser = new htmlparser.Parser({
  onopentag(tag: string, attribs: any) {
    if (attribs !== undefined) {
      if (attribs.class !== undefined) {
        const classArray = attribs.class.split(" ");
        classArray.forEach((element: string) => {
          const elementCount = classMap.get(element);
          if (elementCount !== undefined) {
            classMap.set(element, elementCount + 1);
          } else {
            classMap.set(element, 1);
          }
        });
      }
    }
  },
  }, {
    decodeEntities: true,
  });
