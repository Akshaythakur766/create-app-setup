const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"], // Ensure your main CLI file is here
    outfile: "dist/index.js",
    bundle: true,
    platform: "node",
    target: "node20",
    minify: true,
    sourcemap: false,
    loader: { ".ts": "ts" }, // Load TypeScript files
    banner: { js: "#!/usr/bin/env node" }, // Required for CLI execution
  })
  .catch(() => process.exit(1));
