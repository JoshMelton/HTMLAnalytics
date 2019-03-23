# HTMLAnalytics
Generates various analytic's via Abstract Syntax Tree (AST) exploral of HTML files in a directory
## Software Needed:
#### Visual Studio Code (IDE)
#### Node.js (Package Manager)

## First Time Installation:
`npm install` in `HTMLAnalytics/`

## Manual Individual Build Process: (two step)
`tsc filename.ts`, converts `filename.ts` => `filename.js`

`browserify input.js -o output.js`, allows us to use node.js required packages client side

## Manual Individual Build Process:
### In HTMLAnalytics/Proof of Concepts/File-Parsing
#### To compile in one step:

`tsc folder/filename.ts && browserify folder/filename.js -o bundle.js`

where `folder` is the language of analyser you want to build

where `filename` is the analyser you want to build

#### Example's:
 CSS - Important Counter:
 
`tsc CSSParsing/importantCounter.ts && browserify CSSParsing/importantCounter.js -o bundle.js`

HTML - Class Counter:

`tsc HTMLParsing/classCounter.ts && browserify HTMLParsing/classCounter.js -o bundle.js`

HTML - Style Counter:

`tsc HTMLParsing/styleCounter.ts && browserify HTMLParsing/styleCounter.js -o bundle.js`

HTML - ID Analyser

`tsc HTMLParsing/idAnalyser.ts && browserify HTMLParsing/idAnalyser.js -o bundle.js`

### In HTMLAnalytics/Proof of Concepts/File-Parsing
#### To compile in one step:
Directory Parser

`tsc DirectoryParsing/directoryParser.ts && browserify DirectoryParsing/directoryParser.js -o bundle.js`

## Easy Build Process
`npm run css-important-counter`

`npm run html-class-counter`

`npm run html-style-counter`

`npm run html-id-analyser`

`npm run directory-parser`

## How to view analysis:
Navigate to `index.html` in your browser to test out the analyser's (currently all stats are console.log's)

## Links & Resources:
https://astexplorer.net/

https://github.com/fb55/htmlparser2

https://github.com/NV/CSSOM

https://github.com/fkling/astexplorer/blob/master/README.md

