# Moving refine packages to refinedev org in NPM

## Motivation

Since we've moved to refinedev org in Github, we should also move our packages to refinedev org in NPM.

## Implementation

- Updating the `package.json` files of all packages to use correct scope.
- Initial release of all packages to NPM.
- Updating our CI/CD to use the new org.
- Updating the documentation to reflect the change.
- Updating references to our packages in READMEs of other packages.