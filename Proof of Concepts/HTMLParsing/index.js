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
        classCount = 0;
        var text = reader.result;
        var node = document.getElementById("output");
        node.innerText = String(text);
        parser.write(text);
        parser.end();
        console.log("class count: " + classCount);
    };
    reader.readAsText(input.files[0]);
}
var htmlparser = require("htmlparser2");
var tab = "";
var tabSize = " ";
var classCount = 0;
var parser = new htmlparser.Parser({
    onopentag: function (tag, attribs) {
        console.log(tab + "open - " + tag);
        if (attribs !== undefined) {
            if (attribs["class"] !== undefined) {
                classCount += attribs["class"].split(" ").length;
            }
        }
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
