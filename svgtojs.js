"use strict"

const {resolve,sep} = require("path");
const FS = require("fs");
const pako = require('pako'); //pako for compression
const SVGO = require('svgo') //svgo for minify svg

const opt = parseCmdLine();
const baseDir = process.cwd();
const jsFile = resolve(baseDir+sep+opt.outFile);
const svplug =[{cleanupIDs: {minify:false}}]; //changing ids creates issues with scripts and if multiple svg are rendered into a scene !
const svgo = new SVGO({ js2svg: {},plugins:svplug });
let jsFileHdl = null; //filehandle

///////////////////////////////
processDirectory(resolve(baseDir+sep+opt.inDir)); 
///////////////////////////////

/**
 * walks a directory with svg, minifys them, compress them and place that data in a js wrapped into function with names matching filenames
 * make sure that directorys exist, files and directory have compatible names(no whitespace & specialchars) and there are only svg in the directory
 * the functions are placed within an object; you could merge multiple js into one object if the filenames dont collide !
 * load the js in your html and call the functions to get the svg-code (as string) that you an use together with svg.js to generate svg-DOM
 *      let images={}, images=loadImages(images); //binds the data to an object
 *      var node = SVG(images.myUglySVGFile()); //call object-function and convert returned svg-string to SVG-DOM
 * 
 * you need svg.js and pako.js in your dependencys; get them and add them to your html-header:
 * <script src="svg.min.js"></script>
 * <script src="pako.min.js"></script>
 * <script src="images.js"></script><--!your generated js-->
 * 
 * compression is none or gzip and additonal code is added automatically to the functions to uncompress
 *
 * @param {*} path : directory to process
 */
async function processDirectory(path) {
    // using promise instead of callback-api because easier to make sure files are processed one after another
    let stats = await FS.promises.stat(path);
    if(!stats.isDirectory()) {throw new Error('not a directory: '+path);}
    createJS();
    let files = await FS.promises.readdir(path);
    for(var i=0; i<files.length;i++) {
        var data = await FS.promises.readFile(resolve(path,files[i]),'utf8');
        await onFileRead(files[i],data);
    }
    finishJS();
}
async function createJS() {
    jsFileHdl= await FS.promises.open(jsFile,'w');
    await FS.promises.appendFile(jsFileHdl,"\"use strict\";\n function loadImages(container){ \n");
    await FS.promises.appendFile(jsFileHdl,'container.strToBuf=function(data){let s=2,l=data.length/s,buf=new Uint8Array(l);for(var i=0;i<l;i++){buf[i]=(parseInt(data.substr(i*s,s),16));}return buf;}\n');
    await FS.promises.appendFile(jsFileHdl,"container.cache={}; \n");
}
async function finishJS() {
    await FS.promises.appendFile(jsFileHdl,"\n return(container);}");
    jsFileHdl.close(),jsFileHdl=null;
}
/**
 * converts Uint8Array to a string by printing every byte as hexcode
 * we cant simply convert the array to string because this might create charcodes that mess up js-code like \r or \n ! 
 *
 * @param {*} data
 * @return {*} 
 */
function bufferToStrg(data) {
    let str='';
    for(var el of data) {
        str+=((el<16)?'0':'')+el.toString(16);
    }
    return str;
}

/**
 * this is only for testing purpose; the code is copied to the created file
 *
 * @param {*} data
 * @return {*} 
 */
function strToBuf(data){let s=2,l=data.length/s,buf=new Uint8Array(l);for(var i=0;i<l;i++){buf[i]=(parseInt(data.substr(i*s,s),16));}return buf;}

/**
 * minify and compress svg-string read from origin-file and append to js
 *
 * @param {*} name
 * @param {*} data
 */
async function onFileRead(name,data){
    var fname= name.split('.')[0];
    var compressed = data.replace(/\r\n|\n/g, ""); //remove linebreaks as it esses up js
    compressed = (await svgo.optimize(data, { path: name,multipass: false,plugins:svplug})).data; //todo what is multipass?
    //the cache is used to buffer decompressed svg-strings after accessing them once; todo: might need to clean out that cache if it gets to big 
    var code ='container.'+fname+'=function(){ let x=this.cache.'+fname+';if(!x) x=this.cache.'+fname+'=';
    if(opt.compr==='gzip') {
        compressed = pako.gzip(compressed);
        var compressed2 = bufferToStrg(compressed);
        //var compressed3 = strToBuf(compressed2);
        code+='window.pako.ungzip(this.strToBuf(\''+compressed2+'\'),{to:\'string\'});';
    } else {
        code+='(`'+compressed+'`);'; //note the template literals beause the string can contain " and '
    }
    code+='return(x);};\n';
    await FS.promises.appendFile(jsFileHdl,code);
}
/**
 * parses cmdline options for calling from cmdline
 * node svgtojs.js c:none i:example//in o:example//out//images.js
 *
 * @return {*} 
 */
function parseCmdLine(){
    let opt = {compr:'none', inDir:'example//in', outFile:'example//out//images.js'};
    console.log('you can specify cmd-line options: c:  compression gzip or none ');
    console.log('i:  directory with svg relative to workingdir');
    console.log('o:  filepath for output relative to workingdir');
    for(var i=2;i<process.argv.length;i++) {
        var _op = process.argv[i];
        if(_op.substr(0,2)==='c:') {
            opt.compr=(_op.substr(2));
        } else if(_op.substr(0,2)==='i:') {
            opt.inDir=(_op.substr(2));
        } else if(_op.substr(0,2)==='o:') {
            opt.outFile=_op.substr(2);
        } else {
            console.log('unknown option '+_op);
        }
    }
    return(opt);
}