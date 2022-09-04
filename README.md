# note_docusaurus

> 一个适用于构建个人 Wiki 的 [Docusaurus 2](https://docusaurus.io/zh-CN/docs) 工程示例。

[仓库地址](https://github.com/RocShi/note_docusaurus)，效果图：

![note_docusaurus 示例页面](https://image.shipengx.com/note_docusaurus%20%E7%A4%BA%E4%BE%8B%E9%A1%B5%E9%9D%A2.png)

## 特性

- 关闭了 blog，只保留了 docs
- 可隐藏、可自动折叠的侧边栏目录
- TOC 栏显示 markdown 中的二级标题（可配置，docusaurus 原生支持显示 2-6 级）
- 开启 KaTeX 数学公式支持
- 使用 [docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) 插件提供本地离线全文搜索支持，无需 Algolia

## 前提

已安装 Node.js 环境（v16.14 或以上版本，推荐 v16.15.1），推荐使用 [nvm](https://github.com/nvm-sh/nvm) 进行 Node.js 的多版本管理，具体方法参考 [《使用 nvm 进行 Node.js 版本管理》](https://zhuanlan.zhihu.com/p/558784826)。

## 使用方法

1. 克隆仓库并进入仓库目录下
2. 自定义 `docusaurus.config.js` 中的少量配置，如网站基本信息、导航栏等，很简单，更多设置可参考[官方 API 文档](https://docusaurus.io/zh-CN/docs/cli)
3. 在 `docs` 目录下进行 markdown 创作，`docs` 根目录下应存在一个 markdown 文件作为网站的初始页面
4. 安装依赖包（仅首次需要）

   ```bash
   npm install
   ```

5. 构建 HTML 页面

   ```bash
   npm run build
   ```

6. 预览

   ```bash
   npm run serve
   ```

   打开浏览器，输入地址 `http://localhost:3000` 即可。

## \*其它

如果使用 nvm 安装了 Node.js v16.15.1 得话，可通过执行 `deploy.sh` 脚本代替使用方法中的步骤 4 和步骤 5：

```bash
./deploy.sh
```

`deploy.sh` 脚本会在构建完成后删除搜索引擎优化（Search Engine Optimization，SEO）相关文件。
