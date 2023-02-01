# Ability to disable `filters` and `sort` for API to make it client-side

## Motivation

We're allowing users to set `hasPagination` to `false` and handle the pagination in client side. We should also allow users to disable `filters` and `sort` and let them handle them in client side.

## Implementation

- Eventhough we're making it possible to disable `filters` and `sort` for API side, we should still keep the `filters`, `sort` and their related props and values to make it possible for users to use them in client side.
- Maybe along the way, we can rename `sort` to `sorters` to make it more consistent with `filters`.
- Update docs and examples to reflect the changes.