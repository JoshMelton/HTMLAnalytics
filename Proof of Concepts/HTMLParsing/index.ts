
let htmlparser = require("htmlparser2");
let tab = "";
let tabSize = " ";
function notEmpty(text: string): boolean {
  while (text.replace(" ", "") !== text) {
    text = text.replace(" ", "");
  }
  while (text.replace("\n", "") !== text) {
    text = text.replace("\n", "");
  }
  while (text.replace("\t", "") !== text) {
    text = text.replace("\t", "");
  }
  while (text.replace("\r", "") !== text) {
    text = text.replace("\r", "");
  }
  if (text.length > 0) {
    return true;
  }
  return false;
}
let parser = new htmlparser.Parser({
  onopentag(tag: string, attribs: any) {
    console.log(tab + "open - " + tag);
    tab += tabSize;
  },
  ontext(text: string) {
    tab += tabSize;
    if (notEmpty(text)) {
      console.log(tab + text);
    }
    tab = tab.substring(0, tab.length - tabSize.length);
  },
  onclosetag(tag: string) {
    tab = tab.substring(0, tab.length - tabSize.length);
    console.log(tab + "close - " + tag);
  },
}, {
  decodeEntities: true,
});

window.onload = () => {
  // Create Open File Button
  const button = document.createElement("button");
  button.innerText = "TEST";
  button.onclick = () => {
    document.getElementById("upload").click();
  };
  document.body.appendChild(button);

  document.getElementById("upload").onchange = (event) => {
    openFile(event);
  };
};

function openFile(event: any) {
  const input = event.target;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    const node = document.getElementById("output");
    node.innerText = String(text);
    parser.write(text);
    parser.end();
  };
  reader.readAsText(input.files[0]);
}
