# Rowan Lin — UI/UX Designer Portfolio

## 📋 Portfolio Overview

**Designer Name:** Rowan Lin  
**Role:** UI/UX Designer  
**Portfolio Tech Stack:** HTML5, CSS3, JavaScript, React (tweaks-panel.jsx)  
**Files Structure:** Single-page HTML project pages + centralized images/uploads folders

---

## 🎨 Projects Included

### 1. **FainTV** (`faintv.html`)
- **Type:** Voice-enabled TV streaming interface
- **Focus:** Voice interaction, elderly user accessibility, multi-platform (Mobile + TV)
- **Key Features:**
  - Voice search functionality ("Say a title, actor, or genre")
  - Mobile-to-TV handoff with QR code
  - Simplified checkout flow for elderly users
  - Call-to-action overlay design
  - Loading states and purchase confirmation flows
- **Assets:** Video demo + multiple screenshot mockups
- **File Size:** 62KB HTML
- **Status:** Complete case study with detailed UX research and visual design

### 2. **Genebook** (`genebook.html`)
- **Type:** [Design case study - genre/category system]
- **File Size:** 21KB HTML
- **Status:** Complete project page with structured layout

### 3. **Training for Life (TFL)** (`tfl.html`)
- **Type:** Fitness/training platform
- **File Size:** 18KB HTML
- **Status:** Complete case study

### 4. **Ai Cun Cell** (`aicuncell.html`)
- **Type:** [Design case study]
- **File Size:** 16KB HTML  
- **Status:** Complete project page

### 5. **Marilyn** (`marilyn.html`)
- **Type:** [Design case study]
- **File Size:** 15KB HTML
- **Status:** Complete project page

### 6. **Design System** (`design-system.html`)
- **Type:** Component/design system documentation
- **File Size:** 23KB HTML
- **Usage Notes:** Contains typography system, color tokens, component patterns
- **Status:** Complete documentation

---

## 📁 Asset Organization

### Images Folder (`/images`)
- FainTV mockups and UI screenshots
- Loading screens
- Task/user research visuals
- Key interaction flows (voice search, checkout, handoff)

### Uploads Folder (`/uploads`)
Contains comprehensive design process documentation:
1. **Loading & About** (1.1-1.2): Introduction and context
2. **Design Process** (1.3-1.4): Methodology overview
3. **User Research** (1.5-1.11): 
   - User interviews
   - Qualitative research findings
   - Competitive analysis
   - Empathy maps (2 versions)
4. **Interaction Design** (1.12-1.15): 
   - Storyboards
   - Task flows (4 variations)
5. **Visual Design** (1.16-1.19): 
   - Visual design iterations (4 versions)
   - Shopping process flow
6. **Testing & Feedback** (1.20-1.22):
   - Usability testing results
   - User feedback synthesis
   - Future outlook/ending

### Videos Folder
- `faintv-pain-old-tv-checkout.mp4`: Demonstration of elderly user pain point with old TV checkout

---

## 🔧 Technical Details

### Technology Stack
- **Frontend Framework:** HTML5 + CSS3 + Vanilla JavaScript
- **React Component:** `tweaks-panel.jsx` (20KB - likely for interactive controls/settings)
- **Design System:** Uses CSS custom properties (variables)
- **Typography:** Cormorant Garamond serif for project titles
- **Animation:** Custom cubic-bezier animations for fade-up effects

### Design Tokens Used
- `--fg`: Foreground color
- `--accent`: Accent color  
- Responsive sizing with clamp() for fluid typography

### File Versions
- **Backup folder:** Contains older versions of all HTML files (for version control reference)

---

## 📊 Project Statistics

| Item | Count |
|------|-------|
| Total Projects | 6 main projects |
| HTML Files | 8 (+ 8 backup versions) |
| Image Assets | 8+ screenshots |
| Upload Assets | 30+ design process artifacts |
| Videos | 1 demo |
| Total Size | ~95MB (mostly high-res images) |

