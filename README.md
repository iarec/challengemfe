# MFE Todo List

## How to run it

npm run dev

## How to integrate it with a host MFE

Configure the host to get the remoteEntry.js file of this MFE.
Example using vite.config.ts

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        todo_app: 'http://localhost:4173/assets/remoteEntry.js',
      },
      shared: ['react'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});
```

## Build

npm run build

## Preview

npm run preview

## Tests

npm run test
