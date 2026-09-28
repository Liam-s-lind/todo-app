# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# Todo-app – frågor och svar

## Fråga 1: Hur fungerar `map`?

1. `map` går igenom alla uppgifter i `todos`.
2. För varje uppgift skapas ett `<li>` med text och knapp.
3. `map` fungerar som ett löpande band: varje todo kommer in och en färdig listkomponent kommer ut.

## Fråga 2: Hur fungerar `filter`?

`filter` fungerar som en sil. Uppgiften som ska tas bort fastnar, medan alla andra hamnar i en ny array, den nya arrayen skickas till `setTodos`.

Använder inte `splice`, eftersom det fungerar som en kniv som ändrar den befintliga state-arrayen direkt. React-state skall inte muteras.

## Fråga 3: Varför behövs `key`?

`key` är Reacts spårnings-ID för varje listpost. Det hjälper React att identifiera vilken post som har lagts till, ändrats eller tagits bort.

`key` är inte en synlig rubrik och visas därför inte på sidan.