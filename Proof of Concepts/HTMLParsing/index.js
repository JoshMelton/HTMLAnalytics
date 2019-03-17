var htmlparser = require("htmlparser2");
var tab = '';
var tabSize = ' '
var parser = new htmlparser.Parser({
	onopentag: function(tag, attribs){
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
	ontext: function(text){
		tab += tabSize;
		console.log(tab + text);
		tab = tab.substring(0,tab.length-tabSize.length);
	},
	onclosetag: function(tag){
		tab = tab.substring(0,tab.length-tabSize.length);
		if (tag === "html") {
			console.log(tab + "close - " + tag);
		}
		if (tag === "head") {
			console.log(tab + "close - " + tag);
		}
		if (tag === "script"){
			console.log(tab + "close - " + tag);
		}
		if (tag === "body") {
			console.log(tab + "close - " + tag);
		}
		if (tag === "p") {
			console.log(tab + "close - " + tag);
		}
		
	}
}, {decodeEntities: true});

var html = "<html><head><script type='text/javascript'>var variable1 = 'value1';</ script></head><body><p>paragraph 1</p><p>paragraph 2</p></body></html>"
parser.write(html);
parser.end();