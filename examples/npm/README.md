# NPM Examples — FAD SDK

This directory contains TypeScript/Webpack examples for the FAD SDK. Follow the steps below to install dependencies, build the project, and run the examples in the browser.

---

## Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js)

---

## How to Run the Examples

### 1. Install dependencies

From the repository root, go to the npm examples directory and install dependencies:

```bash
cd examples/npm
npm install
```

### 2. Build the project

Build the examples (this creates the `build` folder with compiled HTML, JS, and CSS):

```bash
npm run build
```

The build runs in **watch mode** by default, so it will rebuild when you change source files. You can leave this running in a terminal while you develop.

### 3. Serve the build folder

The examples can be served over HTTP or HTTPS (e.g. for camera/API usage). Do **not** open the HTML files directly from the file system.

**Option A Set Live Server root to the build folder**

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension if you haven’t already.
2. Open **Settings** (or `.vscode/settings.json`).
3. Set Live Server’s root to the npm build folder:

   ```json
   "liveServer.settings.root": "/examples/npm/build"
   ```

3. Start Live Server (e.g. “Go Live” in the status bar). It will serve from `examples/npm/build`, and you can open `index.html` or any module’s example page.

**Option B — Another static server**

You can use any static file server pointing at the `build` folder, for example:

```bash
npx serve build
# or
npx http-server build
```

Then open the URL shown in the terminal (e.g. `http://localhost:3000`) and navigate to `index.html` or the desired example.

---

## Available scripts

| Command        | Description                                      |
|----------------|--------------------------------------------------|
| `npm run build`| Builds the project in development mode with watch |

---
