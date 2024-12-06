#! /usr/bin/env node
const yargs = require("yargs");
const fs = require("fs");

const usage = "\nUsage: tran <file_path> file to be used";
const options = yargs  
.usage(usage)  
.option("p", { alias:"path", describe: "Show path to file", type: "boolean", demandOption: false })                                                                                                    
.help(true)  
.argv;

const path = process.cwd() + "/" + yargs.argv._;

if (yargs.argv.p === true || yargs.argv.path === true) { 
    console.log("path: " + path);
}

console.log(fs.stat(path, (err, stats) => {
    if(err){
        console.log("Error: " + err);
    }
    console.log("File stats: ");
    console.log(stats);
}));
