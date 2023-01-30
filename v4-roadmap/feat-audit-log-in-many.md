# Adding Audit Log to `many` hooks

## Motivation

Even though the audit logging is already available in singular hooks, we've postponed the implementation of this to the `many` hooks to a next major release because of the may-be-breaking change in its implementation.

## Implementation

- We need to add the `log` function to the many hooks depending on their data provider implementation.
- For example, if the data provider implements a `updateMany` method, we need to log the event in the `useUpdateMany` hook in a single transaction.
- If the data provider doesn't implement a `updateMany` method, we need to log the event in the `useUpdateMany` hook in multiple transactions, one for each updated record.