import {Question} from 'inquirer'
export const questions:any=[
    {
        type:"list",
        name:"framework",
        message:"Choose the Framework",
        choices:["Next" , "React"],
        default:"React",
    },
    {
        type:"list",
        name:"language",
        message:"Choose the Langauge",
        choices:["Javascript" , "Typescript"],
        default:"Javascript",
    },
    {
        type:"boolean",
        name:"prettier",
        message:"Do you want to use Prettier",
        default:false
    },
    {
        type:"boolean",
        name:"storybook",
        message:"Do you want to use storybook",
        default:false
    },
    {
        type:"boolean",
        name:"eslint",
        message:"Do you want to use eslint",
        default:false
    },
    {
        type:"boolean",
        name:"husky",
        message:"Do you want to use husky",
        default:false
    },
    {
        type:"list",
        name:"testingTool",
        message:"Choose one for testing",
        choices:["jest" ,"cypress" ,"none"],
        default:"jest"
    },

]