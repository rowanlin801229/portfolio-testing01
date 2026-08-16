# Session progress — Portfolio

**Last updated:** 2026-08-16  
**今日完整紀錄:** [`2026-08-16.md`](./2026-08-16.md)（hero 接到站上、簽名、Kling 雲、行動版裁切、`_archive`）  
**Live repo:** `rowanlin801229/portfolio-testing01`  
**Branch:** `master`  
**Local preview (作品集):** `http://127.0.0.1:8766/`  
`cd "/Users/linyuxian/Desktop/portfolio testing01" && python3 -m http.server 8766 --bind 127.0.0.1`  
**Hero 實驗夾:** `/Users/linyuxian/Desktop/新作品集/portfolio hero section/`  
**Hero 實驗預覽:** `http://127.0.0.1:8765/rowan-hero-depth.html`（不要雙擊開檔，會被 CORS 擋）

---

## 2026-08-16 — 新 Pandora hero 接到作品集（取代舊 hero）

**Status:** 已上線。細節與當日全部 commit 見 [`2026-08-16.md`](./2026-08-16.md)。下面這段是當天稍早的工作筆記，部分句子（「Local only」）已過時。

### 兩個地方，不要搞混

| 用途 | 路徑 |
|------|------|
| **正式作品集（看這個）** | `/Users/linyuxian/Desktop/portfolio testing01/index.html` |
| **Hero 實驗原型** | `/Users/linyuxian/Desktop/新作品集/portfolio hero section/rowan-hero-depth.html` |
| 母片（烤進人物） | `images/hero/hero-color-seated.jpg` |
| 簽名 | `images/hero/signature.png` |
| Kling 無字靜幀 | `images/hero/hero-still-no-text.jpg`、`hero-still-16x9-no-text.jpg` |
| 沒有人物的原風景 | `images/hero/hero-color-original.jpg`（備份，網站不讀） |
| 對照說明 | `images/hero/README.md` |

舊 hero（名字 curtain、桌面 photo card、mobile marquee）已從 `index.html` 的 markup 拿掉。舊 CSS／JS 還留在檔裡，但找不到 `.hero-desktop-shell` 就會自己 return，不要當現況。

### 現在 hero 長怎樣（Rowan 說喜歡的版本）

- **一張完整照片**，人物已烤進母片。**不要**再把人物丟進 displacement mesh（會撕輪廓；重整第一秒完整、接著破掉，就是海報被 WebGL 換掉）
- 開場比 cover **再 zoom out 一點**（`photoStart: 0.90`），四周多露景色
- 捲動：照片以人物為 transform-origin 微微推進；兩拍文案（姓名 → About）
- 姓名在畫面中間文案堆：eyebrow → **Yu-Hsien （Rowan） Lin**（全形括號）→ Design · Adapt · Scale → 簽名揭露
- 筆電：**舊版暖黃光暈**（radial glow + 原本的 flicker），不是對不準的矩形色塊
- 滑鼠：作品集原本的 `#cur-ring`／`#cur-dot` 保留；hero 另外有暖黃 pointer trail
- **導覽列是作品集原本的**（logo + Projects / About / Contact + EN｜中文），不是實驗頁那條 mix-blend nav
- Projects / About / Skills / Contact **沒動**

### 不要再踩的雷

- 人物烤在同一張 displacement mesh 上 → 背部破洞、整圈 shear、剪影融化。要景深只能風景跟人物分開，而且人物不能進 mesh
- 用矩形去「對準整塊螢幕」幾乎對不準（viewport / contain / scale 會漂）。現況改回光暈
- 不要雙擊開 HTML；作品集用 **8766**，實驗用 **8765**
- 改 hero 文案只改 `index.html` 裡 `.ph-name` / `.ph-title` 那一塊（class 前綴 `ph-`）

### 還沒做

- 沒 commit / 沒 push
- 風景 3D 景深（depth mesh）目前是關的，人物才能保持完整
- Hero 文案還沒接 `translations.json`（中文切換還不會改 hero 那兩拍）
- 實驗夾 `CLAUDE.md` 前半仍寫舊的三層切圖路線，以本篇 + `index.html` 為準

### Resume checklist

1. 開 `http://127.0.0.1:8766/index.html`，硬重新整理，看 hero + 往下滾 Projects 是否還在
2. 若要改 hero：只動 `index.html` 的 `#hero.ph-hero` CSS／Pandora hero script，以及 `images/hero/`
3. 滿意再 commit（`index.html` + `images/hero/`）

---

## 2026-08-14 — Case study pages: nav rebuild + i18n + draggable scroll bar

**Status:** **Local only, not committed/pushed yet.** Workflow this session: Claude writes Cursor prompts, Cursor edits — Claude only verified.

### What changed (5 pages: faintv / vcue / genebook / tfl / overheadflights)

