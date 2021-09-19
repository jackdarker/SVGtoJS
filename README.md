# SVGtoJS
Compress and minify SVG and place it in javascript codefragment for use as inline-SVG in html  

First: Install node-modules:  
npm install

Check Run.cmd how to call from command-line. Those settings point to example-directory.

# Background
You can use svg in html in those ways:
*  as `<image>` : but then you cannot manipulate the svg-DOM itself
*  as `<object>` : the svg is shown but with local files you cannot access svg-DOM because CORS. With webserver still some sandbox settings restrict javascript.
*  inline `<SVG>` : svg-DOM should be easily acessible now, but copy-pasting svg-code is a pain and your html gets bloated
  
This tool automates the process of inlining. But it doesnt inline the SVG directly in HTML but in js so that the SVG-strings are only at one location and can be loaded separatly. 
