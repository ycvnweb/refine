# Removing external dependency exports from our packages

## Motivation

Re-exporting external dependencies from our packages is not a good practice. It makes our packages bloated and it's hard to maintain. We should remove them and let the developers import the dependencies themselves.

For example, we re-export `@material/ui` and other MUI packages from our `@pankod/refine-mui` package even though we only use a small portion of them. This makes tree-shaking impossible and it's fragile since even with a small export change in MUI, we have to update our package.

Same happens with `chakra-ui` packages and we have to watch for any changes in their exports to make sure our package is not broken.

## Implementation

- Remove all re-exports from our packages.
- Remove all `dependencies` from our packages and move them to `peerDependencies` and `devDependencies`.
- Update our examples to import the dependencies themselves.
- Update our documentation to reflect the change.