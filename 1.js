const fs = require('fs');
const path = require('path');

// 1. 定义文件内容 (使用反斜杠 ` 符号以支持多行)
const files = {
  'index.html': `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>YunShare - 瞬间的资源站</title>
  <link rel="stylesheet" href="https://cdn.staticfile.org/docsify/4.13.1/themes/vue.css">
</head>
<body>
  <div id="app">资源加载中...</div>
  <script>
    window.$docsify = {
      name: 'YunShare',
      loadSidebar: true,
      subMaxLevel: 2,
      search: {
        placeholder: '搜索资源...',
        noData: '找不到结果',
        depth: 6
      }
    }
  </script>
  <script src="https://cdn.staticfile.org/docsify/4.13.1/docsify.min.js"></script>
  <script src="https://cdn.staticfile.org/docsify/4.13.1/plugins/search.min.js"></script>
</body>
</html>`,

  '_sidebar.md': `* [🏠 首页](README.md)
* [📁 网盘分享汇总](README.md)
* [💿 NAS 专区]
  * [521. Mac安装飞牛NAS系统](nas-fnos.md)
  * [512. 绿联NAS在线播放4K内容](nas-ugreen.md)
* [🎬 影音娱乐]
  * [516. 115网盘观影插件](115-plugin.md)
  * [513. VidHub原盘播放支持](vidhub.md)
* [🛠️ 实用工具]
  * [515. ZRAM存储寿命优化](zram.md)
  * [482. 安卓手机镜像工具](scrcpy.md)`,

  'README.md': `# ☁️ YunShare 资源站

> 欢迎来到瞬间的资源分享站。

## 📢 资源汇总
* **夸克网盘专属资源包**：[点击跳转保存](https://pan.quark.cn/s/cc279159e470)
* **推广支持**：UID (1129057399) 已绑定生效。

---
### 💡 使用说明
* 使用左上角的搜索框可以快速定位资源。`,

  '.nojekyll': ''
};

// 2. 执行生成逻辑
console.log('开始生成 YunShare 项目文件...');

Object.entries(files).forEach(([fileName, content]) => {
  try {
    fs.writeFileSync(path.join(process.cwd(), fileName), content);
    console.log('✅ 已生成: ' + fileName);
  } catch (err) {
    console.error('❌ 生成失败: ' + fileName, err);
  }
});

console.log('\n✨ 生成完成！');