---

## 🎯 Key Design Areas

Based on the file structure, Rowan Lin specializes in:

1. **User Research & Validation**
   - Comprehensive interview documentation
   - Empathy mapping
   - Competitive analysis
   - Usability testing

2. **Interaction Design**
   - Task flow mapping
   - Storyboarding
   - Voice interface design
   - Multi-platform interactions (mobile ↔ TV)

3. **Visual Design**
   - Iterative design refinement
   - Accessibility considerations (elderly users)
   - Shopping/commerce flows
   - System-wide visual consistency

4. **Design Systems**
   - Reusable component patterns
   - Design tokens and variables
   - Typography systems
   - Color/spacing guidelines

---

## 💡 Quick Reference for Claude Discussions

### When discussing FainTV
- Focus on elderly user accessibility challenge
- Reference the voice interaction feature
- Mention the mobile-to-TV handoff design
- Reference the research in /uploads folder (specifically 1.5-1.11)

### When discussing design process
- Rowan follows a structured UX methodology
- Strong emphasis on user research before design
- Iterative visual design approach
- Validation through usability testing

### When discussing technical implementation
- Clean HTML/CSS architecture
- Component-based thinking visible in design system
- Responsive design patterns with modern CSS (clamp)
- Interactive elements can be built with React if needed

---

## 🔄 Portfolio Structure

All projects follow a consistent narrative flow:
1. **Project Title & Navigation** - Back link to main portfolio
2. **Hero/Intro Section** - Context and scope
3. **Problem Statement** - Challenge being solved
4. **Research & Discovery** - User insights
5. **Solution & Design** - The approach taken
6. **Results & Learnings** - Outcomes and reflections
7. **Next Project Navigation** - Flow to next case study

---

## 🚀 Publishing & Future Roadmap

### Current Status (as of May 2026)
- **Location:** Based in London
- **Work Authorization:** UK & Taiwan
- **Career Stage:** Actively job hunting
- **Current Design Focus:** Cross-screen UI/UX Designer - designing scalable interfaces across multiple device sizes while maintaining design system consistency

### Phase 1: Official Launch (May 2026)
**Goal:** Deploy portfolio.html to production quickly
- **Platform:** Vercel (free tier, automatic HTTPS, URL-permanent)
- **Deployment:** Git-based auto-deploy
- **Timeline:** Immediate (5-10 minutes to launch)
- **Key Requirements:**
  - URL must remain constant for future features
  - Support seamless backend integration without URL changes

### Phase 2: Backend Infrastructure (Post-Launch, 1-2 weeks)
**Goal:** Enable dynamic content management and analytics

#### 2a. Project Management System 📋
- **Purpose:** Admin panel to show/hide projects dynamically
- **Tech Stack:** 
  - Database: Supabase (PostgreSQL) or Firebase
  - API: Vercel Serverless Functions
- **Features:**
  - CRUD operations for project visibility
  - Draft/published states
  - Schedule project releases

#### 2b. User Analytics & Tracking 📈
- **Purpose:** Understand user behavior and engagement
- **Metrics Needed:**
  - User flow/journey tracking
  - Time spent on sections
  - Geographical origin of visitors
- **Tools Options:**
  - Posthog (open-source, free tier) - Recommended
  - Plausible Analytics (privacy-focused)
  - Google Analytics (standard option)
- **Implementation:** Single script injection, no code changes needed

#### 2c. Multi-Language System 🌍
- **Purpose:** Support internationalization (i18n)
- **Priority Languages:** English, Traditional Chinese (台灣), Potential future: 日本語
- **Implementation Path:**
  - **Phase 2c (MVP):** Simple JSON translation + vanilla JS switcher
  - **Phase 3 (Enhancement):** Migrate to Next.js with next-intl library for better performance
- **Current State:** Portfolio currently in English only

