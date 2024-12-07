#! /usr/bin/env node
const yargs = require("yargs");
const fs = require("fs");
const process = require("process");

const usage = "\nUsage: tran <file_path>";
const options = yargs  
.usage(usage)  
.option("p", { alias:"path", describe: "Show path to file", type: "boolean", demandOption: false })                                                                                                    
.help(true)  
.argv;

const path = process.cwd() + "/" + yargs.argv._;

if (yargs.argv.p === true || yargs.argv.path === true) { 
    console.log("path: " + path);
}

fs.stat(path, (err, stats) => {
    if(err){
        console.log("Error: " + err);
        return;
    }

    if (stats.isFile()) {
        console.log("File stats: ");
        console.log(stats);
        return;
    }

    if (stats.isDirectory()) {
        console.log("Directory stats: ");
        console.log(stats);
        return;
    }

    console.log("Path stats: ");
    console.log(stats);
});
