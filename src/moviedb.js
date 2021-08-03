#!/usr/bin/env node

const { Command } = require("commander");
const req = require("./utils/httprequest");
const ora = require("ora");
require("dotenv/config");

const program = new Command();
program.version("0.0.1");

program
  .command("get-persons")
  .description("Make a network request to fetch most popular persons")
  .action(function handleAction() {
    console.log("hello-world");
  });

program
  .command("get-person")
  .description("Make a network request to fetch the data of a single person")
  .requiredOption("-i, --id <id> ", "The id of the person")
  .action(function handleAction(options) {
    ora("Fetching the person data...").start();
    req.httprequest(`person/${options.id}`);
  });

program
  .command("get-movies")
  .description("Make a network request to fetch movies")
  .action(function handleAction() {
    console.log("hello-world");
  });

program
  .command("get-movie")
  .description("Make a network request to fetch the data of a single person")
  .action(function handleAction() {
    console.log("hello-world");
  });

// error on unknown commands

program.parse(process.argv);
