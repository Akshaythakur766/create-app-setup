import { info, title } from "../helper/Chalk";

export const questions: any = [
  // Framework

  // {
  //   type: "list",
  //   name: "techEnd",
  //   message: `Choose the ${title("Tech Stack")}`,
  //   choices: ["Front-End", "Back-End", "Full-Stack"],
  //   default: "React",
  // },
  // {
  //   type: "list",
  //   name: "stack",
  //   message: `Choose the ${title("Full Stack Type")}`,
  //   choices: [
  //     "MERN (MongoDB , Express , React , Node)",
  //     "MEAN (MongoDB , Express , Angular , Node)",
  //     "MEVN (MongoDB , Express , Vue , Node)",
  //     "Jamstack",
  //     "T3 Stack (Next.js , Tailwind CSS , tRPC ,Prisma , Yup/Zod)",
  //   ],
  //   default: "React",
  //   when: (answers: any) => answers.techEnd === "Full-Stack",
  // },

  {
    type: "list",
    name: "framework",
    message: `Choose the ${title("Framework")}`,
    choices: ["Next", "React"],
    default: "React",
  },
  // App Router in Next js
  // {
  //   type: "list",
  //   name: "AppRouter",
  //   message: `Would you like to use ${title("AppRouter?")} `,
  //   choices: ["No", "Yes"],
  //   default: "Yes",
  //   filter: (val: string) => val === "Yes",
  //   when: (answers: any) => answers.framework === "Next",
  // },
  // Source Directory
  // {
  //   type: "list",
  //   name: "srcDir",
  //   message: `Would you like to use ${title("src?")} `,
  //   choices: ["No", "Yes"],
  //   default: "No",
  //   filter: (val: string) => val === "Yes",
  //   when: (answers: any) => answers.framework === "Next",
  // },
  // TurboPack
  {
    type: "list",
    name: "turbopack",
    message: `Would you like to use ${title("turboPack")} for development `,
    choices: ["No", "Yes"],
    default: "No",
    filter: (val: string) => val === "Yes",
    when: (answers: any) => answers.framework === "Next",
  },
  // Language
  {
    type: "list",
    name: "language",
    message: `Choose the ${title("Language")}`,
    choices: ["Javascript", "Typescript"],
    default: "Javascript",
  },
  // Prettier
  {
    type: "list",
    name: "prettier",
    message: `Would you like to use ${title("Prettier?")} `,
    choices: ["No", "Yes"],
    default: "No",
    filter: (val: string) => val === "Yes",
  },
  //Storybook
  // {
  //   type: "list",
  //   name: "storybook",
  //   message: `Would you like to use ${title("Storybook?")} `,
  //   choices: ["No", "Yes"],
  //   default: "No",
  //   filter: (val: string) => val === "Yes",
  // },
  // Eslint
  {
    type: "list",
    name: "eslint",
    message: `Would you like to use ${title("ESLint?")} `,
    choices: ["No", "Yes"],
    default: "No",
    filter: (val: string) => val === "Yes",
  },
  // Husky
  {
    type: "list",
    name: "husky",
    message: `Would you like to use ${title("Husky?")} `,
    choices: ["No", "Yes"],
    default: "No",
    filter: (val: string) => val === "Yes",
  },
  // Testing Tools
  // {
  //   type: "list",
  //   name: "testingTool",
  //   message: `Choose one for ${title("Testing")}`,
  //   choices: ["jest", "cypress", "none"],
  //   default: "jest",
  // },
  // Compiler
  // {
  //   type: "list",
  //   name: "compiler",
  //   message: `Choose one ${title("Compiler")}`,
  //   choices: ["SWC(Speedy Web Compiler)", "babel"],
  //   default: "babel",
  // },
  // Package Manager
  {
    type: "list",
    name: "packageManager",
    message: `Choose one ${title("Package Manager")}`,
    choices: ["npm", "yarn", "pnpm", "bun", "none"],
    default: "npm",
  },
];
