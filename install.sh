#!/bin/sh

mkdir $HOME/.scripts/
mkdir $HOME/.scripts/helpers
echo "export PATH=${PATH}:${HOME}/.scripts" >> ~/.zshrc

for file in *.mjs; do
    cp -- "$file" "$HOME/.scripts/${file%%.mjs}"
done

cp helpers/*.mjs $HOME/.scripts/helpers
source $HOME/.zshrc
