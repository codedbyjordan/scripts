#!/bin/sh

echo Installing zx...

npm install -g zx > /dev/null

echo Installing scripts...
mkdir $HOME/.scripts/
mkdir $HOME/.scripts/helpers
echo "export PATH=${PATH}:${HOME}/.scripts" >> ~/.zshrc

# remove all file extensions so scripts can be ran as 'example' instead of 'example.mjs'
for file in *.mjs; do
    cp -- "$file" "$HOME/.scripts/${file%%.mjs}"
done

cp helpers/*.mjs $HOME/.scripts/helpers
source $HOME/.zshrc

echo Done\!
