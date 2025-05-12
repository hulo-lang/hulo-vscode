<h1 align="center">Welcome to Hulo-VSCode 👋</h1>

<center>

![Hulo](https://img.shields.io/badge/Hulo-%238866E9.svg?logoColor=white&style=for-the-badge) [![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/NodeJS-%236DA55F.svg?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-%230078d7.svg?logo=visual-studio-code&logoColor=white&style=for-the-badge)](https://code.visualstudio.com/)

</center>

---

English | [简体中文](README.zh-CN.md)

> Hulo-VSCode is the official VSCode extension for the [Hulo language](https://github.com/hulo-lang/hulo), a modern DSL that compiles to Bash, PowerShell, and VBS.  
> This plugin provides syntax highlighting, language support, and a better editing experience for Hulo scripts.

## 🚀 Getting Started

### From the VSCode Marketplace

1. Open VSCode.
2. Go to the **Extensions** view by clicking the Extensions icon in the Activity Bar on the side of the window.
3. Search for **Hulo Language Support**.
4. Click **Install**.

### From source

```sh
git clone https://github.com/hulo-lang/hulo-vscode
cd hulo-vscode
npm install
npm run compile
npx vsce package
```
Then:

1. This will generate a `.vsix` file (e.g., `hulo-vscode-1.0.0.vsix`).
2. Open VSCode.
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
4. Run the command: **Extensions: Install from VSIX...**
5. Select the generated `.vsix` file.
6. Reload the window when prompted.

You should now see Hulo syntax highlighting, diagnostics, and other language features enabled.

## ✨ Features

- [x] Syntax highlighting
- [ ] IntelliSense
- [ ] Diagnostics / error reporting
- [ ] Hover & go-to-definition

## 🤝 Contributing

We welcome all kinds of contributions, including but not limited to:

* Reporting bugs
* Submitting issues or feature requests
* Sending pull requests

Please check the [issues page](https://github.com/hulo-lang/hulo-vscode/issues) and follow the contribution guidelines.

## 📝 License

This project is licensed under the MIT License, see [LICENSE](LICENSE) for details.