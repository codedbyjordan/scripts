#!/usr/bin/env zx
import { $, fs } from "zx";

$.verbose = false;

const aliasName = process.argv[3];
const aliasCommand = process.argv[4];
const alias = `${aliasName}=${aliasCommand}`;

let aliasesFile = `${process.env.HOME}\/.zshrc`;

const ohMyZsh = process.env.ZSH ? true : false;

if (ohMyZsh) {
  aliasesFile = `${process.env.ZSH}\/custom\/aliases.zsh`;
  if (!fs.existsSync(aliasesFile)) fs.writeFileSync(aliasesFile, "");
}

if (argv._.length <= 1) {
  console.log("Command usage: new-alias [name] [command]");
} else {
  try {
    await $`cat ${aliasesFile} | grep ${alias}`;
    console.log("Alias already exists, so it was not added");
  } catch (e) {
    await $`echo ${alias} >> ${aliasesFile}`;
  }
}
