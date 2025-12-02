# BASIC REST API APP

このアプリはREST APIに従ってJSONを返却する学習目的のプロジェクトです

開発にはVS CodeのDev Containerを使用しています

Docker Composeを用いてコンテナ内で起動できます

## 使用技術

- Node.js v22.21.1
- Express

## セットアップ手順

```
git clone git@github.com:sparklingstadt/basic-rest-api-app
cd basic-rest-api-app
docker compose up -d
```

## エンドポイント一覧

Method Endpoint Status Description
GET / 200 正常レスポンス
GET /users 200 ユーザーデータ一覧
POST /users/ 201 新規ユーザー作成
GET /users/:id ユーザー個人データ
PUT /users/:id ユーザー個人データ更新
DELETE /users/:id ユーザー個人データ削除

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
    "data": [],
    "errors": ["user id:3 not found"]
}