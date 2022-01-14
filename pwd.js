module.exports = process.stdin.on("data", (data) => {
  data = data.toString().trim();
  if (data === "pwd") {
    process.stdout.write(process.cwd());
  }
  process.stdout.write("\nprompt >\n");
});
