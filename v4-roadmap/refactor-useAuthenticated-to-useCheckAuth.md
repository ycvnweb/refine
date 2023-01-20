# Renaming `useAuthenticated` hook to `useCheckAuth`

## Motivation

To reflect the actual function used in `authProvider` and show the connection between the two more clearly.

This change can lead to other renaming changes which are not included in this roadmap item.

## Implementation

- Rename `useAuthenticated` to `useCheckAuth` in the codebase.
- Update all documentation to reflect the change.
- Update our examples to reflect the change.
- We need to decide whether to deprecate `useAuthenticated` or remove it completely with the major bump.