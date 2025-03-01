#!/usr/bin/env node
import { Command } from "commander";
import path from "path";
import { startProcess } from "./config/startProcess";

const program = new Command();

// Path of the Directory where the templates are stored
const TEMPLATES_DIR = path.join(__dirname, "templates");

program.argument("<projectName>").action((projectName) => {
  startProcess(projectName ,TEMPLATES_DIR) ;
});

program.parse(process.argv);
