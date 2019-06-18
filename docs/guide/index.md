# Usage

::: warning
This plugin is intended to be used in a project created with Vue CLI 3.

This is a fork of `@akryum/ssr`, which should be considered the main package.
This fork contains some features that aren't merged in the main repository, yet.
Like support for the Vue-CLI `pages` and `publicPath` options.
:::

Add the plugin to the project:

```bash
vue add @dennisreimann/ssr
```

Start the development server:

```bash
yarn run ssr:serve
```

To run the app in production:

```bash
yarn run ssr:build
yarn run ssr:start
```
