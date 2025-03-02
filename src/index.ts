import { Command } from "commander";
import path from "path";
import { startProcess } from "./config/startProcess";
import { chalk } from "./helper/Chalk";
const program = new Command();

// Path of the Directory where the templates are stored
const TEMPLATES_DIR = path.join(__dirname, "templates");


// Configuration
program.version("0.0.2");

// Command
program.argument("<projectName>").action((projectName) => {
  startProcess(projectName, TEMPLATES_DIR);
});


// Custom exit handler
const handleExit = () => {
  console.log(chalk.red("\n🛑 Exiting the setup process..."));
  process.exit(0); // Exit with code 0 (success)
};

// Listen for Ctrl+C (SIGINT) event to handle user exit
process.on("SIGINT", handleExit);

program.parse(process.argv);
