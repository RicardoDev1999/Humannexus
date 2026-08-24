import { spawn } from "node:child_process";
import http from "node:http";

const command = process.platform === "win32" ? "npm.cmd" : "npm";
const astro = spawn(command, ["run", "dev", "--", "--host", "127.0.0.1"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

const url = "http://127.0.0.1:4321/humannexus";
let ready = false;

function checkReady() {
  const request = http.get(url, (response) => {
    response.resume();
    if (response.statusCode && response.statusCode < 500) {
      ready = true;
      clearInterval(timer);
    }
  });
  request.on("error", () => {});
  request.setTimeout(1000, () => request.destroy());
}

const timer = setInterval(() => {
  if (!ready) checkReady();
}, 250);
checkReady();

function stop() {
  clearInterval(timer);
  if (!astro.killed) astro.kill();
  process.exit(0);
}

process.on("SIGINT", stop);
process.on("SIGTERM", stop);
