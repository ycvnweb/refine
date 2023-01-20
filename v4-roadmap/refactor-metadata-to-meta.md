# Renaming `metaData` properties to `meta`

## Motivation

We should rename `metaData` to `meta` since there's no need to have a longer name for it and developers are more familiar with the word `meta` and its purpose.

## Implementation

- rename all appearances of `metaData` to `meta` in the codebase.
- Update all documentation to reflect the change.
- Fix the conflicting `meta` property of `useLog` of audit log provider to `logMeta` or something similar.