#! /usr/bin/env node
const yargs = require("yargs");

const usage = "\nUsage: tran <file_path> file to be used";
const options = yargs  
.usage(usage)  
.option("p", { alias:"path", describe: "Path to file", type: "String", demandOption: true })                                                                                                    
.help(true)  
.argv;


const path = process.cwd() + "/" + yargs.argv.p

console.log(path);
