# Additional Properties in `resource` definitions

## Motivation

We're not sure if we're going to keep the `resources` but if we decide to keep it in `<Refine />` component or keep it but use it in a different place, we should consider adding the ability to pass additional properties to the `resource` definitions. This will allow users to have better control in their `router` handling and other functions if we expose them in the future.

## Implementation

- Add `meta` property to `resource` interface just like `metaData` in data hooks.
- Add examples of use cases.
- Update docs to reflect the changes.