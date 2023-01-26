# Setting `hasPagination` to `false` by default in `useSelect` and derivatives

## Motivation

In most of the cases, pagination is not requested by the user. So, we can set `hasPagination` to `false` by default in `useSelect` and its derivatives.

## Implementation

- We need to check if this has any breaking changes in derivations of `useSelect` hook.
- Set `hasPagination` to `false` by default in `useSelect`.
- Update the documentation.
- Update the examples.