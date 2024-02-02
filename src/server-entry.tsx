import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from './App';

const app = express();

app.get('/*', (req, res) => {
  const entryPoint = ["/main.js"];

  const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
    <App />,
    {
      bootstrapScripts: entryPoint,
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send('<!doctype html><h1>Server Error ‼️ Check node Console. You can find the path alias error!</h1>');
      },
    }
  );
});

app.listen(1234, () => {
  console.log('🚀🚀🚀 RUNNING ON: http://localhost:1234');
});
