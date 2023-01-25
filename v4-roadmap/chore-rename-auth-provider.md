# Rename `authProvider` functions

## Motivation

This is a simple change but we're thinking it will make it our `AuthProvider` interface nicer if we rename `checkAuth` to `check` and `checkError` to `onError` since its invoked when there is an error in API calls. Also might be nicer to rename `getUserIdentity` to `getIdentity` for consistency.

## Implementation

- Rename `checkAuth` to `check` and `checkError` to `onError` in `AuthProvider` interface.
- Rename `getUserIdentity` to `getIdentity` in `AuthProvider` interface.
- Update the internal logic to respect the changes.
- Update docs to reflect the changes.
- Update examples to reflect the changes.
- Add a better description to `usePermissions` hook and `getPermissions` of `AuthProvider` interface in docs and mark this as an optional way of access control.