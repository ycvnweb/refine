# Removing Layout Related Props like `Sider`, `Title` etc.

## Motivation

While we aim to make it easier to use refine by deprecating `routerProvider` prop, we also want to make it easier to use our UI integrations' `<Layout/>` component by removing other related props and combining them in single `<Layout />` component, because it all depends on `<Layout/>` to respect those props and in most of the customized layouts, we saw our users handling those other components in their layout components rather than using the ones passed to refine by users and by refine to layout. 

This change may also including completely removing the `Layout` prop and make it a wrapper component to wrap `<Refine />` component's children.

## Implementation

- Remove `Sider`, `Title`, `Header` and `Footer` props from `<Refine />` component.
- We may also consider removing `Layout` prop and present it as a wrapper.
- Update the internal logic to respect the changes.
- Deprecate `LayoutWrapper` since it will be no-op.
- Update docs and examples to reflect the changes.