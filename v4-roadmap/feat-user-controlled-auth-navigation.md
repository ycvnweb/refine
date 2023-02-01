# Leave the unauthorized redirection path to the user

## Motivation

For now, we're using `/login` path to render our `<AuthPage />` components and redirecting unauthorized users to that path (as a result of a rejection in `checkAuth` method of the AuthProvider). We should leave this path to the user by letting them pass a better response in their `checkAuth` method. In the current state, users can't change the path to redirect unauthorized users to and forced to use `/login` path. And since there will be no requirement for a router provider, we won't be rendering a default login page for users, which might lead to a confusing behavior for new users.

## Implementation

- Create a simple but extensible interface for `checkAuth`s return type. (e.g. `{ redirect: string, authorized: boolean, ... }`)
- Keep the ability to use `checkAuth` as is, but also allow users to return the new interface. (Won't be hard to implement since we're going to change the name of this method as well)
- Update docs to reflect the changes.
- Update examples to reflect the changes.