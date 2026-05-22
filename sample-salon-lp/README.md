# Re:calm｜架空サンプルLP

## このLPの目的
HP/LP制作サービスの実績・サンプルとして作成した架空のプライベートサロン向けLP。
見込み客に「こんなLPが作れます」と伝えるためのサンプルページです。

---

## ファイル構成
```
sample-salon-lp/
├── index.html   ← メインページ（ここを編集）
├── style.css    ← デザイン設定
├── script.js    ← FAQアコーディオンなど
└── README.md    ← このファイル
```

---

## 編集する場所

### サロン名を変える
`index.html` の以下を変更：
```html
<div class="logo">Re:calm</div>
<title>Re:calm｜完全予約制プライベートサロン</title>
```

### 料金を変える
`index.html` の `id="menu"` セクション内の数字を変更：
```html
<div class="price">¥8,000<span>（税込）</span></div>
```

### CTAリンクを変える
`index.html` 内で `href="#"` になっている箇所を実際のURLに変更：
```html
<!-- LINEリンク -->
<a href="https://line.me/..." class="btn btn-primary">LINEで予約する</a>
<!-- Instagramリンク -->
<a href="https://instagram.com/..." class="btn btn-outline">Instagramを見る</a>
```

### 色を変える
`style.css` の `:root` 内の変数を変更：
```css
--color-primary: #8b6f5e;  /* メインカラー */
--color-accent: #c9a882;   /* アクセントカラー */
```

---

## Netlifyで公開する流れ

1. [Netlify](https://netlify.com) にアカウント登録（無料）
2. ログイン後「Add new site」→「Deploy manually」
3. `sample-salon-lp` フォルダをそのままドラッグ＆ドロップ
4. 自動でURLが発行される（例：`https://xxxxx.netlify.app`）
5. 独自ドメインを使う場合は「Domain settings」から設定

---

## GitHubにアップロードする流れ

1. GitHubにリポジトリを作成
2. このフォルダの中身をアップロード
3. Netlifyの「Deploy with GitHub」で連携すると自動更新可能

---

## 独自ドメインを使う場合の注意点
- ドメインはお名前.com・Xserver Domainなどで取得
- Netlifyの「Domain settings」でドメインを追加
- DNS設定（ネームサーバー変更）が必要な場合あり
- 反映まで数時間〜24時間かかることがある

---

## 管理型と譲渡型について
- **譲渡型**：このフォルダをそのままお渡しする形。自分で管理・編集する。
- **管理型**：制作者側でNetlifyを管理し、修正依頼を受け付ける形。
