# Shuwen Ge 个人网站 - 专业设计规划

## 一、设计理念 (Design Philosophy)

**核心定位**: Builder & Sharer — 突出您作为**构建者**（独立完成研究框架、复现与改进模型）与**分享者**（论文发表、知识传播）的双重身份，展现极强的 self-motivation。

**目标受众**: 学业申请、科研申请、就业申请（OpenAI、Anthropic 等 AI 公司）

---

## 二、技术架构

| 技术 | 选择 | 理由 |
|------|------|------|
| 框架 | Next.js 14 (App Router) | Vercel 原生支持、SEO 友好、SSG 适合静态个人站 |
| 样式 | Tailwind CSS | 快速实现响应式、易维护 |
| 语言 | TypeScript | 类型安全、专业代码质量 |
| 部署 | Vercel | 一键部署、全球 CDN、免费 SSL |

---

## 三、页面结构

### 3.1 左侧边栏 (Sidebar)
- **头像**: 圆形头像（可后续替换）
- **姓名**: Shuwen Ge
- **副标题**: AI Researcher & Creator · Building & Sharing
- **社交链接**: LinkedIn | GitHub | Email | X (Twitter)
- **导航**: 主页 | 研究项目 | 发表与分享 | 联系

### 3.2 主内容区 (Main Content)

**1. 个人简介 (About)**
- 教育：西安理工大学 电子与信息工程 (2023-2027)
- 研究经历：Rochester (Audio) → Minnesota (LLM) → Brown (Bioacoustics)
- 技能：WSL/GPU 训练、PyTorch、音频处理、LLM 推理与对齐
- 语言：英语、日语、法语
- 特质：Self-motivated builder，从零搭建完整研究框架

**2. AI 作品集 (Research Projects)**
| 项目 | 描述 | 亮点 |
|------|------|------|
| Fin Whale Vocalization Detection | NeurIPS 2025 Workshop | SSL 首次应用于鲸鱼检测，SincNet 提升 AUROC 0.868→0.914 |
| Semantic Alignment via DPO | ACL ARR 2026 | CLIP 分数 +8~12%，95.8% 人类偏好 |
| Open-Unmix Audio Separation | Rochester 研究 | 复现并增强 XLSTM/SLSTM/MLSTM |

**3. 分享 AI (Publications & Sharing)**
- NeurIPS 2025 Workshop 论文
- ACL ARR 投稿
- 可扩展：视频、博客、技术分享链接

**4. 联系 (Contact)**
- 留言表单或邮箱链接

---

## 四、响应式策略

- **Desktop (>1024px)**: 双栏布局，左侧固定 280px
- **Tablet (768-1024px)**: 侧栏可折叠为顶部导航
- **Mobile (<768px)**: 汉堡菜单 + 单栏垂直布局，卡片全宽

---

## 五、视觉风格

- **配色**: 白底 + 深灰文字 + 蓝色/靛蓝强调（专业、学术）
- **字体**: Inter / Geist（现代、可读）
- **卡片**: 轻微阴影、圆角，hover 微动效
- **图标**: Lucide React（轻量、一致）

---

## 六、GitHub 仓库结构（建议）

```
personal_website2026/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Sidebar.tsx
│   ├── ProjectCard.tsx
│   └── ...
├── public/
│   └── avatar.jpg
├── package.json
├── tailwind.config.ts
└── vercel.json (可选)
```

---

## 七、后续扩展

1. 添加真实头像与项目截图
2. 链接 GitHub 仓库到各项目卡片
3. 添加博客/视频分享模块
4. 多语言支持（中/英切换）
5. 分析统计（Vercel Analytics）
