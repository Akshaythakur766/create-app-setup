const chalk = require("chalk");

// ✅ Success Messages (Green)
const success = chalk.green.bold;

// ❌ Error Messages (Red)
const error = chalk.red.bold;

// ⚠️ Warning Messages (Yellow)
const warning = chalk.yellow.bold;

// 🔵 Info Messages (Cyan/Blue)
const info = chalk.cyan.bold;

// 🔄 Process Messages (Magenta)
const process = chalk.magenta.bold;

// 🎉 Highlight/Title (Bright Blue)
const title = chalk.blueBright.bold;

// 🟡 Secondary Messages (Gray) 
const secondary = chalk.gray;

// 🆕 Emphasized Text (White + Underline)
const highlight = chalk.white.underline;

// 🟢 Status (Green with Emoji)
const done = chalk.green("✔ Done!");

// ❌ Failure (Red with Emoji)
const failed = chalk.red("✖ Failed!");

// 🛠 Custom Styled Messages
const important = chalk.bgBlue.white.bold;
const alert = chalk.bgRed.white.bold;

// 🔹 Example Usage
// console.log(title("🚀 Welcome to Create-App-Setup CLI"));
// console.log(info("ℹ Initializing setup..."));
// console.log(success("✔ Successfully created the project!"));
// console.log(warning("⚠ Warning: This action cannot be undone."));
// console.log(error("❌ Error: Failed to fetch data."));
// console.log(process("⏳ Processing... Please wait."));
// console.log(secondary("Tip: You can use --help for more options."));
// console.log(highlight("Note: Make sure Node.js is installed."));
// console.log(important("📌 This is an important message!"));
// console.log(alert("🚨 Critical Error! Check logs."));
// console.log(done);
// console.log(failed);

export {
  alert,
  chalk,
  done,
  error,
  failed,
  highlight,
  important,
  info,
  process,
  secondary,
  success,
  title,
  warning,
};
