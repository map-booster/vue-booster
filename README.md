# Vue Demo App

## Getting Started

First, copy `.env.local.sample` to `.env.local`, and set your [Mapbox access token](https://www.mapbox.com/help/how-access-tokens-work/#creating-and-managing-access-tokens) in the `VUE_APP_MAPBOX_TOKEN` variable.

Then, start the local dev server:
```
npm install
npm run serve
```

For more details, see the [vue-cli documentation](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md).

## Mapbox Integration

Mapbox GL JS and Vue have been integrated without using an abstraction library. For more information on how this approach works and why it's helpful, see [Mapbox GL JS + React](https://blog.mapbox.com/mapbox-gl-js-react-764da6cc074a). The ideas in this article have been adapted for Vue.