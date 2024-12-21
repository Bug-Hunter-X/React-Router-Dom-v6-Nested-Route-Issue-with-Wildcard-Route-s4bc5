This repository demonstrates a subtle bug in React Router Dom v6 involving nested routes within a wildcard route. The issue occurs when trying to nest routes under a route with a wildcard path (e.g., `/contact/*`). The nested routes are ignored, even if the parent route renders correctly.

The `App.js` file showcases the problematic code. The solution, `AppSolution.js`, provides a workaround.