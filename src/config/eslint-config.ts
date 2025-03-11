import fs from "fs";
import path from "path";

interface EslintConfigType {
  pkgJson: string;
  destinationPath: string;
  isTypescript?: boolean;
  isJest?: boolean;
  isPrettier?: boolean;
} 

const eslintConfig = (props: EslintConfigType) => {
  const {
    pkgJson,
    destinationPath,
    isJest = false,
    isPrettier = false,
    isTypescript = false,
  } = props;

  // Path to ESLint config file
  const eslintFilePath = path.join(destinationPath, ".eslintrc.json");

  // Define base ESLint config
  const eslintConfig: Record<string, any> = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ["eslint:recommended"],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {},
    plugins: [],
    overrides: [
      {
        files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
        excludedFiles: ["node_modules/", "dist/", "build/"],
      },
    ],
  };

  // Apply TypeScript-specific rules
  if (isTypescript) {
    eslintConfig.extends.push("plugin:@typescript-eslint/recommended");
    eslintConfig.parser = "@typescript-eslint/parser";
    eslintConfig.plugins.push("@typescript-eslint");
  }

  // Apply Jest-specific rules
  if (isJest) {
    eslintConfig.env.jest = true;
    eslintConfig.extends.push("plugin:jest/recommended");
    eslintConfig.plugins.push("jest");
  }

  // Apply Prettier-specific rules
  if (isPrettier) {
    eslintConfig.extends.push("plugin:prettier/recommended");
    eslintConfig.plugins.push("prettier");
    eslintConfig.rules["prettier/prettier"] = ["error"];
  }

  // Write the ESLint config file
  fs.writeFileSync(eslintFilePath, JSON.stringify(eslintConfig, null, 2));
  console.log(`✅ ESLint config created at: ${eslintFilePath}`);

  // Read and update package.json
  const packageJsonPath = path.resolve(pkgJson);
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  // Ensure ESLint dependencies exist
  const eslintDependencies: Record<string, string> = {
    eslint: "^8.0.0",
  };

  if (isTypescript) {
    eslintDependencies["@typescript-eslint/parser"] = "^5.0.0";
    eslintDependencies["@typescript-eslint/eslint-plugin"] = "^5.0.0";
  }
  if (isJest) {
    eslintDependencies["eslint-plugin-jest"] = "^27.0.0";
  }
  if (isPrettier) {
    eslintDependencies["eslint-plugin-prettier"] = "^5.0.0";
    eslintDependencies["eslint-config-prettier"] = "^9.0.0";
    eslintDependencies["prettier"] = "^3.0.0";
  }

  // Merge and update package.json dependencies
  packageJson.devDependencies = { 
    ...packageJson.devDependencies,
    ...eslintDependencies,
  };

  // Ensure lint script is added
  packageJson.scripts = {
    ...packageJson.scripts,
    lint: "eslint . --ext .js,.jsx,.ts,.tsx",
  };
  // Write back the updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log("🚀 ESLint setup completed! Run `npm run lint` to check.");

};

export default eslintConfig;