### Phase 3: Technology Migration (Optional, 2-3 months)
**Goal:** Modernize stack for better scalability (if needed)
- **From:** HTML5 + CSS3 + Vanilla JavaScript
- **To:** Next.js 14+ with Tailwind CSS + TypeScript
- **Benefits:**
  - Native i18n support
  - Built-in API routes (no separate serverless functions needed)
  - Better performance optimizations
  - Easier state management for future features
- **Consideration:** Only pursue if Phase 2 demands exceed HTML capabilities

---

## 📝 Notes for Future Collaboration

- Portfolio is version controlled (`.git` folder present)
- Cursor IDE integration indicated by `.cursorrules` file
- Clean separation between display code (HTML) and backup versions
- React component available for potential interactive enhancements
- All projects use semantic HTML and modern CSS practices

### Collaboration Preferences (Rowan Lin)
- **Work Mode:** Discuss approach first → Claude writes Cursor prompts → User implements in Cursor
- **Code Changes:** Always ask before making changes; stay in discussion mode until explicitly asked to edit
- **Design Philosophy:** Maintain "Cross-screen Designer" identity throughout all implementations

### Deployment Updates (May 8, 2026)
- **Vercel 403 Fixed:** Disabled Vercel Authentication (Deployment Protection was blocking public access)
- **Custom Domain:** `www.rowanlin1229.com` bound to Vercel production (DNS propagating via Squarespace)
  - CNAME record added in Squarespace DNS: `www` → `71ee6ec06e83a752.vercel-dns-017.com.`
  - Squarespace Defaults DNS preset deleted; custom record added manually
- **Google Analytics:** GA4 installed on all 7 HTML files
  - Property: "Rowan Portfolio" (G-ERYYE1R633)
  - Tracking ID injected into `<head>` of all HTML files

### Updates (May 9, 2026)
- **GitHub 狀態：** 確認 repo `rowanlin801229/portfolio-testing01` 與本地完全同步，branch master up to date
- **Claude Code Skill 新增：** Emil Kowalski 的 design engineering skill 加入全域指令 `~/.claude/commands/design-review.md`，可在任何專案用 `/design-review` 呼叫，套用 animation review 標準
- **n8n 自動化計畫（待執行）：**
  - 工具：n8n.cloud（免費試用 14 天）
  - 第一個 workflow：GA4 週報自動寄信（每週一抓上週數據 → 寄到 Gmail）
  - 第二個 workflow：高意願訪客即時通知（看超過 3 頁 → 手機收通知）
  - 狀態：尚未開始，明天繼續
- **下次任務：Hero Section 重新設計**
  - Reference：https://landonorris.com/
  - 狀態：待開始

### Hero Section (Current Design, as of May 7, 2026)
- **Layout:** Left-right two-column grid
  - Left: "Hi, I'm Rowan." + "Cross-screen UI/UX Designer" + "Read More" CTA → links to #about
  - Right: Person portrait image (with fade-up animation) + Large tagline
- **Tagline:** "Design at Scale" (short, powerful, reflects core value of scalable cross-device design)
- **Typography:** Left text is body-size (0.875-1rem), right tagline is large display text
- **Animations Preserved:** All wheel-lock marquee animations, fade-in effects maintained
- **Visual Hierarchy:** Clean, minimal - person image and right tagline are focal points

### Updates (May 11, 2026)

#### /impeccable Critique 完成
- **Design Health Score:** 29/40（Good — 有基礎，有待改進）
- **最大問題：** 跨頁視覺不一致（index 白底 vs. case study 暗底）+ 小字問題
- **PRODUCT.md 新增：** 已建立 PRODUCT.md 於專案根目錄，記錄 brand register、目標受眾、品牌個性、anti-reference、設計原則

#### 設計方向決定
- **Case study 設計語言：** 跟著 faintv.html 走（Space Grotesk body font + dark zinc-950 系統）
- **Landing page（index.html）：** 維持白底，獨立設計語言

