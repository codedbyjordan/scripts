#!/usr/bin/env zx

const url = process.argv[3];
$.verbose = false

if(!url) { 
  console.log("Command usage: short [url]");
} else {
  try {
    const response = await fetch(url);
    console.log(response.url);
  } catch(e) {
    if(e.code === 'ERR_INVALID_URL') {
      console.log(chalk.red(chalk.bold("Error: Invalid URL!")))
    }
  }
}