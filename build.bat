@echo off

npm install
npm run compile

npx vsce package
