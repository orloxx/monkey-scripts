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

  if (window.Worker) {
    const worker = new Worker('https://raw.githubusercontent.com/orloxx/monkey-scripts/main/yt/worker.js');

    worker.onmessage = function(e) {
      if (e.data === 'ready') {
        worker.postMessage('ready');
      }
    };
  }
})();
