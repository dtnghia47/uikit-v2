<!-- Repo A import Repo B

## Link

=> `npm run build` in repo B
=> npm link

in repo A
run `npm link B`
=> `npm link uikit-v2`

## How to unlink
in Repo A
=> `npm unlink --no-save B`

in repo B
=> `npm unlink` -->

## Upgrade package version
```
  yarn upgrade @dtnghia47/uikit-v2 --latest
```

## https://github.com/developit/microbundle
```
{
  "source": "src/index.js",             // input
  "main": "dist/foo.js",                // CommonJS output bundle
  "umd:main": "dist/foo.umd.js",        // UMD output bundle
  "module": "dist/foo.mjs",           // ES Modules output bundle
  "exports": {
    "require": "./dist/foo.js",         // CommonJS output bundle
    "default": "./dist/foo.modern.mjs", // Modern ES Modules output bundle
  },
  "types": "dist/foo.d.ts"              // TypeScript typings directory
}
```