# Fix Resource Matching Algorithm

## Motivation

Now, if we decide to keep the `resources` property in `Refine` component, we should update the resource matching logic to make it more clear and predictable. For now, when user passes a `resource` property to our hooks or `resource` is determined from the URL, we match the resource by `route` property first and then by `name` property. This is causing issues when users define the resource names by their API endpoints and custom routes which can conflict with other resource names. We should change the matching logic to match the resource by `route` if the `resource` value is inferred from the URL and match the resource by `name` if the `resource` value is passed manually.

## Caveats

In hooks with redirect logic, this might be a breaking change if the user was using `route` property to handle the redirect logic. We should try to find a way to make it non-breaking. Maybe we can bind this to a flag in config or a second parameter in the redirect function and make an option to use `legacy` or `new` matching algorithm. This will also be deleted in next major version but needed to be done in a non-breaking way for v4.

## Implementation

- Update the resource matching logic in every occurrence.
- Create a single function to reuse the logic in every occurrence.
- Update the docs to reflect the changes.
- Update the examples to reflect the changes.
- Add a note about `legacy` and `new` behavior in the docs.