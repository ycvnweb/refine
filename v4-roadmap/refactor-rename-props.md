# Renaming props of `<Refine />` component

## Motivation

Since there will be some deprecated and removed props in the version 4, we should also think about renaming our remaining props to make them more consistent and easier to use. Suffixes like `Provider` and `Page` are not necessary for props like `authProvider`, `routerProvider`, `dataProvider`, `errorPage`, `readyPage` etc. We should remove them from the prop names. There's no need to keep them since we don't think they add any meaning to the prop names.

## Implementation

- Rename the props to something more meaningful and consistent. (Names will be discussed and decided later.)
- Update docs to reflect the changes.
- Existing names should still be supported since we don't want to break existing apps. (The migration will probably be done by `codemod` and this might not be required but still, we should keep it in mind.)