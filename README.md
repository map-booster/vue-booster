# Vue Demo App

## Getting Started

First, install Node.js. (We'll be using 8.x, but 10.x should also work fine.)

- [Installers for Windows and macOS](https://nodejs.org/en/download/)
- [Install on Linux via package manager](https://nodejs.org/en/download/package-manager/)

  Some Linux distros ship older versions of Node or configure npm to install global packages to unexpected locations. For that reason, we recommend installing Node.js on Linux via the link above.

Then, install the dependencies:
```
npm install
```

Finally, start the local dev server:
```
npm run serve
```

To package up a "production" version of the application for hosting on a static server, run the build command:
```
npm run build
```

For more details, see the [vue-cli documentation](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md).

## Mapbox Integration

Mapbox GL JS and Vue have been integrated without using an abstraction library. For more information on how this approach works and why it's helpful, see [Mapbox GL JS + React](https://blog.mapbox.com/mapbox-gl-js-react-764da6cc074a). The ideas in this article have been adapted for Vue.