- Top nav rebuilt: logo (links to `index.html`) on the left; right side now `[EN|中文 toggle] [← prev] [n/05] [next →]`, prev/next are arrow-only (no project name text)
- Bottom-of-page "Back to All Projects" text link removed (logo covers that job now)
- Full EN/中文 toggle added, reusing `index.html`'s `i18n.js` / `translations.json` infra — verified: valid JSON, `case.*` keys present (~1178), toggle buttons + `i18n.js` include confirmed on all 5 files
- Left-side draggable scroll-progress bar (same component as `index.html`) ported to all 5 pages — click or drag to jump, shows the current section's name instead of a %, desktop-only. Verified each page's `sections` array points at real section `id`s that exist in that page's HTML (spot-checked tfl.html: hero/overview/strategy/design all present)
- FainTV content decisions applied (English source **and** Chinese): brand name → 歡樂看 in zh; all "conceptual / future direction" wording removed (Platforms line, What-I-owned items, Strategy card tags, Key Screens "Conceptual" badge, Handoff insight paragraph) so the case study reads as a fully shipped project; "Handoff" → 設計交付 in zh
- FainTV + Visual Cues Study: full Chinese translation drafted by Claude first, reviewed/decided by Rowan, saved at https://claude.ai/code/artifact/178a9397-455a-415f-92a4-56141dc8c288 (also local: `faintv-zh-translation.md` in scratchpad) — used as the style/terminology reference
- Genebook / TFL / Overhead Flights: Chinese translated directly by Cursor, same terminology (TV=電視, elderly users=長者, cross-device=跨裝置, handoff=設計交付)

### Verified locally (syntax only, not visually in browser)

- All 5 HTML files: inline `<script>` blocks parse cleanly (Node `Function()` check)
- `translations.json`: valid JSON
- Section IDs referenced by each page's scroll-progress JS exist in that page's DOM

### Bug found + fixed: FainTV language toggle looked broken

