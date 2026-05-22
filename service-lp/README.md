# HP/LP制作サービス広告LP

## このLPの目的
個人事業者（個人サロン・セラピスト・美容師・整体など）に向けて
HP/LP制作の問い合わせを獲得するための広告LP。

---

## ファイル構成
```
service-lp/
├── index.html   ← メインページ（ここを編集）
├── style.css    ← デザイン設定
├── script.js    ← FAQアコーディオンなど
└── README.md    ← このファイル
```

---

## 編集する場所

### 問い合わせリンクを変える（最重要）
`index.html` の `id="cta"` セクション内の `href="#"` を実際のURLに変更：
```html
<!-- Xのリンク -->
<a href="https://twitter.com/..." class="btn btn-lg btn-gold">Xで相談する</a>

<!-- Instagramのリンク -->
<a href="https://instagram.com/..." class="btn btn-lg btn-outline-gold">Instagramで相談する</a>

<!-- メールのリンク -->
<a href="mailto:your@email.com" class="btn btn-lg btn-outline-white">メールで相談する</a>
```

### 料金を変える
`index.html` の `id="plans"` セクション内の数字を変更：
```html
<div class="plan-price">¥15,000<span>〜（税込）</span></div>
```

### 自己紹介を変える
`id="about"` セクション内の `.about-text` を変更。

### noteリンクを変える
以下の `https://note.com/bunkitune` を自分のnoteURLに変更：
```html
<a href="https://note.com/bunkitune" target="_blank">noteを読む</a>
```

### サンプルLPのリンクを変える
```html
<a href="../sample-salon-lp/index.html" target="_blank">サンプルを見る</a>
```
Netlifyで公開した場合は絶対URLに変更してください。

### 色を変える
`style.css` の `:root` 内：
```css
--color-gold: #c9a84c;       /* ゴールド（メインカラー） */
--color-gold-light: #e0c878; /* ゴールド（ホバー時） */
```

---

## Netlifyで公開する流れ

1. [Netlify](https://netlify.com) にアカウント登録（無料）
2. ログイン後「Add new site」→「Deploy manually」
3. `service-lp` フォルダをそのままドラッグ＆ドロップ
4. 自動でURLが発行される（例：`https://xxxxx.netlify.app`）

---

## GitHubにアップロードする流れ

1. GitHubにリポジトリを作成（Public or Private）
2. `service-lp` フォルダの中身をアップロード
3. Netlifyの「Deploy with GitHub」で連携すると、GitHubに更新するたびに自動で公開される

---

## 独自ドメインを使う場合の注意点
- ドメインはお名前.com・Xserver Domainなどで取得
- Netlifyの「Domain settings」でドメインを追加
- 反映まで数時間〜24時間かかることがある

---

## 管理型と譲渡型について
- **譲渡型**：このフォルダをお客様にお渡しする形。お客様が自分で管理・編集する。
- **管理型**：制作者（自分）がNetlifyを管理し、修正依頼を月額で受け付ける形。
  - 月額プラン（¥5,000〜）で対応する場合はこちら。