#### 已實作的修改（透過 Cursor Prompt）

**Prompt #1 — Typography & Contrast Audit（index.html）**
- Nav links: `0.68rem` → `0.75rem`（原 10.9px，低於 WCAG AA）
- `.wi-type`: `0.6rem` → `0.7rem`
- `.exp-sub`, `.exp-period`: `0.65rem` → `0.7rem`
- `.stat-lbl`: `0.68rem` → `0.72rem`
- `.stat-note`: `0.64rem` → `0.7rem`
- `.wi-num`: `0.95rem` → `1rem`
- **Accent color 更新：** `--accent: #C94F4F` → `#B84545`（對比從剛好 4.5:1 提升至 ~5.0:1）
- 白字白底 bug 修復（`#ffffff on #ffffff`）
- faintv.html 黑字黑底 bug 修復（`#000000 on #0e0e0d`）

**Prompt #2 — Case Studies Font Alignment（所有 5 個 case study）**
- genebook / tfl / aicuncell / marilyn：body font `Inter` → `Space Grotesk`
- Google Fonts URL 更新（移除 Inter，加入 Space Grotesk）
- 全部 5 個頁面的 nav 字體提升：`.nav-back/.nav-prev/.nav-next` → `0.75rem`
- Case study section label（`.cs-label`, `.cs-meta-label`, `.cs-sec-label`, `.cs-text-label`）字體提升

#### 待實作（已有 Prompt，尚未跑）

**Prompt #4 — Layout Animation 修復（低優先，P2）**
- Case study cursor ring：`transition: width, height` → `scale` property（不觸發 layout recalculation）
- index.html experience accordion：`@keyframes max-height` → `grid-template-rows: 0fr → 1fr`

#### 設計決定記錄
- **Impact section stats grid：** 嘗試改為 editorial list 排版後還原，保留原本四欄大數字格子

---

### Updates (May 19, 2026)

#### /impeccable audit 完成（index.html）
- **Audit Health Score:** 11/20（Acceptable）
- **PRODUCT.md:** 已存在 ✓
- **DESIGN.md:** 尚未建立 — 下次用 `/impeccable document` 生成

#### Cursor Prompts 狀態（本次新增，共 7 個）

| Prompt | 內容 | 狀態 |
|--------|------|------|
| 1 | tiny-text：scroll-ind/wk-prev-tag/visa-badge/footer 字體 → 0.7rem | 待確認已跑 |
| 2 | layout-transition：progress bar `width` → `transform: scaleX()` | 待確認已跑 |
| 3 | all-caps-body：`.wi-type` 移除 `text-transform: uppercase` | 待確認已跑 |
| 4 | Inter 字型：body/about-bio-small/exp-sub 改 system-ui，移除 Google Fonts Inter | 待確認已跑 |
| 5 | `--muted` 對比：`rgba(74,74,72,0.58)` → `0.78`（2.8:1 → ~4.8:1） | 待確認已跑 |
| 6 | Semantic HTML：`<div id="main">` → `<main>`，`<span class="sec-label">` → `<h2>` | 待確認已跑 |
| 7 | Cursor media query：`@media (max-width: 767px)` → `@media (pointer: coarse)` | **尚未跑** |

#### 已確認的設計決定
- **Impact section 大數字保留**（1M+/45%/40%/30→80%）：策略性決定，方便 recruiter 快速掃描，不改

#### 剩餘待做事項

**技術（P2，下次繼續）**
- [ ] Prompt 7：cursor media query fix（一行 CSS）
- [ ] `will-change: top` 修正（line 753，改為 `will-change: opacity`）
- [ ] Impact stats `font-size: 70px` inline → 移至 CSS class 用 clamp()
- [ ] Production 版本移除 tweaks panel 的 React + Babel CDN（~500KB）
- [ ] `/impeccable document` — 生成 DESIGN.md

