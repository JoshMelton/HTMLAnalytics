var htmlparser = require("htmlparser2");
var tab = "";
var tabSize = " ";
function notEmpty(text) {
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
var parser = new htmlparser.Parser({
    onopentag: function (tag, attribs) {
        console.log(tab + "open - " + tag);
        tab += tabSize;
    },
    ontext: function (text) {
        tab += tabSize;
        if (notEmpty(text)) {
            console.log(tab + text);
        }
        tab = tab.substring(0, tab.length - tabSize.length);
    },
    onclosetag: function (tag) {
        tab = tab.substring(0, tab.length - tabSize.length);
        console.log(tab + "close - " + tag);
    }
}, {
    decodeEntities: true
});
/*
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
*/
window.onload = function () {
    // Create Open File Button
    var button = document.createElement("button");
    button.innerText = "TEST";
    button.onclick = function () {
        document.getElementById("upload").click();
    };
    document.body.appendChild(button);
    document.getElementById("upload").onchange = function (event) {
        openFile(event);
    };
};
function openFile(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        var node = document.getElementById("output");
        node.innerText = String(text);
        parser.write(text);
        parser.end();
    };
    reader.readAsText(input.files[0]);
}
