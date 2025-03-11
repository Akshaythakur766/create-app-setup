import fs from "fs";
import path from "path";
import { chalk } from "./Chalk";

type CopyTemplateType = {
  sourceDir: string;
  destinationDir: string;
  projectName?:string
};

const copyTemplate = (props: CopyTemplateType) => {
  const { sourceDir, destinationDir ,projectName} = props;
  
  if (!fs.existsSync(sourceDir)) {
    console.log(chalk.red.bold(`❌ Error: Template not found `));
    process.exit(1);
  }

  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  } else {
    console.log(chalk.redBright(`📂 ${projectName} already exists`));
    process.exit(1)
  }
  const items = fs.readdirSync(sourceDir);

  if (items.length === 0) {
    return;
  }
  
  items.forEach((item: string) => {
    const sourcePath = path.join(sourceDir, item);
    const destinationPath = path.join(destinationDir, item);

    try {
      if (fs.statSync(sourcePath).isDirectory()) {
        copyTemplate({
          sourceDir: sourcePath,
          destinationDir: destinationPath,
        });
      } else {
        fs.copyFileSync(sourcePath, destinationPath);
      }
    } catch (error: any) {
      console.log(chalk.red(`❌ Error  ${item}: ${error.message}`));
    }
  });

//   console.log(chalk.green.bold("\n🎉 Template copied successfully!"));
};

export default copyTemplate;
