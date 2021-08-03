const chalk = require("chalk");

exports.person = function (data) {
    console.log("\n----------------------------------------");
    console.log("Person:\n");
    console.log(`ID: ${data.id}`);
    console.log(`Name: ${chalk.blue.bold(data.name)}`);
    console.log(`Birthday: ${data.birthday} ${chalk.gray("|")} ${data.place_of_birth}`);
    
    if (data.known_for_department === "Acting") {
      console.log(`Department: ${chalk.magenta(data.known_for_department)}`);
    }
    
    console.log(chalk.white("Biography: ") + chalk.blue.bold(data.biography));
    
    if (data.also_known_as.length > 0) {
      console.log("\n");
      console.log("\n");
      console.log("Also known as:\n");
      data.also_known_as.forEach((name) => {
        console.log(name + "\n");
      });
    } else {
      console.log("\n");
      console.log(
        chalk.yellow(data.name + " doesn't have any alternate names\n")
      );
    }
  };