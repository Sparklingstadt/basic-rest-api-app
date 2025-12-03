/**
 * 
 * "/" ルート
 * "Hello, world"
 * 
 * "/users" GET
 * users一覧情報
 * 
 * "/users" POST
 * - name: string
 * 新規user
 * 
 * "/users/:id" GET
 * 指定のuser || ユーザーなし
 * 
 * "/users/:id" PUT
 * 更新された指定のuser || ユーザーなし
 * 
 * "/users/:id" DELETE
 * 削除済み指定ユーザー || ユーザーなし
 * 
 * 
 */

test("GET / returns Hello, World!", async () => {
    const res = await fetch("http://localhost:3000")
    const text = await res.text(res.text)
    expect(text).toBe("Hello, World!")
})