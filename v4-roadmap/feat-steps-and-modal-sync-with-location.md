# Support syncing with location in `useStepsForm`, `useModalForm` and similars

## Motivation

Just like the `useTable` hook, we want to support syncing the state of `useStepsForm` and `useModalForm` with the location. This was a requested feature that we want to support in v4. Probably going to be optional and disabled by default to make it non-breaking and let us see if there's a demand for it to make it enabled by default in v5.

## Caveats

This and also our `syncWithLocation` feature from `useTable` hook might need some refactoring according to the changes planned in `routerProvider`.

## Implementation

- Add the ability to sync with location in `useStepsForm` and `useModalForm` hooks.
- Update the docs to reflect the changes.
- Update/Create the examples to reflect the changes.

- 