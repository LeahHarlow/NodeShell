//
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  data = data.toString().trim();
  if (data === 'pwd' ){
    process.stdout.write(process.cwd())
    // console.log(process.cwd())
    // process.stdout.write(data);
  }
  

  // process.stdout.write(data);
  process.stdout.write("\nprompt > ");
});
