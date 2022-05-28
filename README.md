# xmd

Xavier's Markdown. Generate an html page with some styles I find dope. Mostly used for micro documentation
on my deno serverless functions.

Shamelessly plucked from mustache's docsite.

## How to use

Import and use as such.

```js
const html = await xmd({
  filename: "README.md",
  title: "xmd.txt",
});
```

The idea is to not manually write HTML tags and instead just load up your root `README.MD` file
for that old school feel.

**protip**: Plug xmd outside your main serverless entry to avoid continuously reading a file.

## Testing Locally

```
deno run --watch --allow-net --allow-read --allow-env server.ts
```

And then visit `localhost:8000`.
