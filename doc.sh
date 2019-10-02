#!/usr/bin/env zsh
yarn run docs
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m 'update'
git push origin gh-pages
git checkout -
