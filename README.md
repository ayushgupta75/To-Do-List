# To-Do List App

A simple, fast React todo list application with database and multi-page routing.

## Features

- **Add Todos** - Create todos with a title and description
- **Delete Todos** - Remove todos from your list
- **Database** - All todos are saved to the database and persist across sessions
- **Routing** - Navigate between Home (todo list) and About pages
- **Responsive UI** - Bootstrap-styled navigation and forms

## Project Structure

```
src/
├── App.js                  # Main app with state management and routing
├── MyComponents/
│   ├── header.js          # Navigation bar
│   ├── AddTodo.js         # Form to add new todos
│   ├── todos.js           # List container for all todos
│   ├── TodoItem.js        # Individual todo display with delete button
│   └── About.js           # About page
└── App.css, index.css     # Styling
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production. Output is in the `build/` folder.

## Technology Stack

- **React** 17.0.2
- **React Router** 5.3.0
- **Bootstrap** (via CSS classes)
- **Database** for persistence

## How It Works

1. On app load, todos are fetched from the database
2. Each todo is stored as an object: `{ sno, title, desc }`
3. When a todo is added or deleted, state updates and the database is synced
4. The `Header` component provides navigation between pages
5. Routes handle `/` (home) and `/about` pages
