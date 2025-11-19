import { build } from "vite";

async function run() {
  try {
    await build({
      build: {
        outDir: "dist",
      },
    });
    console.log("✔ Vite build finished");
  } catch (err) {
    console.error("❌ Vite build failed", err);
    process.exit(1);
  }
}

run();
