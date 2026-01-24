# DEVTINDER WEB – README

## Project overview

Devtinder Web is a **Vite** + React single‑page application that uses Tailwind CSS, daisyUI, and React Router to build a modern, component‑based UI with client‑side routing. [vite](https://vite.dev/guide/why)

---

## 1. What is Vite?

Vite is a modern frontend build tool and dev server created to make development extremely fast and efficient. It serves your source code using native ES modules during development and uses Rollup to create an optimized production bundle. [betterstack](https://betterstack.com/community/guides/scaling-nodejs/vite-vs-webpack/)

### Why we use Vite instead of older bundlers

- Very fast dev server start (no full bundle before starting). [syncfusion](https://www.syncfusion.com/blogs/post/webpack-vs-vite-bundler-comparison)
- Instant Hot Module Replacement (HMR) so React components update in the browser as soon as you save. [syncfusion](https://www.syncfusion.com/blogs/post/webpack-vs-vite-bundler-comparison)
- Minimal configuration to start a React project (templates are built‑in). [freecodecamp](https://www.freecodecamp.org/news/how-to-install-tailwindcss-in-react/)

**Command used in this project**

```bash
npm create vite@latest devtinder-web -- --template react
cd devtinder-web
npm install
npm run dev
```

`npm run dev` starts the Vite development server and opens your React app in the browser. [dev](https://dev.to/mosnyik/how-to-add-tailwindcss-to-a-react-app-built-with-vite-2025-guide-24oi)

---

## 2. Project structure and main files

In a Vite + React app, `main.jsx` (inside `src/`) is the entry point, i.e. the root of the application where React is attached to the DOM. [dev](https://dev.to/piyushkumar_dev/setup-of-react-project-with-vite-and-tailwindcss-231h)

A minimal `main.jsx` for this project:

```jsx
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Why `React.StrictMode` is used

`React.StrictMode` is a wrapper that activates extra checks and warnings in development so you can catch potential problems early. It does not affect production builds; it only helps you write safer React code. [dev](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e)

---

## 3. Creating a Hello World app (cleaning default Vite files)

After generating the project, you remove default boilerplate and show a simple “Hello World”:

```jsx
// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Hello World from DevTinder Web</h1>
    </div>
  );
}

export default App;
```

You can delete or simplify the extra files that Vite created (like default logos, unused CSS) to keep the project clean. [freecodecamp](https://www.freecodecamp.org/news/how-to-install-tailwindcss-in-react/)

---

## 4. Installing and configuring Tailwind CSS

Tailwind CSS is a utility‑first CSS framework that gives you low‑level utility classes (like `flex`, `mt-4`, `bg-blue-500`) to design directly in your markup. It works very well with component libraries like React because you style each component with classes instead of writing a lot of separate CSS. [freecodecamp](https://www.freecodecamp.org/news/how-to-install-tailwindcss-in-react/)

### Installation steps in this project

1. Install Tailwind and its tools:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   This creates `tailwind.config.js` and `postcss.config.js`. [dev](https://dev.to/piyushkumar_dev/setup-of-react-project-with-vite-and-tailwindcss-231h)

2. Configure content paths in `tailwind.config.js`:

   ```js
   // tailwind.config.js
   export default {
     content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Add Tailwind directives in `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

Now you can use Tailwind classes directly in your JSX, for example `className="bg-slate-900 text-white"`. [dev](https://dev.to/mosnyik/how-to-add-tailwindcss-to-a-react-app-built-with-vite-2025-guide-24oi)

---

## 5. Installing and using daisyUI

daisyUI is a component library built on top of Tailwind CSS that gives you pre‑built, themeable UI components like buttons, navbars, cards, etc. It is not a replacement for Tailwind; instead, it uses Tailwind utilities internally to create higher‑level, reusable components. [daisyui](https://daisyui.com/docs/intro/?lang=en)

### Why we use daisyUI with Tailwind

- Faster UI development because many components are already designed.
- Still fully customizable using Tailwind classes.
- Built as a Tailwind plugin so integration is seamless. [blog.logrocket](https://blog.logrocket.com/daisyui-adoption-guide/)

### Installation in this project

```bash
npm i -D daisyui@latest
```

Then enable it in `tailwind.config.js`:

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

After that you can use daisyUI classes, e.g. `btn`, `navbar`, `card`, etc. [daisyui](https://daisyui.com/docs/intro/?lang=en)

---

## 6. JSX vs HTML

JSX (JavaScript XML) looks like HTML but has important differences because it is JavaScript syntax that React compiles into function calls. [dev](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e)

### Key differences

- JSX must be inside JavaScript and is compiled to `React.createElement` calls; HTML is interpreted directly by the browser.
- In JSX you use `className` instead of `class`, `htmlFor` instead of `for`, and components start with capital letters (e.g. `<NavBar />`).
- JSX expressions can embed JavaScript inside `{}` (like `{user.name}` or `{items.map(...)}`), while pure HTML cannot run JS directly inside tags.

This makes JSX more powerful for dynamic UIs while still feeling similar to HTML.

---

## 7. Creating NavBar as a separate component

We create a reusable `NavBar` component using Tailwind + daisyUI and import it into `App.jsx`.

### `src/NavBar.jsx`

```jsx
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          DevTinder
        </Link>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
```

`Link` comes from React Router and prevents full page reloads when navigating. [dev](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e)

### Using NavBar in `Body.jsx`

```jsx
// src/Body.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function Body() {
  return (
    <div className="min-h-screen bg-base-200">
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Body;
```

The `Outlet` is where all child routes (Login, Profile, etc.) will render. [dev](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e)

---

## 8. Installing React Router and setting up routing

### What is routing and why it is important?

Routing is the process of mapping URLs (like `/login` or `/profile`) to components. In a single‑page React app, routing lets you show different screens without performing a full page reload, making the app feel faster and more like a desktop application. [dev](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e)

### Installing React Router

```bash
npm install react-router-dom
```

React Router DOM gives us `BrowserRouter`, `Routes`, `Route`, `Link`, and `Outlet` for client‑side navigation. [dev](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e)

### App routing diagram

**Routing Tree Diagram**

```text
BrowserRouter
└── Routes
    └── Route path="/" element={<Body />}>
        ├── Route path="/login" element={<Login />} />
        └── Route path="/profile" element={<Profile />} />
```

Any child route under `/` will render its component where `<Outlet />` is placed inside `Body.jsx`. [dev](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e)

### `src/App.jsx` with Router

You already have code similar to this:

```jsx
import React from "react";
import Body from "./Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Why `Outlet` is necessary

`Outlet` is a React Router component that renders the matched child route inside a parent route layout. In this project, `Body` is the layout (with NavBar), and `Login` / `Profile` are children; they will not appear unless we include `<Outlet />` inside `Body.jsx` where we want those child pages to show. [stackoverflow](https://stackoverflow.com/questions/75735376/how-to-render-nested-routes-in-multiple-outlets-react-router-v6-8)

---

## 9. Simple page components (Login and Profile)

Example implementations:

```jsx
// src/Login.jsx
import React from "react";

function Login() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <button className="btn btn-primary">Login with DevTinder</button>
    </section>
  );
}

export default Login;
```

```jsx
// src/Profile.jsx
import React from "react";

function Profile() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Profile</h2>
      <p className="text-base">This is your DevTinder profile page.</p>
    </section>
  );
}

export default Profile;
```

These components are rendered inside the `Outlet` when you navigate to `/login` or `/profile` routes. [dev](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e)

---

## 10. High‑level architecture diagram

**Component Interaction Diagram**

```text
index.html
└── <div id="root"></div>
    └── main.jsx
        └── <App />
            └── BrowserRouter
                └── Routes
                    └── Route path="/"
                        element={<Body /> (layout)>
                           ├── NavBar (inside Body)
                           └── <Outlet />
                               ├── Login (for /login)
                               └── Profile (for /profile)
```

- `main.jsx` mounts `App` into the root DOM node.
- `App` defines the routing tree.
- `Body` is a layout that always shows `NavBar` and hosts child pages via `Outlet`.
- Child pages (Login, Profile) are standard React components rendered based on the current URL. [dev](https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e)

---

## 11. Commands cheat‑sheet

```bash
# 1. Create project
npm create vite@latest devtinder-web -- --template react

# 2. Install dependencies
cd devtinder-web
npm install

# 3. Install Tailwind + PostCSS + Autoprefixer
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Install daisyUI
npm i -D daisyui@latest

# 5. Install React Router
npm install react-router-dom

# 6. Run dev server
npm run dev

# 7. Build for production
npm run build
```

These steps give you a clean Devtinder Web app with Vite, React, Tailwind CSS, daisyUI, and React Router set up exactly as described. [betterstack](https://betterstack.com/community/guides/scaling-nodejs/vite-vs-webpack/)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
