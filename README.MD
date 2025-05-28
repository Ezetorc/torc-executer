# torc-executer

`torc-executer` is a utility library to simplify database queries.

---

## 🚀 Installation

```bash
npm install torc-executer
```

---

## 📦 Basic Example

### Get an user by its Id

```ts
import { createExecutor } from 'torc-executer'

// Create an executor using your MySQL connection pool
const execute = createExecutor(yourPool)

async function getUserById(id: number) {
  const query = 'SELECT * FROM users WHERE id = ?'
  const params = [id]

  const { row } = await execute(query, params)

  return row // row will be the first result or null
}
```

---

## 📄 `execute` Response Shape

The `execute` function returns a `Promise` with the following structure:

| Property  | Type                      | Description                                    |
|-----------|---------------------------|------------------------------------------------|
| `error?`  | `Error`                   | The error object, if any occurred.             |
| `rows`    | `T`                       | The full result set from the query.            |
| `row`     | `ElementType<T> \| null`  | The first row in the result, or `null` if empty. |
| `result`  | `T`                       | Alias for `rows`.                              |
| `failed`  | `boolean`                 | `true` if the query failed.                    |
| `success` | `boolean`                 | `true` if the query succeeded.                 |

> 💡 `ElementType<T>` is a utility type that extracts the item type from an array type `T`. For example, if `T` is `User[]`, then `ElementType<T>` will be `User`.

---

## ✅ TypeScript Support
This library is written in TypeScript and fully types the result based on your query expectations, making it easy to work with database results in a type-safe manner.

---
