# HTMLAnalytics
Generates various analytic's via Abstract Syntax Tree (AST) exploral of HTML files in a directory
## Software Needed
#### Visual Studio Code (IDE)
#### Node.js (Package Manager)

## First Time Installation
`npm install` in `HTMLAnalytics/`

## Manual Individual Build Process Logic
`tsc filename.ts`, converts `filename.ts` => `filename.js`

`browserify input.js -o output.js`, allows us to use node.js required packages client side

## Manual Individual Build Process
#### To compile in one step:

`tsc filename.ts && browserify filename.js -o bundle.js` where `filename` is the analyser you want to build

#### Example's for HTMLAnalytics/Proof of Concepts/*
`tsc classCounter.ts && browserify classCounter.js -o bundle.js` - HTML - Class Counter

`tsc selectorExplorer.ts && browserify selectorExplorer.js -o bundle.js` - CSS - Selector Explorer

Navigate to `index.html` in your browser to test out the analyser's 

## Links & Resources
https://astexplorer.net/

https://github.com/fb55/htmlparser2

https://github.com/NV/CSSOM

https://github.com/fkling/astexplorer/blob/master/README.md

