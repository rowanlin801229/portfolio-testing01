# Cursor 執行包 — 把 Overhead Flights 加進主作品集網站（2026-07-31）

## 背景

Overhead Flights 原本是獨立專案（`/Users/linyuxian/Desktop/新作品集/overhead flights/`），現在 Rowan 決定把它變成這個主網站的第 7 個作品，加進首頁 work-list。這個網站其他 6 個案例頁（faintv/vcue/genebook/tfl/aicuncell/marilyn）都是**純英文**，只有首頁 shell（nav、hero、work-list 卡片標題、about、footer 等）用 `translations.json` + `data-i18n` 做中英切換——**個別案例頁本身不做雙語**，所以 Overhead Flights 案例頁也只要做英文版即可，不用比照它原本專案裡那套獨立雙語系統。

素材已經複製好，不用再處理：
- `images/overheadflights/export.jpg`（主形象 mockup）
- `images/overheadflights/hero.jpg`（全螢幕產品截圖）
- `videos/overhead-flights-demo.mp4`（黑轉有機的 demo 影片）

案例頁完整英文文案已經寫好在另一個檔案：`/Users/linyuxian/Desktop/新作品集/overhead flights/portfolio/CURSOR-BRIEF-ENGLISH.md`——請直接讀取那份文案內容當作新頁面的文字（不要重新翻譯或改寫），只需要調整視覺結構去配合這個網站既有的案例頁慣例（見下）。

## 要做的 5 件事

### 1. 新增 `overheadflights.html`

- 內容：用上面提到的 `CURSOR-BRIEF-ENGLISH.md` 裡的英文文案（Hero/S/T/A/R/Meta 全部區塊）
- 視覺：延續這個網站案例頁的既有慣例（參考 `marilyn.html` 或 `aicuncell.html` 的寫法）——deep zinc-950 底、Space Grotesk 內文、Cormorant Garamond 標題斜體，這跟 Overhead Flights 原本的設計本來就很接近，不需要大改
- 素材路徑改成本地相對路徑：`images/overheadflights/export.jpg`、`images/overheadflights/hero.jpg`、`videos/overhead-flights-demo.mp4`
- 頁首/頁尾加這個網站的導覽列（仿 `marilyn.html` 的 `.nav-back` / `.nav-prev` / `.nav-index` 寫法）：
  ```html
  <a class="nav-back" href="index.html"><span class="nav-back-arrow">←</span> All Projects</a>
  <div class="nav-right">
    <span class="nav-index">07 / 07</span>
    <a class="nav-prev" href="marilyn.html">← Marilyn</a>
  </div>
  ```
  （這是最後一個作品，不需要 `nav-next`）

### 2. 更新 `marilyn.html` 的導覽（它原本是最後一個，現在後面多了一個）

- `<span class="nav-index">06 / 06</span>` → `06 / 07`
- 在 `nav-prev` 後面加一個 `nav-next`：`<a class="nav-next" href="overheadflights.html">Next <span class="nav-next-arrow">→</span></a>`

### 3. 其他 5 個案例頁的 `nav-index` 分母 06 → 07

- `faintv.html`：`01 / 06` → `01 / 07`
- `vcue.html`：`02 / 06` → `02 / 07`
- `genebook.html`：`03 / 06` → `03 / 07`
- `tfl.html`：`04 / 06` → `04 / 07`
- `aicuncell.html`：`05 / 06` → `05 / 07`

### 4. `index.html` 首頁 work-list 新增一張卡片（第 07 號，接在 marilyn 後面，約在第 3339-3349 行附近）

```html
<li class="work-item reveal in" data-project="overheadflights" data-name="Overhead Flights" data-type="macOS Screen Saver · AI-Assisted Product" style="transition-delay: 0s;" onclick="location.href='overheadflights.html'">
  <div class="wi-bg"></div>
  <div class="work-inner">
    <span class="wi-num">07</span>
    <span class="wi-name" data-i18n="work.overheadflights.name">Overhead Flights</span>
    <div class="wi-right">
      <span class="wi-type" data-i18n="work.overheadflights.type" data-i18n-work-type="work.overheadflights.type">macOS Screen Saver · AI-Assisted Product</span>
      <span class="wi-arrow">→</span>
    </div>
  </div>
<div class="wi-cover" style="background-image:url('images/overheadflights/export.jpg'); background-color:#0e0e0d;"></div></li>
```

同一個檔案裡還有兩個地方要一起補（在 `<script>` 裡，用來做 hover 預覽跟 pin 動畫，都是 JS object，不是版面）：

- 約第 6269-6276 行的 `covers` object，加一行：`overheadflights: 'images/overheadflights/export.jpg',`
- 約第 6335-6342 行的 `map` object（在 `projectHref` function 裡），加一行：`overheadflights: 'overheadflights.html',`（保險用，正常情況下不會被用到，因為 onclick 屬性已經有寫）

### 5. `translations.json` 新增翻譯 key

在 `en` 區塊：
```json
"work.overheadflights.name": "Overhead Flights",
"work.overheadflights.type": "macOS Screen Saver · AI-Assisted Product"
```

在 `zh` 區塊：
```json
"work.overheadflights.name": "頭頂航班",
"work.overheadflights.type": "macOS 螢幕保護程式 · AI 協作"
```

## 明確邊界

- 不要改動其他既有案例頁的內文或視覺（只改 nav-index 數字跟 marilyn 的 next 連結）
- 不要把 Overhead Flights 案例頁做成雙語——這個網站的案例頁向來是純英文
- 不要動 `/Users/linyuxian/Desktop/新作品集/overhead flights/` 這個原專案資料夾裡的任何檔案
- 完成後回報一句話 + 本機預覽方式（例如現有的本機 server 指令）