- Rowan spotted the EN/中文 toggle rendering wrong (flat, no active-state distinction, odd spacing) on `faintv.html`
- **Root cause:** `faintv.html` is the only page using *compiled* Tailwind (`tailwind.config.js` → `content: ['./faintv.html']`, output `assets/tailwind.css`). Cursor's edit added new Tailwind utility classes (`opacity-100`, `tracking-[0.18em]`, etc.) to the toggle markup but never re-ran the build, so the compiled CSS didn't have rules for those classes yet — they silently did nothing
- **Fixed by Claude directly** (not via Cursor — it's a build step, not a content edit): ran `npm run build:css`, verified the missing classes (`hover\:opacity-100:hover`, `tracking-\[0.18em\]`) are now present in `assets/tailwind.css`
- Gave Rowan a standing Cursor-prompt reminder to paste into Cursor: *"any edit to `faintv.html`'s Tailwind classes must be followed by `npm run build:css`"* — meant to stop this recurring
- **Not yet re-verified visually** — Rowan should hard-refresh `faintv.html` and confirm the toggle looks right now

### Bug found + fixed: Overhead Flights mobile journey collapsed to a single short screen

- Rowan reported the mobile "Overhead Flights" opening screen showing only the title/subtitle then nothing — page felt cut off, way shorter than before
- **Root cause:** a separate Cursor round (beyond the two prompts Claude wrote — likely from Rowan's direct skiper95 request to Cursor) rewrote the mobile experience for `.ofj-journey`: scroll height cut from `580vh` → `420vh`, `.ofj-stage` turned into a static `100svh` flex column instead of the tall pinned cinematic scroll, canvas draw mode switched to `contain`/letterbox on mobile only, and the opening title/subtitle overlay was forced to stay permanently visible on mobile (`openOn = p < 0.16 || isMobile`) instead of fading per scroll progress like desktop
- **Fixed by Claude directly** (clear regression, not a design call): reverted all of the above in `overheadflights.html` — mobile `.ofj-journey` is back to `height: 580vh` with no extra overrides, canvas draw is back to a single `Math.max` cover scale (no mobile/desktop branch), `resizeCanvas` back to viewport-based sizing, and `openOn` back to `p < 0.16` only — so mobile now behaves the same as desktop again, just responsive
- **Left untouched:** the scroll-progress bar itself was also restyled on this page (skiper95 ruler-tick look, different from `index.html`'s skiper94 dot style) — desktop-only, doesn't affect mobile, not related to the reported bug, so left as-is. Flag to Rowan if she wants it reverted to match the homepage exactly too
- **Not yet re-verified visually** — hard-refresh `overheadflights.html` on mobile width and confirm the full cinematic scroll + STAR case study below it are back

### Workflow note

- Rowan flagged that working through Cursor felt slow/tiring today (this bug is a concrete example of the gap: Cursor's edit was incomplete and nobody caught it until visual QA). Offered to switch back to Claude editing directly for the rest of this project, or keep Cursor with Claude double-checking each round more closely — **no decision made yet, revisit next session**

### Not yet done / needs a look

- **Not visually tested end-to-end in a browser** — need to open each page and check: language toggle really swaps content, scroll bar drags smoothly, no conflict with any GSAP ScrollTrigger/pin section (flagged as a risk in the original Cursor prompt, no report back on this yet)
- Not committed or pushed to `origin/master`
- Reminder for the "2 min mobile checkout" stat on FainTV: the underlying data point came from the conceptual prototype's usability test, now presented without that caveat — if asked about it in an interview, have an answer ready (e.g. "usability-test data from an early prototype")
- Ai Cun Cell / Marilyn (hidden pages) were NOT touched by any of this — different nav pattern, out of scope

### Resume checklist

1. Hard-refresh `http://127.0.0.1:8791/faintv.html` and confirm the language toggle now renders correctly (opacity/active-state, spacing)
2. Hard-refresh the other 4 pages and manually test: language toggle, scroll-bar drag, scroll-bar section labels while scrolling
3. Check GSAP/ScrollTrigger sections (Overhead Flights' journey scrub especially) still work with the new scroll bar
4. Decide: stick with Cursor-relay workflow or switch back to Claude editing directly for this project
5. If all good → commit + push

---

## 2026-08-12 → 08-13 — Hide two projects + type subtitles

**Status:** **Pushed** to `origin/master`  
**Live:** https://www.rowanlin1229.com  

### Pushed commits

| Commit | Summary |
|--------|---------|
| `080cf35` | Hide Ai Cun Cell + Marilyn; enlarge desktop thumbs; add focused type subtitles |
| `4182d59` | *(reverted)* Mistakenly set 薪水小偷 cat as portfolio OG |
| `87bf7ec` | Revert OG cat — portfolio share card is **not** the tuxedo cat |

### Done

- Selected Work hides Ai Cun Cell and Marilyn (HTML files kept; list items commented)
- Visible order: FainTV → Visual Cues Study → Health GeneTech → Training for Life → Overhead Flights (`01`–`05`)
- TFL next / Overhead Flights prev retargeted; case-study `n / 05`
- Desktop pin-scroll thumbs `300×184` → `330×202`
- Focused name gets a type subtitle, aligned to the **name** not the number; `1.25rem`

### Locked subtitles

| Project | EN | 中文 |
|---------|----|------|
| FainTV | End-to-end product design | 端到端產品設計 |
| Visual Cues Study | Research study | 研究專案 |
| Health GeneTech | Brand & website | 品牌與網站 |
| Training for Life | App + wearable | App 與穿戴 |
| Overhead Flights | Ambient design | 環境式設計 |

### Do not

- Do not put 薪水小偷 / stealtheclock OG art on this repo
- Do not delete `aicuncell.html` / `marilyn.html` unless Rowan asks

---

## 2026-08-11 → 08-12 — Overhead Flights cinematic scroll case study

**Status:** **Pushed** to `origin/master`  
**Live path:** https://www.rowanlin1229.com/overheadflights  
**Local:** http://127.0.0.1:8791/overheadflights.html  

### Goal

把「滚动跟手 scrub 电影」接到主作品集 **Overhead Flights 案例页**，与 STAR 全文同页：先电影、后案例。后来换成 CapCut 修整 master，压体积、改开头文案。

### Pushed commits (this workstream)

| Commit | Summary |
|--------|---------|
| `c1dc4ef` | Add reverse scroll journey to Overhead Flights case study (first integration + frames) |
| `ca724a6` | Refresh scroll with CapCut v3, lighter load, forward scrub, title open |

### Architecture (current — do not re-break)

```text
overheadflights.html
  ACT 1  .ofj-journey (~720vh sticky stage)
           canvas scrub ← frames/frame-####.jpg
           open title overlay → Continue ↓
  ACT 2  .of-case-study
           nav + Hero + STAR sections + Meta + back
```

| Piece | Path / rule |
|-------|-------------|
| Page | `overheadflights.html` |
| Frames | `overheadflights-journey/assets/frames/frame-0001.jpg` … `frame-0180.jpg` |
| Count | **`TOTAL = 180`** in page JS — must match disk |
| Naming | `frame-%04d.jpg` only |
| Scrub | **Forward** progress `0→1` → frame `1→180` (matches CapCut timeline) |
| Load | Eager **24** frames then open scroll; rest background batch; nearest-frame fallback |
| Redirect | `overheadflights-journey/index.html` → `../overheadflights.html` |

### CapCut master (source of current frames)

| Item | Value |
|------|--------|
| Source file | `/Users/linyuxian/Movies/CapCut/overhead flight03.mov` |
| Spec | 1920×1080 · 30fps · ~31.5s · ~41MB |
| Extract | `fps≈5.72` · scale **960** · JPEG q≈7 → **~180 frames · ~2.7–3.0MB** total |
| Narrative (forward) | Plane side → journey → ends on **BAW118 product type** in film |

### Opening overlay (current copy)

- **Title:** Overhead Flights  
- **Subtitle:** Overhead Flights: real flight data, quietly displayed on a macOS screen saver — showing the one plane passing overhead right now.  
- **Not used at open:** OF / BAW118 / British Airways stack (felt like airline ad)

Visible roughly for scroll progress `p < 0.16`, bottom-left over gradient.

### Decisions already made (don’t re-litigate)

| Decision | Choice |
|----------|--------|
| One page vs two | **One page**: journey on top of case study |
| Film-script chapter labels (“Between the towers”…) | **Never show** |
| Product mockup full-bleed (`hero.jpg` block) mid-case | **Removed** (too much space) |
| Case study mid-page demo video (BAW8RM controls) | **Removed** (file still at `videos/overhead-flights-demo.mp4`) |
| End of scroll = rebranded screensaver mp4 | **Rejected** — felt wrong; end is **film last frames** |
| Scrub direction | After CapCut v3: **forward** (not reverse) |
| Load strategy | Eager first frames, not full pack before scroll |
| Opening brand | Project title + subtitle, **not** BA callsign |

### Tried then dropped / local only

| Item | Notes |
|------|--------|
| `videos/overhead-flights-demo-baw118.mp4` | PIL rebrand of BAW8RM→BAW118; **not used**, untracked |
| HTML veil over end demo | Dropped with end-mp4 idea |
| Reverse scrub (plane last → desk first) | Dropped when CapCut v3 already plane→product |
| Old 196 frames @ 1280 | Replaced; frames 181–196 deleted |
| `journey.mp4` under journey assets | Removed (canvas-only) |

### Still open / optional next

1. Confirm live Vercel after `ca724a6` (hard refresh `/overheadflights`)
2. If load still feels heavy: 150 frames / smaller JPEG / lower width
3. Hide fixed case-study `nav` during sticky journey (currently always fixed z-index 200)
4. Opening title timing (`p < 0.16`) polish
5. Whether to re-introduce a **short** real-data demo later (not as journey end)
6. Commit this `SESSION-PROGRESS.md` if you want it on GitHub (currently often local-only)

### Files to know (Overhead Flights)

| File | Role |
|------|------|
| `overheadflights.html` | Case study + journey engine (CSS/JS inline) |
| `overheadflights-journey/assets/frames/*` | Scrub sequence |
| `overheadflights-journey/index.html` | Redirect shim |
| `images/overheadflights/export.jpg` | Case hero banner still |
| `videos/overhead-flights-demo.mp4` | On disk; **not** embedded on page now |
| CapCut source | `Movies/CapCut/overhead flight03.mov` |

### Resume checklist (5 min)

1. Hard-refresh local `8791/overheadflights.html` or live site  
2. Loader should clear after ~first 24 frames (fast)  
3. Open: **Overhead Flights** title + full subtitle, no BA stack  
4. Scroll: plane → journey → film end product type → Continue ↓  
5. Case study STAR still below (Situation → Result)  
6. No mid-page BAW8RM video block  

---

## Earlier log — 2026-07-27 Selected Work + scroll progress

**Status then:** Selected Work axis + desktop scroll progress **pushed**  
*(Preserved for history; not the active workstream.)*

### Pushed commits (2026-07-27)

| Commit | Summary |
|--------|---------|
| `d11a3b4` | Rebuild Selected Work as pin-scroll axis list with hover expand |
| `f5656d7` | Add desktop-only vertical scroll progress bar |

### Done then

- Selected Work pin-scroll (specialne-style), hover vs focus split  
- Impact count-up  
- Desktop scroll progress bar (Skiper94-inspired)  
- Hero left alone  

### Decisions (Selected Work)

- Name: **Selected Work**, not Work Experience  
- Hover = full expand; scroll focus = lighter  
- Progress bar desktop-only  

---

## Not usually committed (local)

- `SESSION-PROGRESS.md` (this file)  
- `COLLABORATION.md`, `GROK.md`, `CURSOR-BRIEF-OVERHEADFLIGHTS.md`  
- `.claude/settings.local.json`  
- `videos/overhead-flights-demo-baw118.mp4`  
- worklist mockup HTML drafts  

---

*Last session closed 2026-08-13. Portfolio list/subtitle work is on `master` (`080cf35`). OG cat revert is `87bf7ec`. 薪水小偷分享圖進度寫在該專案 `CLAUDE.md`。*
