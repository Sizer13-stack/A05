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
1. JSX lets you write HTML-like markup inside JavaScript, making UI easier to read and write than nested React.createElement calls.
2. Props are data passed down from a parent (read-only to the child); state is data a component owns itself and can change, triggering a re-render.
3. useState gives a component a value that persists across renders plus a setter to update it — used here to hold the technology list, the stack, and the loading flag.
4. useEffect runs side effects like data fetching after render; it's needed here to trigger the JSON fetch once on mount and update state when it resolves.
5. The key prop lets React tell items apart between renders, so it updates only what changed instead of re-rendering or mixing up the whole list.
6. Conditional rendering shows different UI based on a condition — e.g. YourStack.jsx renders an empty-state message when stack.length === 0, otherwise the list.
7. Parents pass data down via props; children send data back up by calling a function passed as a prop — e.g. TechGrid calls the onAdd prop from App when a card is clicked.

---

## 📤 Submission

- GitHub Repository Link:
- Live Site Link:
