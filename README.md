# Qwik mono repo demo with app and library

pnpm monorepo with a very simple integration of a Qwik library in a Qwik aplication.
Scripts are at the root level of the project.

Within the application, we use a library component :

```typescript
import { Counter } from "qwik-lib";

export default component$(() => {
  return (
    <>
      <h1>Welcome to Qwik. 👋</h1>
      <Counter/>
    </>
  );
});
```

The path of the library is declared with pnpm workspace symlink in the application `package.json` :

```json
"dependencies": {
    "qwik-lib": "workspace:^"
  }
```


## Build the library

`npm run lib:build`

## Run the application

`npm run app:dev`