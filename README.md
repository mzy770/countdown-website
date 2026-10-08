# AETHER · 临界

深空青色全息 HUD 倒计时与常驻待办控制台。

## 开发

技术栈：React 19、Tailwind CSS 4、Framer Motion、Three.js、Vite。

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

## 构建与部署

```sh
npm run build
```

构建将生产入口与资源复制到仓库根目录的 `index.html` 和 `assets/`，兼容现有 GitHub Pages 的 `main / (root)` 部署设置。开发源码在 `source/`，不要直接编辑生成的生产文件。提交构建结果后 Pages 自动更新。使用相对资源路径，支持 `/countdown-website/` 子目录。

数据保存在当前浏览器 localStorage，兼容第一版 `aether-v1` 数据；无需账号或后端。目标日期使用设备本地时区。音效默认关闭，用户点击启用。WebGL 不可用时保留 CSS HUD 背景和所有功能；系统减少动态效果设置会关闭装饰动画与粒子爆散。Orbitron 字体随构建资源自托管，无需访问外部字体服务。

## 设计修改清单

- 背景：冰白替换为深空黑 `#030b13`，面板为低透明深蓝 `#081a26`。
- 核心：青色 `#5df4f0` 和近白青 `#9ffffb`，使用多层柔和 glow 保留数字边缘；辅助文字使用灰蓝 `#6f98a8`。
- 字体：倒计时 Orbitron / Courier New；HUD 数据为等宽字体，中文使用系统字体保证可读性。
- 容器：透视玻璃面板、发光角标、扫描线、细网格、底部投影环。
- 装饰：Three.js 空间光环与粒子、雷达扫描、信号波形、时间数据轨迹。
- 待办：主界面常驻任务队列，桌面双列布局，手机上下排列；可添加、完成并自动保存。
- 反馈：数字切换投影扰动、完成任务模糊消散和 3D 立方体能量扩散，低频柔和音效可选。
