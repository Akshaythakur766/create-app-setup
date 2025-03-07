import fs from "fs";
import path from "path";
import copyTemplate from "../helper/copyTemplate";
import gitignoreConfig from "./gitignore-config";
import spawn from "cross-spawn";
interface huskyConfigType {
  //   pkgJson: string;
  destinationPath: string;
  //   TEMPLATES_DIR: string;
  //   projectName?: string;
  packageManager?: string;
}
const executeCommand = (packageManager: string | undefined) => {
  switch (packageManager?.toLocaleLowerCase()) {
    case "pnpm":
      return "pnpm exec husky init";
    case "bun":
      return "bunx husky init";
    default:
      return "npx husky init";
  }
};
const huskyConfig = (props: huskyConfigType) => {
  const { packageManager = "npm", destinationPath } = props;

  spawn("npx husky init", {
    cwd: destinationPath,
    stdio: "pipe",
    shell: true,
  });
  //   const { destinationPath, pkgJson, TEMPLATES_DIR, projectName } = props;
  //   const huskyFilePath = path.join(destinationPath, ".husky");
  //   const huskyTemplatePath = path.join(TEMPLATES_DIR, "husky");
  //   copyTemplate({ sourceDir: huskyTemplatePath, destinationDir: huskyFilePath });
  //   const packageJsonPath = path.resolve(pkgJson);
  //   const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  //   packageJson.scripts = {
  //     ...packageJson.scripts,
  //     husky: "prepare",
  //   };
  //   gitignoreConfig({ path: `${projectName}/.husky/_/gitignore` });
};

export { huskyConfig };
