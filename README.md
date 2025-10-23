# SMS 接码平台前端网页

## 项目概述

这是一个纯 JavaScript 实现的单页应用 (SPA)，用于模拟 SMS 接码平台的用户界面。项目聚焦于前端交互，包括动态数据渲染、模态框详情查看和平滑页面滚动。采用 Node.js 风格的深色主题，使用 IBM Plex Mono 字体，整个应用为静态文件，自包含无需后端服务器。适合原型开发、演示或快速部署。

### 核心特性
- **动态数据渲染**：基于 `mockNumbers` 数组模拟虚拟手机号数据，自动生成卡片视图（包括状态、短信列表和交互按钮）。支持数据更新时实时刷新。
- **模态框交互**：点击“查看详情”打开可滚动的短信详情弹窗，支持按钮关闭或背景点击关闭。
- **平滑导航**：锚点链接（如 `#numbers`）使用浏览器原生 API 实现丝滑滚动，提升长页面体验。
- **响应式设计**：网格布局适配不同屏幕，纯前端运行于现代浏览器。

数据目前使用静态 mock，可轻松扩展为 API 集成（如 Fetch 调用后端）。

## 技术栈
- **HTML5**：结构与语义化标签。
- **CSS3**：Flexbox/Grid 布局、固定定位模态、深色主题。
- **Vanilla JavaScript**：无框架，ES6+ 特性（map、addEventListener 等）。
- **外部依赖**：Google Fonts (IBM Plex Mono)。

## 文件结构
```
sms-receiver-frontend/
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore (可选)
```
## 快速启动

### 本地运行
1. 克隆或下载仓库：
```
git clone https://github.com/yourusername/sms-receiver-frontend.git
cd sms-receiver-frontend
```
2. 在浏览器中打开 `index.html`（双击文件或使用 VS Code Live Server 扩展）。
3. 测试功能：导航滚动、点击卡片打开模态。

### 部署到 GitHub Pages（免费托管）
1. 在 GitHub 创建新仓库（e.g., `sms-receiver-frontend`），上传文件到根目录。
2. 仓库设置 > Pages > Source: Deploy from branch > Branch: `main` > Save。
3. 访问 URL：`https://yourusername.github.io/sms-receiver-frontend/`（1-2 分钟生效）。

其他平台：Netlify/Vercel（拖拽上传文件夹）。

## 使用示例
- **查看号码列表**：页面加载后自动渲染卡片。示例卡片：
- 手机号：`+86 13800138000`
- 状态：`可用`
- 短信：`["验证码: 123456", "欢迎使用平台"]`
- **打开详情**：点击按钮，模态显示完整短信列表。
- **自定义数据**：编辑 `script.js` 中的 `mockNumbers` 数组，保存后刷新浏览器。

## 开发与扩展
- **添加真实数据**：替换 `mockNumbers` 为 `fetch('/api/numbers')`，集成后端 API。
- **增强功能**：
- 实时更新：使用 WebSocket 监听短信变化。
- 搜索/过滤：添加输入框过滤号码。
- PWA 支持：添加 manifest.json 实现离线访问。
- **构建工具**：可选集成 Parcel/Webpack 压缩文件。

### 贡献指南
1. Fork 仓库。
2. 创建分支：`git checkout -b feature/new-feature`。
3. 提交更改：`git commit -m "Add new feature"`。
4. Push 并 PR：欢迎反馈与代码审查！

## 故障排除
- **页面不加载**：检查控制台 (F12) – 常见：路径错误（确保 `href="styles.css"`）。
- **模态不响应**：确认 JS 事件绑定（`DOMContentLoaded`）。
- **滚动卡顿**：旧浏览器兼容 – 添加 polyfill 或降级为 `window.scrollTo`。
- **字体未加载**：网络问题 – 可替换为本地字体文件。

## 许可证
MIT License – 自由使用、修改和分发。详见 [LICENSE](LICENSE)（若未添加，可自行创建）。

---

*项目创建于 2025 年 10 月 23 日。反馈请 Issues 或联系 