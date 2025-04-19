@echo off

npm install
npm run compile

cd client
npx vsce package
