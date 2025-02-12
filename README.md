
<p align="center">
  <img src="./docs/.vuepress/public/logo.png">
</p>

# @dennisreimann/vue-cli-plugin-ssr

[![npm](https://img.shields.io/npm/v/@dennisreimann%2Fvue-cli-plugin-ssr.svg) ![npm](https://img.shields.io/npm/dm/@dennisreimann%2Fvue-cli-plugin-ssr.svg)](https://www.npmjs.com/package/@dennisreimann%2Fvue-cli-plugin-ssr)
[![vue-cli3](https://img.shields.io/badge/vue--cli-3.x-brightgreen.svg)](https://github.com/vuejs/vue-cli)

Simple Server-Side-Rendering plugin for Vue CLI (Work-in-Progress)

⚠️ Note: This is a fork of `@akryum/ssr`, which should be considered the main package.
This fork contains some features that aren't merged in the main repository, yet.
Like support for the Vue-CLI `pages` and `publicPath` options.

<p align="center">
  <a href="https://www.patreon.com/akryum" target="_blank">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
  </a>
</p>

<br>

<h3 align="center"><a href="https://vue-cli-plugin-ssr.netlify.com/">Documentation</a></h3>

<br>

## Sponsors

### Gold

<p align="center">
  <a href="https://www.sumcumo.com/en/" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/570728242399674380/logo-sumcumo.png" alt="sum.cumo logo" width="400px">
  </a>
</p>

### Silver

<p align="center">
  <a href="https://vueschool.io/" target="_blank">
    <img src="https://vueschool.io/img/logo/vueschool_logo_multicolor.svg" alt="VueSchool logo" width="200px">
  </a>

  <a href="https://www.vuemastery.com/" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/557267759130607630/Vue-Mastery-Big.png" alt="Vue Mastery logo" width="200px">
  </a>
</p>

### Bronze

<p align="center">
  <a href="https://vuetifyjs.com" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/537832759985700914/537832771691872267/Horizontal_Logo_-_Dark.png" width="100">
  </a>

  <a href="https://www.frontenddeveloperlove.com/" target="_blank" title="Frontend Developer Love">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/557267744249085953/frontend_love-logo.png" width="56">
  </a>
</p>

<br>

## About

**:star: Features:**

- Automatic conversion of your project to SSR
- Integrated express server
- Vuex store
- Async routes
- [vue-cli-plugin-apollo](https://github.com/Akryum/vue-cli-plugin-apollo) support
- Custom middlewares

This fork of the original package by @Akryum also supports:

- The Vue CLI `pages` and `publicPath` options
- Additional `options` and `config` arguments for the `extendServer` function
- Accessing the server bundle and client manifest in the `extendServer` function
- Added `prependServer` function
- Webpack config export analogous to [Vue CLI](https://cli.vuejs.org/guide/webpack.html#inspecting-the-project-s-webpack-config)

  `const [clientConfig, serverConfig] = require('@dennisreimann/vue-cli-plugin-ssr/webpack.config')`

(I strive to get these additions merged once they are fully tested.)

The following PRs have also been merged in this fork:

- [#98: Support publicPath in vue.config.js](https://github.com/Akryum/vue-cli-plugin-ssr/pull/98)
- [#93: Await router before mounting the app](https://github.com/Akryum/vue-cli-plugin-ssr/pull/93)
- [#75: Fix Type in docs](https://github.com/Akryum/vue-cli-plugin-ssr/pull/75)

<br>

**:rocket: Roadmap:**

- Automatic conversion of vuex modules to `state () {}`
- Integration with CLI UI
