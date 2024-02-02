#!/usr/bin/env zx
/* eslint-disable */

const glob = require('glob');

const tryStartDevServer = async () => {
  const serverEntryReady = await fs.pathExists(path.join(process.cwd(), './dist/server/server-entry.js'));

  if (!serverEntryReady) {
    await sleep(5000);
    console.log(`RETRYING SERVER START`);
    return await tryStartDevServer();
  }
  await $`nodemon --watch ./dist/server/server-entry.js  ./dist/server/server-entry.js`.pipe(process.stdout);
};

await tryStartDevServer();
