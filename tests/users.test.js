const localhost = "http://localhost:3000"

test("GET / returns Hello, World!", async () => {
    const res = await fetch(localhost)
    const text = await res.text(res.text)
    expect(text).toBe("Hello, World!")
})

test("GET /users return users", async () => {
    const res = await fetch(localhost + "/users")
    const json = await res.json(res.body)
    expect(json.message).toBe("success")
    expect(Array.isArray(json.data)).toBe(true)
})

test("POST /users returns new user", async () => {
    const res = await fetch(localhost + "/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Charlie"
        })
    })
    const json = await res.json(res.body)
    expect(json.message).toBe("success")
    expect(Array.isArray(json.data)).toBe(true)
})

test("GET /users/:id returns requested user", async () => {
    const res = await fetch(localhost + "/users/1")
    const json = await res.json(res.body)
    expect(json.message).toBe("success")
    expect(json.data[0]).toHaveProperty("id", 1)
    expect(json.data[0]).toHaveProperty("name", "Antony")    
})

test("GET /users:id not found", async () => {
    const res = await fetch(localhost + "/users/50")
    const json = await res.json(res.body)
    expect(json.message).toBe("failed")
    expect(Array.isArray(json.errors)).toBe(true)
})

test("PUT /users/:id returns updated user", async () => {
    const res = await fetch(localhost + "/users/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: 1, name: "Alice" })
    })
    const json = await res.json(res.body)
    expect(json.message).toBe("success")
    expect(json.data[0]).toHaveProperty("id", 1)
    expect(json.data[0]).toHaveProperty("name", "Alice")
})

test("DELETE /users/:id returns deleted user", async () => {
    const res = await fetch(localhost + "/users/1", {
        method: "DELETE"
    })
    const json = await res.json(res.body)
    expect(json.message).toBe("success")
    expect(json.data[0]).toHaveProperty("id", 1)
    expect(json.data[0]).toHaveProperty("name", "Alice")
})