# Removing `hasPagination` property in favor of `pagination` property

## Motivation

The motivation behind the `hasPagination` property was to introduce a way to disable pagination in a non-breaking way. Now with a major version, we can move this same check to `pagination` property since with `hasPagination` set to `false`, `pagination` will not be used. Instead of `hasPagination`, we can do `pagination: false` to disable pagination.

## Implementation

- Remove `hasPagination` property from `useList` hook.
- Add checks for `pagination: false` instead of `hasPagination`.
- Deprecate `hasPagination` property in data providers `getList` but keep it working until the next major version.
- Update docs and examples to reflect the changes.