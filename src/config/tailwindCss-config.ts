import fs from "fs";

interface TailwindCssInterface {
  projectName: string;
  framework: string;
}

const tailwindCssConfig = ({
  projectName,
  framework,
}: TailwindCssInterface) => {
  // Paths
  const pkgJsonPath = `./${projectName}/package.json`;
  const globalStyleFilePath = `./${projectName}/src/app/globals.css`;

  // File content
  const pkgJsonFileContent = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
  let styleFileContent = fs.readFileSync(globalStyleFilePath, "utf-8");

  // New Tailwind devDependencies
  const tailwindCssDevDependencies: Record<string, string> = {
    tailwindcss: "^4",
    "@tailwindcss/postcss": "^4",
  };
  const tailwindImport: string = '@import "tailwindcss";';

  // Add devDependencies
  pkgJsonFileContent.devDependencies = {
    ...pkgJsonFileContent.devDependencies,
    ...tailwindCssDevDependencies,
  };

  // Prepend Tailwind import if not already there
  if (!styleFileContent.includes(tailwindImport)) {
    styleFileContent = `${tailwindImport}\n${styleFileContent}`;
  }

  // Write files
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJsonFileContent, null, 2));
  fs.writeFileSync(globalStyleFilePath, styleFileContent);
};

export { tailwindCssConfig };
