# HTMLAnalytics
Generates various analytic's via Abstract Syntax Tree (AST) exploral of HTML files in a directory
## Software Needed:
#### Visual Studio Code (IDE)
#### Node.js (Package Manager)

## First Time Installation:
`npm install` in `HTMLAnalytics/`

## Manual Individual Build Process:
#### To compile in two steps:
`tsc folder1/filename1.ts ... folderN/filenameN.ts` to compile needed typescript files

 &&
 
`browserify folder1/filename1.js ... folderN/filenameN.js -o bundle.js` to bundle needed files together / to use npm packages

it is recommended to use the easy build process!

## Easy Build Process
`npm run css-important-counter`

`npm run css-selector-map`

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

