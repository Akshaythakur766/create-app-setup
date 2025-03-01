import inquirer from "inquirer";
import path from "path";
import fs from "fs";
const chalk = require("chalk");
import { questions } from "../Questions/questions";
export const startProcess = async (
  projectName: string,
  TEMPLATES_DIR: string
) => {
  // Ask the Question using Inquirer

  const {
    framework,
    language,
    prettier,
    husky,
    testingTool,
    storybook,
    eslint,
  } = await inquirer.prompt(questions);
  //Path of the templates that is seleted by user
  const TEMPLATE_PATH = path.join(
    TEMPLATES_DIR,
    framework.toLowerCase(),
    language.toLowerCase()
  );
  if (!fs.existsSync(TEMPLATE_PATH)) {
  
    console.log("\n",chalk.bgRed(`ERROR:`) + chalk.redBright("THE selej") ,"\n");
  }
  // Path where the Template will be copied
  const DESTIONATION_DIR = path.join(process.cwd(), projectName);

  // console.log({
  //   TEMPLATES_DIR,
  //   TEMPLATE_PATH,
  //   DESTIONATION_DIR,
  //   framework,
  //   language,
  //   projectName,
  //   fileSync: fs.existsSync(TEMPLATE_PATH),
  // });
};
