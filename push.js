// Version: 1.1.0 - 修复“无变动报错”并强制清理本地堆积任务
const { execSync } = require('child_process');

// 1. 获取当前时间作为默认备注
const now = new Date();
const timeStr = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
const defaultMsg = `日常资源更新: ${timeStr}`;

// 2. 获取命令行参数
const commitMsg = process.argv[2] || defaultMsg;

try {
  console.log('🚀 正在启动 8972 同步系统...');

  // 第一步：添加所有变更
  execSync('git add .', { stdio: 'inherit' });

  // 第二步：检查本地是否有文件变动
  const status = execSync('git status --porcelain').toString().trim();

  if (status) {
    console.log('📦 发现文件变动，正在打包...');
    console.log(`📝 提交备注: "${commitMsg}"`);
    execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' });
  } else {
    console.log('💡 本地工作区很干净，无需打包。');
  }

  // 第三步：检查本地是否领先于远程（处理那 2 个存货）
  console.log('☁️  正在建立云端连接...');
  
  // 备选：如果你经常遇到 Connection reset，可以在这里取消注释强制设置代理
  // execSync('git config --global http.proxy http://127.0.0.1:7890');

  try {
    console.log('📡 正在将本地所有“存货”推送到 GitHub...');
    execSync('git push -f', { stdio: 'inherit' });

    console.log('\n✅ 【大功告成！】');
    console.log('--------------------------------------------------');
    console.log('GitHub 已收到！部署系统现在应该已经开始自动“煮面”了。');
    console.log('大约 1 分钟后，刷新 89729981.xyz 即可看效。');
    console.log('--------------------------------------------------');
  } catch (pushError) {
    console.error('\n❌ 【推送失败，又是网络问题！】');
    console.log('提示：请检查你的“魔法”工具是否开启，或者终端是否挂上了代理。');
  }

} catch (error) {
  console.error('\n❌ 【致命错误，大哥！】');
  console.log('错误信息：', error.message);
}