**設計（待定）**
- [ ] Hero section 視覺方向（先前嘗試 lando 風格 + 簽名，待決定）
  - 簽名圖檔路徑：`images/signtrue-rowan.png`（注意：是 hyphen 不是空格）
  - hero-mockup.html 有三個版本可對比（現狀/A輕版/A重版）
- [ ] faintv.html `<video>` 加字幕 `<track>`（a11y，低優先）

**其他專案**
- [ ] HUD wireframe（~/hud-wireframe）：四個警示狀態完成，尚未推 Figma
- [ ] n8n 自動化：GA4 週報 + 訪客通知（尚未開始）

---

### Updates (May 20, 2026)

#### Hero Section 完整改版（Editorial Layout）

**參考來源：** jasminegunarto.com  
**方向：** 只借用排版結構，保留原有字型（Cormorant Garamond）與配色邏輯

**新版 Hero 架構（桌機）：**
- Row 1：全寬大字 `Rowan Lin`（Cormorant Garamond italic，JS 自動填滿行寬）
- Row 2：`Cross-screen` ← [中心照片卡片 + 簽名動畫] → `Designer`
- 三欄 grid：`minmax(0, 1fr) auto minmax(0, 1fr)`

**桌機 vs 手機分流：**
- 桌機（≥768px）：顯示 `.hero-desktop-shell`（新 editorial 版型）
- 手機（≤767px）：顯示 `.hero-mobile-shell`（保留原有 marquee 版型）
- 兩套 HTML 並存於同一 `#hero` section

**Hero 配色 Token（桌機專用）：**
```
--hero-canvas: #111110    /* 深黑背景，用戶確認「我要黑底」 */
--hero-ink: rgba(112, 108, 102, 0.92)   /* 暖灰文字 */
--hero-ink-soft: rgba(112, 108, 102, 0.45)  /* 更淡版本，scroll indicator 用 */
```

**Nav：** 保持黑底 `background: #111110`（用戶確認）

**動畫邏輯（桌機）：**
- 入場：Text curtain reveal — `.hero-clip { overflow: hidden }` + `translateY(110%)` → `translateY(0)`，stagger：名字先出現（100ms），role 文字 + 卡片後出現（350ms）
- Scroll Phase 1（0–40%）：照片從 `clip-path: inset(100% 0 0 0)` 由下往上揭開
- Scroll Phase 2（40–68%）：照片縮小（scale 1→0.62），role 文字向中靠近
- Scroll Phase 3（68–100%）：照片繼續縮（0.62→0.46），簽名用 `--sig-reveal` clip-path 從左到右繪入
- 簽名：`mix-blend-mode: screen`，疊在照片上方

**新增圖片資產：**
- `images/hero-rowan-wide.png`：桌機 hero 卡片用的景觀/寬幅人像照（在 commit 8c660ea 加入）

**CSS 關鍵數值（當前運作值 — 6/25 確認）：**

| 項目 | 當前值 | 備註 |
|------|--------|------|
| 卡片寬度 | `clamp(520px, 58vw, 820px)` | 版面視覺無異常，保持 |
| 照片比例 | 無 aspect-ratio | 父容器自動撐起，視覺合理 |
| Role 字級 | `clamp(2rem, 5vw, 3.75rem)` | 當前文字大小合適，保持 |
| 名字填滿率 | `container.clientWidth * 0.98` | fitHeroName() line 4126 |
| 名字文字 | `Rowan Lin` | Cormorant Garamond italic ✓ |
| Role 左側 | `Cross-screen` | 確認無「A」 ✓ |
| Role 右側 | `designer` | 小寫確認 ✓ |

#### 待確認（下次繼續）

- [ ] 卡片內容：目前只有照片，是否要加上 label（UI/UX DESIGN · 2026）和底部資訊列
- [ ] 手機版 hero 是否需要跟著更新，或繼續沿用舊版 marquee 設計
- [ ] `images/hero-rowan-wide.png` 是否在實際使用中
