#!/bin/zsh

echo Installing zx...

npm install -g zx > /dev/null

echo Installing scripts...
[ ! -d "$HOME/.scripts/" ] && mkdir $HOME/.scripts/ && echo "Successfully created scripts folder"
[ ! -d "$HOME/.scripts/helpers" ] && mkdir $HOME/.scripts/helpers && echo "Successfully created helpers folder"
echo "export PATH=${PATH}:${HOME}/.scripts" >> ~/.zshrc

# remove all file extensions so scripts can be ran as 'example' instead of 'example.mjs'
for file in *.mjs; do
    cp -- "$file" "$HOME/.scripts/${file%%.mjs}"
done

cp helpers/*.mjs $HOME/.scripts/helpers
chmod +x $HOME/.scripts
source $HOME/.zshrc

echo Done\!
