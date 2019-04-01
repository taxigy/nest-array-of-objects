# Nest a flat array of objects with dot-separated pseudo-keys into a nested object

Given JSON input

```json
[
  {
    "k": "a.b.c",
    "v": 1
  },
  {
    "k": "d.e.f",
    "v": 2
  }
]
```

turn it into

```json
{
  "a": {
    "b": {
      "c": 1
    }
  },
  "d": {
    "e": {
      "f": 2
    }
  }
}
```

## Usage

Run it in CLI:

```bash
echo '[{"name":"John Doe","created":"1970-01-01T00:00:00.000Z","meta":{"key":"doe.john"}},{"name":"Jane Doe","created":"1970-01-01T00:00:00.000Z","meta":{"key":"doe.jane"}}]' | KEY_PROPERTY="meta.key" VALUE_PROPERTY="name" node index.js
```

output:

```json
{
  "doe": {
    "john": "John Doe",
    "jane": "Jane Doe"
  }
}
```
