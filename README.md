# LP制作サービス一式

## フォルダ構成
```
lp-service/
├── sample-salon-lp/   ← 架空サンプルLP（プライベートサロン Re:calm）
├── service-lp/        ← HP/LP制作サービス広告LP
└── README.md          ← このファイル
```

---

## 各LPの役割

### sample-salon-lp
完全予約制プライベートサロン「Re:calm」の架空サンプルLP。
「こんなLPが作れます」と見込み客に見せるためのサンプルページ。
ページ内に「制作サンプル」の表記あり。

### service-lp
HP/LP制作サービスの広告LP。
個人事業者（個人サロン・セラピスト・美容師・整体など）からの
問い合わせを獲得するためのメインページ。

---

## 公開の手順（Netlify）

### 2つを別々のURLで公開する場合
1. Netlifyで `sample-salon-lp` を1サイトとして公開
2. Netlifyで `service-lp` を別の1サイトとして公開
3. `service-lp` の「サンプルを見る」リンクを、公開後のサンプルLPのURLに更新

### まとめて1つのフォルダで公開する場合
`lp-service` フォルダをそのままNetlifyにアップロードすると
相対パスリンク（`../sample-salon-lp/index.html`）がそのまま機能します。

---

## 最初にやること
1. `service-lp/index.html` の問い合わせリンク（`href="#"`）を実際のURLに変更
2. Netlifyで公開してURLを取得
3. SNS・noteのプロフィールにURLを貼る
