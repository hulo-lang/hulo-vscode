<h1 align="center">欢迎使用 Hulo-VSCode 👋</h1>

<center>

![Hulo](https://img.shields.io/badge/Hulo-%238866E9.svg?logoColor=white&style=for-the-badge) [![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/NodeJS-%236DA55F.svg?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-%230078d7.svg?logo=visual-studio-code&logoColor=white&style=for-the-badge)](https://code.visualstudio.com/)

</center>

---

[English](README.md) | 简体中文

> Hulo-VSCode 是 [Hulo 语言](https://github.com/hulo-lang/hulo) 的官方 VSCode 扩展。Hulo 是一种现代 DSL，支持编译为 Bash、PowerShell 和 VBS。  
> 本插件为 Hulo 脚本提供语法高亮、语言支持以及更好的编辑体验。

## 🚀 快速开始

### 从 VSCode 插件市场安装

1. 打开 VSCode。
2. 点击左侧边栏的扩展图标进入 **扩展视图**。
3. 搜索 **Hulo Language Support**。
4. 点击 **安装**。

### 从源码安装

```sh
git clone https://github.com/hulo-lang/hulo-vscode
cd hulo-vscode
npm install
npm run compile
npx vsce package
```

然后：

1. 以上命令会生成一个 `.vsix` 文件（例如：`hulo-vscode-1.0.0.vsix`）。
2. 打开 VSCode。
3. 按下 `Ctrl+Shift+P`（macOS 上为 `Cmd+Shift+P`）打开命令面板。
4. 输入并运行：**Extensions: Install from VSIX...**
5. 选择生成的 `.vsix` 文件。
6. 按提示重新加载窗口。

此时你应该已经启用了 Hulo 的语法高亮、诊断和其他语言支持功能。

## ✨ 功能特性

- [x] 语法高亮
- [ ] 智能提示（IntelliSense）
- [ ] 诊断 / 错误提示
- [ ] 悬停信息 & 跳转定义

## 🤝 参与贡献

我们欢迎各种形式的贡献，包括但不限于：

* 报告 Bug
* 提交 Issue 或功能请求
* 提交 Pull Request

请查看 [issues 页面](https://github.com/hulo-lang/hulo-vscode/issues) 并遵循贡献指南。

## 📝 许可证

本项目采用 MIT 许可证，详见 [LICENSE](LICENSE)。