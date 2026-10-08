# Min ToDo-app
Videoredovisning: Länken till min Teams-inspelning läggs in här efter att jag spelat in den.

## Om appen

Det här är en ToDo-app byggd med React. Man kan lägga till uppgifter med knappen eller Enter, markera dem som klara eller ogjorda och ta bort en enskild uppgift. Ett tomt fält eller bara mellanslag skapar ingen uppgift.

## Starta projektet

Kör följande kommandon i projektmappen:

```bash
npm install
npm run dev
```

Öppna sedan den lokala adress som visas i terminalen.

## State och komponenter

`App` håller uppgifterna i `todos` med `useState`. Varje uppgift är ett objekt med `id`, `text` och `completed`. När `setTodos` uppdaterar listan renderar React komponenten igen, så ändringen syns på sidan utan att den laddas om.

Jag har delat upp appen i `App`, `TodoForm` och `TodoItem`. `TodoForm` håller reda på texten i inmatningsfältet och skickar den till `App` via en funktion i props. `App` uppdaterar uppgiftslistan och skickar varje uppgift och klickfunktionerna vidare till `TodoItem` via props.

## Varför jag inte ändrar state direkt

React behöver få ett nytt värde när state uppdateras. Därför använder jag en ny array när jag lägger till en uppgift, `map` när jag ändrar status och `filter` när jag tar bort en uppgift. Om jag ändrar den befintliga arrayen direkt med till exempel `push` kan React få tillbaka samma array och missa att visa ändringen.

## Koddetektiven

Funktionen i uppgiften försöker lägga till text i listan, men `todos.push(text)` ändrar den befintliga arrayen och returnerar sedan samma array. Den anropar inte heller Reacts state-funktion. Dessutom lägger den till en vanlig textsträng i stället för ett uppgiftsobjekt med status.

Jag skulle först kontrollera att texten inte är tom. Sedan skulle jag skapa ett nytt uppgiftsobjekt och använda `setTodos` för att skapa en **ny array** med de gamla uppgifterna och den nya uppgiften.

## När jag körde fast

Min **Ta bort**-knapp fungerade inte. Jag visade min kod för en AI-assistent (Codex) och fick hjälp att upptäcka att knappen anropade `handleDeleteTodo`, men att funktionen saknades i `App`. Jag lade till funktionen med `filter` och testade att bara den valda uppgiften försvann. Det hjälpte mig att förstå kopplingen mellan knappens `onClick`, uppgiftens `id` och uppdateringen av state.

## Kontroll
Jag har provat att lägga till uppgifter med knapp och Enter, försökt lägga till en tom uppgift, markerat uppgifter som klara och raderat en uppgift utan att de andra försvinner. Jag har också kört `npm run lint` och `npm run build` utan fel.

