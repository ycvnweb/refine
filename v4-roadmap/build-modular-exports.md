# Exporting our modules separately to allow for better treeshaking

## Motivation

We're exporting from the root path of our packages. This makes it hard for the bundlers to tree-shake our packages. We should export our modules separately to allow for better treeshaking. 

Like for the `useTable` hook, users should be able to import it like this `import useTable from "@pankod/refine-core/useTable"` and also keep the option to import it from the root path `import { useTable } from "@pankod/refine-core"`.

## Implementation

- Check out the build configuration of `@pankod/refine-inferencer` which has a similar setup but hardcoded, we can follow a more generic approach using a basic `fs` script and look for default exports in the source files.
- Export our modules separately from the root path.
- We may need to discuss grouping like `/hook`, `/component` etc.