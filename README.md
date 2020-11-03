

# React-Redux template 

An amalgamation of ideas to form a sensible set of conventions for larger scale React projects. Includes example code to guide coding conventions and program structure for new projects.

For React-Context template see [here](https://github.com/christiaanjl/react-context-template)

## UI
Initial project fetches users and their to-do items from [jsonplaceholder](https://jsonplaceholder.typicode.com)

![screenshot](screenshot.png)

## Project structure

```
src
├── api
│   └── remoteApi.ts
├── constants
│   └── Status.ts
├── models
│   ├── Action.ts
│   ├── Store.ts
│   ├── Todo.ts
│   └── User.ts
├── store
│   ├── todos
│   │   ├── models
│   │   │   └── TodosState.ts
│   │   ├── TodosAction.ts
│   │   ├── TodosEffect.ts
│   │   └── TodosReducer.ts
│   ├── ui
│   │   └── users-page
│   │       ├── models
│   │       │   └── UsersPageState.ts
│   │       ├── UsersPageAction.ts
│   │       └── UsersPageReducer.ts
│   ├── users
│   │   ├── models
│   │   │   └── UsersState.ts
│   │   ├── UsersEffect.ts
│   │   └── UsersReducer.ts
│   ├── rootReducer.ts
│   └── rootStore.ts
├── utilities
│   ├── ActionUtility.ts
│   └── EffectUtility.ts
├── views
│   ├── components
│   │   ├── Header.tsx
│   │   └── ProgressSpinner.tsx
│   ├── users-page
│   │   ├── components
│   │   │   ├── TodoCard.tsx
│   │   │   ├── TodoList.tsx
│   │   │   ├── UserCard.tsx
│   │   │   └── UsersList.tsx
│   │   └── UsersPage.tsx
│   └── App.tsx
├── index.tsx
├── react-app-env.d.ts
└── setupTests.ts
```

package.json inclusions:
* Redux
* TypeScript
* Material-UI
* lodash
* axios
* ...


Work in progress; omissions include, testing (Cypress, React Testing Library, Jest), Storybook, fetched data validation, etc...

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


