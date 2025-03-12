import fs from "fs";
import path from "path";
interface turboPackNextConfigType {
  pkgJson: string;
}

export const turboPackNextConfig = (props: turboPackNextConfigType) => {
  const {  pkgJson } = props;

  const pkgJsonPath = path.resolve(pkgJson);
  const packageFileContent = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));

  const turboPackScripts = {
    dev: "next dev --turbopack",
  };

  packageFileContent.scripts = {
    ...packageFileContent.scripts,
    ...turboPackScripts,
  };

  fs.writeFileSync(pkgJsonPath, JSON.stringify(packageFileContent, null, 2));
};
