
# create-app-setup

A CLI tool to quickly set up frontend & backend projects with various frameworks.

`create-app-setup` simplifies the process of setting up new projects by providing an easy-to-use command-line interface that can create project templates with a variety of frameworks and configurations.

## Features

- Quickly set up frontend and backend projects.
- Supports popular frameworks like React, Next.js, Vite, etc.
- Configurable setup options like TypeScript, ESLint, Prettier, Jest, Storybook, and more.
- Cross-platform support (Windows, Linux, macOS).
- Customizable configurations for various tech stacks.

## Installation

You can install `create-app-setup` globally using npm or yarn:

```bash
npm install -g create-app-setup
```

Or use it directly without installing globally:

```bash
npx create-app-setup
```

## Usage

Once installed, you can use `create-app-setup` to initialize a new project. The CLI will guide you through various configuration options to set up your project.

### Example Command:

```bash
create-app-setup my-project
```

This command will start the setup for a new project called `my-project`. The tool will prompt you to choose frameworks, languages, package managers, and more.

### Setup Options

1. **Choose the Framework**: React, Next.js, Vite, etc.
2. **Choose the Language**: JavaScript or TypeScript.
3. **Add ESLint**: Choose whether to add ESLint for linting.
4. **Add Prettier**: Choose whether to add Prettier for code formatting.
5. **Add Storybook**: Enable Storybook for component development.
6. **Testing Setup**: Choose your testing framework, like Jest.
7. **Choose Package Manager**: npm, yarn, or pnpm.
8. **Choose Compiler**: Babel, SWC, etc.

Once the setup is complete, `create-app-setup` will create a project directory and install the necessary dependencies based on your selections.

## CLI Commands

### `create-app-setup <project-name>`

Starts the setup for a new project. It will prompt you for options and then generate the project files.

Example:

```bash
create-app-setup my-nextjs-app
```

This command will create a `my-nextjs-app` directory and start the setup process.

### `npm link`

If you are working on the development version of `create-app-setup`, you can link it to your local npm setup for testing.

```bash
npm run link-cli
```

### `npm run build`

Build the project (TypeScript compilation, etc.).

```bash
npm run build
```

## Development

If you want to contribute or develop the tool locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Akshaythakur766/create-app-setup.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Link the project for local development:

   ```bash
   npm run link-cli
   ```

5. Run the tool locally:

   ```bash
   npx create-app-setup my-local-project
   ```

## License

MIT License. See [LICENSE](LICENSE) for details.
