# Fixing the `defaultValue` issue in `useSelect` and all its derivatives

## Motivation

The `useSelect` hook is working properly except for one thing: the `defaultValue` prop. In UI packages, `useSelect` derivatives are not sending the `defaultValue` prop but accepting it. First, we need to catch this bug in our tests then fix it.

## Implementation

- Add proper test cases to `useSelect` that checks if the `defaultValue` is properly used and set.
- Fix the bug in `useSelect` and all its derivatives.