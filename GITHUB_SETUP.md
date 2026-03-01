# GitHub 配置指南

## 1. 在 GitHub 创建新仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 **+** → **New repository**
3. 填写：
   - **Repository name**: `personal-website` 或 `shuwen-ge.github.io`（后者可启用 GitHub Pages）
   - **Description**: Personal portfolio for academic & job applications
   - **Visibility**: Public
   - **不要**勾选 "Add a README"（本地已有）
4. 点击 **Create repository**

## 2. 本地关联并推送

在项目目录执行：

```bash
# 添加所有文件
git add .

# 首次提交
git commit -m "Initial commit: personal website with Next.js"

# 添加远程仓库（将 YOUR_USERNAME 和 REPO_NAME 替换为你的 GitHub 用户名和仓库名）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

## 3. 示例（假设用户名为 gesuwen）

```bash
git remote add origin https://github.com/gesuwen/personal-website.git
git branch -M main
git push -u origin main
```

## 4. 后续更新

```bash
git add .
git commit -m "Update: 描述你的修改"
git push
```

## 5. 部署到 Vercel

推送完成后：

1. 访问 [vercel.com](https://vercel.com)，用 GitHub 登录
2. **Add New** → **Project**
3. 选择刚创建的仓库，点击 **Import**
4. 保持默认配置，点击 **Deploy**
5. 部署完成后会得到 `https://xxx.vercel.app` 链接

---

**提示**：若使用 `shuwen-ge.github.io` 作为仓库名，GitHub 会识别为用户站点，但 Vercel 部署更推荐使用独立仓库名（如 `personal-website`），以便自定义域名和配置。
