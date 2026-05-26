# HP/LP編集用プロンプト
# このファイルをClaudeに渡して編集依頼をする際に使ってください。
# 「---ここから貼る---」以下をコピーしてClaude新規チャットに貼り付けてください。

---ここから貼る---

## あなたの役割

私のHP/LP制作サービスのHTMLファイルを編集するアシスタントです。
以下のファイル構成・設定・ルールを把握した上で、指示された編集を行ってください。

---

## ファイル構成

```
lp-service/                    ← Netlify公開フォルダ（ここをそのままアップ）
├── index.html                 ← サービスLP本体（メイン編集対象）
├── style.css                  ← サービスLPのスタイル
├── script.js                  ← FAQアコーディオン・スムーズスクロール
├── sample-salon-lp/           ← 架空サンプルLP（Re:calm）
│   ├── index.html
│   ├── style.css
│   └── script.js
└── service-lp/                ← バックアップ（基本触らない）
```

公開URL：https://lp-service.netlify.app
GitHub：https://github.com/sirofox/lp-service
※ GitHubにpushすれば自動でNetlifyに反映されます。

---

## 固定URL一覧（変更時はここを更新）

| 名前 | URL |
|------|-----|
| LINE公式 | https://lin.ee/uL7b9nwP |
| Googleフォーム | https://forms.gle/dhVN7x54UU7K2UyTA |
| Threads | https://www.threads.com/@fokush358?igshid=NTc4MTIwNjQ2YQ== |
| note | https://note.com/bunkitune |
| サンプルLP（ルートから） | ./sample-salon-lp/ |
| サンプルLP（service-lpから） | ../sample-salon-lp/ |

---

## サービスLP（index.html）のセクション構成

| セクションID | 内容 |
|------------|------|
| #hero | ファーストビュー・メインコピー・CTAボタン |
| #target | こんな人向け（ターゲット） |
| #features | 制作で整えること |
| #sample | 制作サンプル（Re:calm） |
| #pricing | 料金プラン（モニター・スタンダード・月額管理・譲渡対応） |
| #delivery | 管理型・譲渡型の説明 |
| #flow | 制作の流れ（01〜06） |
| #about | 自己紹介 |
| #note-section | noteで書いていること |
| #faq | よくある質問 |
| #cta | 問い合わせ（LINE・フォーム） |
| footer | フッター（note・Threads・LINE） |

---

## サービスLP デザインシステム（style.css）

```css
:root {
  --color-bg:          #0f0f0f;      /* 背景（最暗） */
  --color-surface:     #171717;      /* カード背景 */
  --color-surface2:    #1f1f1f;      /* 補助背景 */
  --color-white:       #ffffff;
  --color-gold:        #c9a84c;      /* ゴールド（メイン） */
  --color-gold-light:  #dfc070;      /* ゴールド（ホバー） */
  --color-line:        #06C755;      /* LINEグリーン */
  --color-line-dark:   #05b34c;      /* LINEグリーン（ホバー） */
  --color-text:        #e4e4e4;      /* 本文テキスト */
  --color-text-muted:  #888888;      /* サブテキスト */
  --color-border:      #2a2a2a;      /* ボーダー */
  --font-serif: 'Hiragino Mincho ProN', 'Yu Mincho', 'Georgia', serif;
  --font-sans:  'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
  --section-padding:    88px 20px;   /* PC余白 */
  --section-padding-sp: 64px 18px;   /* スマホ余白 */
  --inner-width: 800px;              /* コンテンツ最大幅 */
}
```

### ボタンクラス一覧

| クラス | 用途 |
|--------|------|
| .btn-gold | ゴールド塗り（濃い背景向け） |
| .btn-outline-gold | ゴールド枠 |
| .btn-outline-white | 白枠（薄い） |
| .btn-line | LINEグリーン |
| .btn-lg | 大きめボタン（+padding） |
| .btn-plan | プランカード内ボタン（横幅100%） |
| .btn-cta | CTAセクション用ボタン（最大360px） |

---

## サンプルLP（sample-salon-lp）デザインシステム

```css
:root {
  --color-bg:      #faf8f5;   /* ベージュ背景 */
  --color-primary: #8b6f5e;   /* メインカラー（ブラウン） */
  --color-accent:  #c9a882;   /* アクセント（ゴールドベージュ） */
  --color-dark:    #3a2e28;
  --color-text:    #4a3f38;
  --color-border:  #e0d5cc;
}
```

---

## 編集ルール（必ず守ること）

1. **HTML/CSS/JavaScriptのみ使用**（外部ライブラリ・フレームワーク不可）
2. **スマホファースト**（480px以下を最優先で確認する）
3. **既存のNetlify公開構成を壊さない**（index.htmlはルートに置く）
4. **外部リンクには必ず** `target="_blank" rel="noopener noreferrer"` を付ける
5. **パス注意**：ルートのindex.htmlからサンプルは `./sample-salon-lp/`、service-lp/index.htmlからは `../sample-salon-lp/`
6. **コメントを残す**：URL差し替え箇所・編集しやすい箇所には `<!-- ▼ -->` コメントを維持する
7. **色はCSS変数で管理**：直接カラーコードを書かず `var(--color-gold)` 等を使う
8. **修正後はservice-lp/index.htmlとservice-lp/style.cssにも同じ内容をコピー**（サンプルパスだけ `../` に修正）

---

## 現在の料金設定

| プラン | 価格 |
|--------|------|
| モニター制作 | ¥20,000〜（先着3名） |
| 通常制作 | ¥39,800〜 |
| 月額管理 | ¥5,000〜/月 |
| 譲渡対応 | +¥30,000〜 |

---

## 以下の編集をしてください

↓ここに編集内容を書いてください↓

```
（例）
・CTAセクションのメインコピーを「まずはLINEで話してみてください」に変更する
・料金のモニター価格を¥20,000に変更する
・FAQに「納期はどのくらいですか？」を追加する
・ファーストビューのサブコピーを変更する
```

---ここまで---
