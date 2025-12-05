# BASIC REST API APP

このプロジェクトはREST APIの基本設計・CRUD処理・HTTPステータスコードの理解を含めるために制作した学習用APIサーバーです

Node.jsとExpressを使用し、Docker ComposeとDev Containerを用いて環境構築を自動化しています

## 特徴

- Node.js + Expressによる軽量なREST APIサーバー
- CRUD対応の`/users`エンドポイントを実装
- 統一されたJSONレスポンス形式(message, data, errors)
- JestによるAPIテストコード
- Docker Compose + Dev Containerでの自動環境構築 + 統一

## 使用技術

- Node.js v22.21.1 - 非同期処理が可能なランタイム
- Express - 学習目的に適したミニマルなWebフレームワーク
- Jest - API動作保証のためのテストフレームワーク
- Docker / Docker Compose - コンテナ化による実行環境の自動構築(環境依存なく動作)
- VS Code Dev Container - 開発環境を自動構築

## セットアップ手順

```
git clone git@github.com:sparklingstadt/basic-rest-api-app.git
cd basic-rest-api-app
docker compose up -d
```

ブラウでで[http://localhost:3000](http:/localhost:3000)にアクセス

## テスト

コンテナを使用しない場合

```
cd basic-rest-api
npm i
npm run dev
npm run test
```

コンテナを使用する場合

```
docker compose up -d
npm i
npm run test
```

## エンドポイント一覧

| Method | Endpoint | Status | Description |
|--------|----------|--------|-------------|
| GET    | /        | 200    | 正常レスポンス |
| GER    | /users    | 200    | ユーザー情報一覧 |
| POST    | /users    | 201    | 新規ユーザー情報 |
| GET    | /users/:id | 200 / 404 | ユーザー情報 / Not found |
| PUT    | /users/:id | 201 / 404 | 更新済ユーザー情報 / Not found | 
| DELETE | /users/:id | 203 / 404 | 削除済ユーザー情報 / Not found |

レスポンス例

GET /users に成功
```json
{
    "message": "success",
    "data": [
        { "id": 1, "name": "Antony" },
        { "id": 2, "name": "Bill" }
    ]
}
```

GET /users/2 に成功
```json
{  
    "message": "success",
    "data": [{ "id": 2, "name": "Bill"}]
}
```

GET /users/3 に失敗
```json
{
    "message": "failed",
    "errors": ["user id:3 not found"]
}

## 今後の拡張予定

- DB(PostgreSQL)を導入し永続化に対応
- OpenAPIによるAPIドキュメントの自動生成
- リクエストのバリデーション
- エラーレスポンスを詳細化

## 作者

- Sparklingstadt
- フロントエンド&バックエンドの基礎を継続的に学習中
- email: sparklingstadt@outlook.jp
- X: https://x.com/sparklingstadt
