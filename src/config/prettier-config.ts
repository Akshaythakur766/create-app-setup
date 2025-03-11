import path from "path";
import fs from "fs";
import { chalk } from "../helper/Chalk";
interface prettierConfigType {
  destinationPath: string;
  pkgJson: string;
}

export const prettierConfig = (props: prettierConfigType) => {
  const { destinationPath, pkgJson } = props;
  const prettierrc = {
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: "es5",
  };
  const prettierIgnore = `node_modules
    dist
    build
    package-lock.json`;
  const prettierFilePath = path.join(destinationPath, ".prettierrc");
  const prettierIgnoreFilePath = path.join(destinationPath, ".prettierignore");
  const pkgJsonPath = path.resolve(pkgJson);

  const pkgJsonFileContent = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));

  const prettierDevDependencies: Record<string, string> = {
    prettier: "3.0.0",
  };

  pkgJsonFileContent.devDependencies = {
    ...pkgJsonFileContent.devDependencies,
    ...prettierDevDependencies,
  };
  if (!fs.existsSync(destinationPath)) {
    console.log(chalk.red.bold(`❌ Error: Something went wrong `));
    process.exit(1);
  }

  if (!fs.existsSync(prettierFilePath)) {
    fs.writeFileSync(prettierFilePath, JSON.stringify(prettierrc, null, 2));
  }
  if (!fs.existsSync(prettierIgnoreFilePath)) {
    fs.writeFileSync(prettierIgnoreFilePath, prettierIgnore);
  }
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJsonFileContent, null, 2));
};
