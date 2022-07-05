// ==UserScript==
// @name         YouTube: automated AYA
// @namespace    https://iker.io
// @version      0.1
// @description  YouTube Music Player performs an are-you-alive check sometimes. This will click "Yes" always.
// @author       iker.io
// @match        https://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function getWorkerURL( url ) {
    const content = `importScripts( "${ url }" );`;
    return URL.createObjectURL( new Blob( [ content ], { type: "text/javascript" } ) );
  }

  if (window.Worker) {
    const url = 'https://raw.githubusercontent.com/orloxx/monkey-scripts/main/yt/worker.js';
    const worker = new Worker(getWorkerURL(url));

    worker.onerror = function(error) {
      worker.terminate();
    }

    worker.onmessage = function(e) {
      console.log('worker responding', e);
    }

    worker.postMessage('start');
  }
})();
