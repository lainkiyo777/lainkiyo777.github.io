# Personal Blog

一个 GitHub Pages 友好的静态个人博客首页，风格参考 `victorchen96.github.io` 的信息架构：个人介绍、近况、关注方向、文章、项目和笔记入口。

线上仓库：

```text
https://github.com/lainkiyo777/personal-blog
```

## 本地预览

直接打开 `index.html` 即可预览。也可以在这个目录运行任意静态服务器，例如：

```powershell
python -m http.server 4321
```

然后访问 `http://localhost:4321`。

## 修改内容

- `index.html`: 修改姓名、简介、社交链接、文章、项目和笔记内容。
- `styles.css`: 修改颜色、排版和响应式布局。
- `app.js`: 修改中英文文案、筛选标签和交互逻辑。
- `assets/cover.png`: 替换成你的头像、校园照、工作台照片或个人品牌图。

## 部署到 GitHub Pages

这个仓库包含 GitHub Actions 工作流：

```text
.github/workflows/deploy-pages.yml
```

它会把仓库根目录作为 GitHub Pages 站点发布。当前仓库是 `lainkiyo777/personal-blog`，所以项目站点地址会是：

```text
https://lainkiyo777.github.io/personal-blog/
```

第一次使用时，在 GitHub 仓库页面打开：

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

如果后续想升级内容管理方式，可以接入 Astro/Next.js/Markdown 自动生成文章页。
