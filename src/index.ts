#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";

const program = new Command();

program.command("run").action(() => {
  console.log("running");
});

program.parse(process.argv);
