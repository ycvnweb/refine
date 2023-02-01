# Converting `<ReadyPage />` to `<WelcomePage />`

## Motivation

Since with the changes in `routerProvider`, `<ReadyPage />` will be obsolete, we can convert them to `<WelcomePage />` and use it in our starter templates to give users some information about the project and how to get started.

## Implementation

- Convert `<ReadyPage />` to `<WelcomePage />`.
- `<ReadyPage />` should still be working but with a `deprecated` flag for the version 4.
- Update docs and examples to reflect the changes.