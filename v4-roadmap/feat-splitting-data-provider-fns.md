# Splitting Data Provider functions into pieces

## Motivation

We provide an interface for `DataProvider` to let users create their own data providers and let our interface work as an adapter for their data providers. We're thinking having a builder or something might make this more complex to handle. So we're thinking refactoring our data provider packages to have smaller functions which can be put together to create the data provider and it will be easier for our users to customize the data providers and create their own by modifying the functions.

## Implementation

- Split the logic into smaller chunks and reuse them when possible in other methods.
- Data providers are different from each other so we should not try to make them use the same functions, each can have their own functions.
- Although we should at least keep the naming convention same for the functions so its easier to understand and adapt.
- Packages can have extra functions which are exported but not used by default to let users plug them in to easily customize the data providers. (Such as `@pankod/refine-simple-rest` can have different pagination handlers so users can use their matching one.)

