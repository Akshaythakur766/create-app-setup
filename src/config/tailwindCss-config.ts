import fs from "fs";
import path from "path";

interface TailwindCssInterface {
  projectName: string;
  framework: string;
}

const tailwindCssConfig = ({ projectName, framework }: TailwindCssInterface) => {
  // Paths
  const projectRoot = path.resolve(process.cwd(), projectName);
  const pkgJsonPath = path.join(projectRoot, "package.json");
  const globalStyleFilePath = path.join(projectRoot, "src/app/globals.css");
  const postCssConfigPath = path.join(projectRoot, "postcss.config.mjs");

  // Ensure paths exist
  if (!fs.existsSync(pkgJsonPath)) {
    throw new Error(`❌ package.json not found in ${projectRoot}`);
  }
  if (!fs.existsSync(globalStyleFilePath)) {
    throw new Error(`❌ globals.css not found in ${globalStyleFilePath}`);
  }

  // Read existing files
  const pkgJsonFileContent = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
  let styleFileContent = fs.readFileSync(globalStyleFilePath, "utf-8");

  // Tailwind dependencies
  const tailwindCssDevDependencies: Record<string, string> = {
    tailwindcss: "^4",
    "@tailwindcss/postcss": "^4",
  };

  // Tailwind import
  const tailwindImport = '@import "tailwindcss";';

  // 1️⃣ Update package.json devDependencies
  pkgJsonFileContent.devDependencies = {
    ...pkgJsonFileContent.devDependencies,
    ...tailwindCssDevDependencies,
  };

  // 2️⃣ Add Tailwind import to globals.css if missing
  if (!styleFileContent.includes(tailwindImport)) {
    styleFileContent = `${tailwindImport}\n\n${styleFileContent}`;
  }

  // 3️⃣ Create postcss.config.mjs (if not exists)
  const postCssConfigContent = `export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
`;

  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJsonFileContent, null, 2));
  fs.writeFileSync(globalStyleFilePath, styleFileContent);
  fs.writeFileSync(postCssConfigPath, postCssConfigContent);

  console.log(`✅ Tailwind CSS v4 configured successfully for ${framework} in ${projectName}`);
};

export { tailwindCssConfig };
