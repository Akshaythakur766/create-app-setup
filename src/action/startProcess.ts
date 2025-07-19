import inquirer from "inquirer";
import path from "path";
import fs from "fs";
import { chalk } from "../helper/Chalk";
import { questions } from "../Questions/questions";
import copyTemplate from "../helper/copyTemplate";
import spawn from "cross-spawn";
import eslintConfig from "../config/eslint-config";
import gitignoreConfig from "../config/gitignore-config";
import { huskyConfig } from "../config/husky-config";
import { prettierConfig } from "../config/prettier-config";
import { turboPackNextConfig } from "../config/turboPack-next-config";
import { tailwindCssConfig } from "../config/tailwindCss-config";
export const startProcess = async (
  projectName: string,
  TEMPLATES_DIR: string
) => {
  // Dynamic Import for Ora
  const oraModule = await import("ora");
  const ora = oraModule.default;

  console.log(chalk.cyan.bold("\n🚀 Starting Project Setup...\n"));

  try {
    // Ask user questions
    const {
      framework,
      language,
      packageManager,
      prettier,
      husky,
      testingTool,
      eslint,
      turbopack,
      tailwindCss
    } = await inquirer.prompt(questions);

    // Define the template path based on user selection
    const templatePath = path.join(
      TEMPLATES_DIR,
      framework.toLowerCase(),
      language.toLowerCase()
    );

    // Check if the selected template exists
    if (!fs.existsSync(templatePath)) {
      console.log(
        "\n" +
          chalk.bgRed.white(" ERROR ") +
          chalk.redBright(
            " Selected framework & language template does not exist!\n"
          )
      );
      process.exit(1);
    }

    // Define the destination path
    const destinationPath = path.join(process.cwd(), projectName);

    //** Copy the template */
    copyTemplate({
      sourceDir: templatePath,
      destinationDir: destinationPath,
      projectName,
    });

    // Conditional Configuration Based on User Selection

    //** Prettier Setup */ 
    if (prettier) {
      prettierConfig({
        destinationPath,
        pkgJson: `./${projectName}/package.json`,
      });
    }

    // ESLint Setup
    if (eslint) {
      eslintConfig({
        isTypescript: language?.toLowerCase() == "typescript",
        isJest: testingTool?.toLowerCase() == "jest",
        isPrettier: prettier,
        pkgJson: `./${projectName}/package.json`,
        destinationPath: `./${projectName}`,
      });
    }

    // Husky Setup
    if (husky) {
      huskyConfig({
        // pkgJson: `./${projectName}/package.json`,
        destinationPath,
        // TEMPLATES_DIR,
        // projectName,
        packageManager,
    });
    }

    if (framework === "Next" && turbopack) {
      turboPackNextConfig({ pkgJson: `./${projectName}/package.json` });
    }

    //**Tailwind Css Setup */
    if(tailwindCss){
      tailwindCssConfig({projectName , framework });
    }
    //** */

    // // Testing Tool Setup (e.g., Jest, Cypress)
    // if (testingTool === "jest") {
    //   console.log(chalk.cyan("🛠 Setting up Jest..."));
    //   spawn(packageManager.toLowerCase(), ["add", "jest", "-D"], {
    //     cwd: destinationPath,
    //     stdio: "inherit",
    //   });
    // }

    // // Storybook Setup
    // if (storybook) {
    //   console.log(chalk.cyan("🛠 Setting up Storybook..."));
    //   spawn(packageManager.toLowerCase(), ["add", "@storybook/react"], {
    //     cwd: destinationPath,
    //     stdio: "inherit",
    //   });
    // }

    // // Compiler Setup (SWC or Babel)
    // if (compiler === "SWC") {
    //   console.log(chalk.cyan("🛠 Setting up SWC..."));
    //   spawn(packageManager.toLowerCase(), ["add", "@swc/core", "@swc/cli"], {
    //     cwd: destinationPath,
    //     stdio: "inherit",
    //   });
    // }

    //Renaming the GitIgnore
    gitignoreConfig({ path: `${projectName}/gitignore` });


    // Installing Dependencies
    if (packageManager !== 'none') {
      console.log(chalk.yellow("\n📦 Installing dependencies...\n"));

      // Run install using selected package manager
      const installDeps = spawn(packageManager.toLowerCase(), ["install"], {
        cwd: destinationPath,
        stdio: "pipe",
        shell: true,
      });
      // Create a spinner with a custom message
      const spinner = ora(" Installing ...").start();

      installDeps.on("close", (code) => {
        if (code === 0) {
          spinner.succeed(
            chalk.bold.magentaBright("🎉 Setup Complete! Happy Coding! 🚀")
          );
        } else {
          spinner.fail(
            chalk.redBright(
              `❌ ${packageManager} install failed with code: ${code}`
            )
          );
        }
      });
    } else {
      console.log(chalk.bold.magentaBright("🎉 Setup Complete! Happy Coding! 🚀"));
    }
  } catch (error) {
    // If user exits or any error occurs during prompt
    console.log(chalk.red("\n❌ Exited the Process", error));
  }
};
