const fs = require("fs");

module.exports = process.stdin.on("data", (data) => {
  data = data.toString().trim();
  if (data === "ls") {
    fs.readdir("./", "utf8", (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write(files.join("\n"));
        process.stdout.write("\nprompt >\n");
      }
    });
  }
});
