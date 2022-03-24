#!/usr/bin/env zx
import exists from "./helpers/exists.mjs"

$.verbose = false;

const aliasName = process.argv[3];
const aliasCommand = process.argv[4];
const alias = `alias ${aliasName}="${aliasCommand}"`;

let aliasesFile = `${process.env.HOME}\/.zshrc`;

const ohMyZsh = process.env.ZSH ? true : false;

if (ohMyZsh) {
  aliasesFile = `${process.env.ZSH}\/custom\/aliases.zsh`;
  const aliasFileExists = await exists(aliasesFile);
  if (!aliasFileExists) await $`touch ${aliasesFile}`;
}

if (argv._.length <= 1) {
  console.log("Command usage: new-alias [name] [command]");
} else {
  try {
    await $`cat ${aliasesFile} | grep ${alias}`;
    console.log(chalk.yellow("Alias already exists, so it was not added"));
  } catch (e) {
    await $`echo ${alias} >> ${aliasesFile}`;
    console.log(chalk.green(`Success! Alias ${aliasName} was successfully added.`))
  }
}
