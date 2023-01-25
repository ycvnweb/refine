# Removing `routerProvider` prop from `<Refine />` component

## Motivation

Handling routes is complex and we want to make it easier for our users by leaving this to user unless they want to create resource routes automatically. We want to remove the `routerProvider` prop from `<Refine />` component and let users handle routes themselves.

## Notes

If we end up using a different interface for `RouterProvider`, we should mark all the functions as optional to let users implement only the functions they need/want.

## Caveats

We need to figure out a way to handle redirect logics present in `@pankod/refine-core` also we need to find a way to make buttons like <ShowButton />, <CreateButton /> etc. work without `routerProvider` or a smaller version of `routerProvider` which only provides redirect logic. We might use an interface for router provider like `{ push, replace, back, parse }` and let users implement it themselves.

There might be a need of an additional function to update url params in the router provider, in some cases users may want to use `syncWithLocation` feature but their router might have an alternative way to update the url params.

## Implementation

- Create helper functions like `createResourceRoutes` and `createResourceRoute` which can be used to create resource routes.
- Remove/Update `routerProvider` prop from `<Refine />` component.
- Update docs to reflect the changes.
- Update examples to reflect the changes.