# 🧱 Dev Stack

Dev Stack is a browsing tool for developers who are choosing their toolkit
for a new project. It lists modern frontend, backend, database, and tooling
technologies as cards — each with a rating, difficulty level, and category —
and lets you collect the ones you want into a personal "Your Stack" panel
that you can edit as you go.

## Technologies used

- React (Vite)
- Tailwind CSS
- React-Toastify
- JSON (local technology dataset, loaded via `fetch`)

## Features

1. **Build-your-own stack** — browse a responsive grid of technology cards
   and add any of them to a persistent "Your Stack" sidebar with one click;
   duplicates are blocked with a warning toast, and remove items one at a
   time or all at once.
2. **One-place theming** — the entire brand identity (logo, hero highlight,
   primary buttons) pulls from a single gradient defined once as CSS
   variables in `src/index.css`, so re-theming the whole app is a three-line
   change.
3. **Real loading and feedback states** — technology data is fetched
   asynchronously rather than hardcoded, with a visible loading state while
   it loads, and every stack action (add, duplicate attempt, remove, remove
   all) confirms itself with a toast notification.

## Getting started

```bash
npm install
npm run dev
```

Build for production with `npm run build`; the output is written to `dist/`.

---

## React questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly
inside JavaScript. React uses it because describing UI as markup close to
the logic that drives it is easier to read and reason about than building
that same tree with plain function calls like `React.createElement`.

**2. What is the difference between props and state?**
Props are data passed into a component from its parent — the component
receiving them can't change them. State is data a component owns and
manages itself, and it can change over time (usually in response to user
actions), which triggers a re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a component a piece of state that persists between
re-renders, plus a function to update it. In this project it's used inside
the `useTechStack` hook to hold the fetched technology list, the selected
stack, and the loading/error flags.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that reaches outside of rendering,
like fetching data — after a component renders. Fetching is asynchronous
and shouldn't happen directly during render, so `useEffect` is used to kick
off the `fetch` call once when the app mounts, and to update state once the
data comes back.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell which items changed, were added, or were
removed between renders, so it only updates the DOM nodes that actually
need it. Without a stable key, React can misidentify items and either
re-render more than necessary or mix up state between items.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same markup. In
`src/components/YourStack.jsx`, the panel renders an `EmptyState` message
when `stack.length === 0`, and otherwise maps over the selected
technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props. To send something back up,
the parent passes a function down as a prop, and the child calls that
function (usually with some data as an argument) when something happens —
for example, `TechGrid` receives an `onAdd` callback from `App` and calls
`onAdd(tech)` when a card's button is clicked, which runs the parent's
`addToStack` logic.

---

## 📤 Submission

- GitHub Repository Link:
- Live Site Link:
