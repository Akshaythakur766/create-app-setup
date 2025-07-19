import fs from "fs";
import path from "path";
import copyTemplate from "../helper/copyTemplate";
import gitignoreConfig from "./gitignore-config";
import spawn from "cross-spawn";
interface huskyConfigType {
  destinationPath: string;
  projectName: string;
}

const huskyConfig = (props: huskyConfigType) => {
  const { destinationPath, projectName } = props;

  // Paths
  const pkgJsonPath = `./${projectName}/package.json`;
  // File content
  const pkgJsonFileContent = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));

  // New Husky devDependencies
  const huskyDevDependencies: Record<string, string> = {
    husky: "^9.1.7",
  };

  // Add devDependencies
  pkgJsonFileContent.devDependencies = {
    ...pkgJsonFileContent.devDependencies,
    ...huskyDevDependencies,
  };

  //creating husky configuration
  spawn("npx husky init", {
    cwd: destinationPath,
    stdio: "pipe",
    shell: true,
  });

  // Write files
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJsonFileContent, null, 2));
};

export { huskyConfig };
