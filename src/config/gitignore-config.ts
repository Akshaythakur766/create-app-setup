import fs from "fs";
import path from "path";

interface GitignoreConfigType {
  path: string;
}

const gitignoreConfig = ({ path: sourcePath }: GitignoreConfigType) => {
  // Define the destination path (.gitignore in the same directory)
  const destinationPath = path.join(path.dirname(sourcePath), ".gitignore");

  try {
    // Check if the source file exists
    if (!fs.existsSync(sourcePath)) {
      console.error(`❌ Error: File not found at ${sourcePath}`);
      return;
    }

    // Rename (move) the file to .gitignore
    fs.renameSync(sourcePath, destinationPath);
  } catch (error) {
    console.error("❌ Error renaming file:", error);
  }
};

export default gitignoreConfig;
