let htmlparser = require("htmlparser2");
let tab = "";
let tabSize = " ";

let parser = new htmlparser.Parser({
  onopentag(tag, attribs) {
    if (tag === "html") {
      console.log(tab + "open - " + tag);
    }
    if (tag === "head") {
      console.log(tab + "open - " + tag);
    }
    if (tag === "script" && attribs.type === "text/javascript") {
      console.log(tab + "open - " + tag);
    }
    if (tag === "body") {
      console.log(tab + "open - " + tag);
    }
    if (tag === "p") {
      console.log(tab + "open - " + tag);
    }
    tab += tabSize;
  },
  ontext(text) {
    tab += tabSize;
    console.log(tab + text);
    tab = tab.substring(0, tab.length - tabSize.length);
  },
  onclosetag(tag) {
    tab = tab.substring(0, tab.length - tabSize.length);
    if (tag === "html") {
      console.log(tab + "close - " + tag);
    }
    if (tag === "head") {
      console.log(tab + "close - " + tag);
    }
    if (tag === "script") {
      console.log(tab + "close - " + tag);
    }
    if (tag === "body") {
      console.log(tab + "close - " + tag);
    }
    if (tag === "p") {
      console.log(tab + "close - " + tag);
    }

  },
}, {
  decodeEntities: true,
});

let html = "<html>";
html += "<head>";
html += "<script type='text/javascript'>var variable1 = 'value1';</ script>";
html += "</head>";
html += "<body>";
html += "<p>paragraph 1</p>";
html += "<p>paragraph 2</p>";
html += "</body>";
html += "</html>";
parser.write(html);
parser.end();
