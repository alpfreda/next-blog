Webpack, undoubtedly a powerful bundling tool, has been a staple for countless JavaScript developers. However, there are instances where the need for a swifter
builder becomes evident, and this is where Esbuild steps in.

Our journey began with the frustratingly long build times experienced on our clients' servers. Each application build took a staggering 75 seconds or more.
While some might consider this acceptable, envision having over five projects, each with 15 microservices.

Even after tinkering with the webpack configuration, the build times remained stubbornly high. Frustration mounting, the decision was made to transition to
Esbuild. What followed was nothing short of magical: our build times plummeted from a sluggish 45 seconds to a mere 5 seconds.

So, if you're ready for a change, let's explore how to swap out your webpack configuration in favor of Esbuild.

The first step on our journey is integrating Esbuild into your project.

```shall

yarn add esbuild -D

```

## Step 1

Create a file for our config file

```js
const esbuild = require('esbuild')

const esConfig = {
  entryPoints: [`./src/index.js`],
  outdir: path.resolve(process.cwd(), 'public'),
  define: {
    global: 'window',
  },
}

esbuild
  .build(esConfig)
  .then(async result => {
    console.log('\x1b[32m', ` ✔ [KIOSK V2] ${message} - ${new Date().toLocaleTimeString()}`, '\x1b[90m')
  })
  .catch(err => {
    console.log('\x1b[31m', ` × [ERROR] - ${new Date().toLocaleTimeString()}`, '\x1b[90m', 'ERROR', err)
    process.exit(1)
  })
```

Create es-dev-config.js

```js example-good
const esbuild = require('esbuild')
const path = require('path')
const { sassPlugin } = require('esbuild-sass-plugin')
const gzipPlugin = require('@luncheon/esbuild-plugin-gzip')

const watch = process.argv.indexOf('watch') > -1
const minify = process.argv.indexOf('minify') > -1
const sourcemap = process.argv.indexOf('sourcemap') > -1
const metafile = process.argv.indexOf('metafile') > -1
const production = process.argv.indexOf('production') > -1

const esConfig = {
  entryPoints: [`./src/kiosk-v2/index.js`],
  chunkNames: '[hash]',
  assetNames: '[hash]',
  outdir: path.resolve(process.cwd(), 'public/kiosk-v2'),
  bundle: true,
  splitting: true,
  format: 'esm',
  minify,
  watch,
  sourcemap,
  target: ['es2019'],
  define: {
    global: 'window',
  },
  metafile,
  loader: {
    '.js': 'jsx',
    '.data': 'binary',
    '.png': 'dataurl',
    '.svg': 'dataurl',
    '.gif': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.ttf': 'file',
    '.eot': 'file',
  },
  plugins: [sassPlugin()],
}

if (production) {
  esConfig.plugins.push(gzipPlugin())
  esConfig.write = false
}

if (watch) {
  esConfig.watch = {
    onRebuild(err, result) {
      if (err) showMessage('Rebuild Error', err)
      else showMessage('Rebuilt Successfully')
    },
  }
}

esbuild
  .build(esConfig)
  .then(async result => {
    if (metafile) {
      let metaResult = await esbuild.analyzeMetafile(result.metafile, { verbose: true })
      console.log(metaResult)
    }
    showMessage('Built Successfully')
  })
  .catch(err => {
    showMessage('Built Error', err)
    process.exit(1)
  })

const showMessage = (message, err) => {
  if (err) {
    console.log('\x1b[31m', ` × [KIOSK V2] - ${new Date().toLocaleTimeString()}`, '\x1b[90m', message, err)
  } else {
    console.log('\x1b[32m', ` ✔ [KIOSK V2] ${message} - ${new Date().toLocaleTimeString()}`, '\x1b[90m')
  }
}
```

**Update Build Script in package.json**

```

"scripts": { "start": "node es-dev-config.js", },

```

Certainly, let's split the `es-dev-config.js` file into logical steps for a more detailed breakdown.

### Step 1: Import Required Modules

```javascript
const esbuild = require('esbuild')
const path = require('path')
const { sassPlugin } = require('esbuild-sass-plugin')
const gzipPlugin = require('@luncheon/esbuild-plugin-gzip')
```

In this step, we import the necessary modules and plugins we'll be using in the configuration file. These modules include `esbuild`, `path`, `sassPlugin`, and
`gzipPlugin`.

### Step 2: Define Build Configuration Options

```javascript
const watch = process.argv.indexOf('watch') > -1
const minify = process.argv.indexOf('minify') > -1
const sourcemap = process.argv.indexOf('sourcemap') > -1
const metafile = process.argv.indexOf('metafile') > -1
const production = process.argv.indexOf('production') > -1
```

Here, we define various build configuration options based on command-line arguments. These options determine how the build process behaves, including whether to
watch for changes, minify the output, generate sourcemaps, create a metafile, and whether it's a production build.

### Step 3: Configure Esbuild

```javascript
const esConfig = {
  entryPoints: [`./src/kiosk-v2/index.js`],
  chunkNames: '[hash]',
  assetNames: '[hash]',
  outdir: path.resolve(process.cwd(), 'public/kiosk-v2'),
  bundle: true,
  splitting: true,
  format: 'esm',
  minify,
  watch,
  sourcemap,
  target: ['es2019'],
  define: {
    global: 'window',
  },
  metafile,
  loader: {
    '.js': 'jsx',
    '.data': 'binary',
    '.png': 'dataurl',
    // ... and more
  },
  plugins: [sassPlugin()],
}
```

This step involves configuring Esbuild with the desired settings. Key configurations include entry points, output directory, bundle and splitting options,
output format, minification, and more. The settings can be adjusted according to your project's requirements.

### Step 4: Additional Production Configuration

```javascript
if (production) {
  esConfig.plugins.push(gzipPlugin())
  esConfig.write = false
}
```

In this part, we add additional configurations for a production build. If the `production` flag is set, we add the `gzipPlugin` to compress the output and set
`write` to `false` to prevent writing output files during development.

### Step 5: Watch Mode Configuration

```javascript
if (watch) {
  esConfig.watch = {
    onRebuild(err, result) {
      if (err) showMessage('Rebuild Error', err)
      else showMessage('Rebuilt Successfully')
    },
  }
}
```

If the `watch` flag is set, we configure watch mode for Esbuild. It includes an `onRebuild` callback function to handle rebuild events, displaying messages for
success or error.

### Step 6: Execute the Esbuild Build

```javascript
esbuild
  .build(esConfig)
  .then(async result => {
    if (metafile) {
      let metaResult = await esbuild.analyzeMetafile(result.metafile, { verbose: true })
      console.log(metaResult)
    }
    showMessage('Built Successfully')
  })
  .catch(err => {
    showMessage('Built Error', err)
    process.exit(1)
  })
```

Finally, we run Esbuild with the provided configuration. This step initiates the build process. If a metafile is requested, it's analyzed and logged.
Appropriate messages are displayed for success or failure.

### Step 7: Define Message Display Function

```javascript
const showMessage = (message, err) => {
  if (err) {
    console.log('\x1b[31m', ` × [KIOSK V2] - ${new Date().toLocaleTimeString()}`, '\x1b[90m', message, err)
  } else {
    console.log('\x1b[32m', ` ✔ [KIOSK V2] ${message} - ${new Date().toLocaleTimeString()}`, '\x1b[90m')
  }
}
```

This step defines a function `showMessage` used to display build messages. It formats and colorizes the messages based on success or error.

By breaking down the `es-dev-config.js` file into these steps, you can better understand how the Esbuild configuration is structured and organized for your
project's build process.
