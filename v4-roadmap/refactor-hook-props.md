# Renaming/Reorganizing Hook Properties

## Motivation

We have some small differences between data hooks about configuration properties they accept, such as pagination, filters and sorting properties are nested inside `config` in `useList` hook but not in `useTable` hook. 

## Implementation

- Let's find out all the inconsistencies.
- Update them in non-breaking way. Easiest is to deprecate but keep the old ones working for a major version.
- Update the docs and examples to reflect the changes.