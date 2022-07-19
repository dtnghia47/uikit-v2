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