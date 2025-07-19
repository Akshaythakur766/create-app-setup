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

  const eslintFilePath = path.join(destinationPath, ".eslintrc.json");

  const config: Record<string, any> = {
    root: true,
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: ["eslint:recommended"],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {},
    plugins: [],
  };

  // ✅ TypeScript support
  if (isTypescript) {
    config.parser = "@typescript-eslint/parser";
    config.extends.push("plugin:@typescript-eslint/recommended");
    config.plugins.push("@typescript-eslint");
  }

  // ✅ Jest support
  if (isJest) {
    config.env.jest = true;
    config.plugins.push("jest");
    config.extends.push("plugin:jest/recommended");
  }

  // ✅ Prettier support
  if (isPrettier) {
    config.extends.push("plugin:prettier/recommended");
    config.plugins.push("prettier");
    config.rules["prettier/prettier"] = ["error"];
  }

  // Write the config
  fs.writeFileSync(eslintFilePath, JSON.stringify(config, null, 2));

  // Modify package.json
  const packageJsonPath = path.resolve(pkgJson);
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  const eslintDependencies: Record<string, string> = {
    eslint: "^9.1.0", // ✅ ESLint 9
  };

  if (isTypescript) {
    eslintDependencies["@typescript-eslint/parser"] = "^8.0.1";
    eslintDependencies["@typescript-eslint/eslint-plugin"] = "^8.0.1";
  }

  if (isJest) {
    eslintDependencies["eslint-plugin-jest"] = "^27.6.0";
  }

  if (isPrettier) {
    eslintDependencies["eslint-plugin-prettier"] = "^5.0.1";
    eslintDependencies["eslint-config-prettier"] = "^9.1.0";
    eslintDependencies["prettier"] = "^3.3.1";
  }

  // Add to devDependencies
  packageJson.devDependencies = {
    ...packageJson.devDependencies,
    ...eslintDependencies,
  };

  // Add lint script
  packageJson.scripts = {
    ...packageJson.scripts,
    lint: "eslint . --ext .js,.jsx,.ts,.tsx",
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
};

export default eslintConfig;
