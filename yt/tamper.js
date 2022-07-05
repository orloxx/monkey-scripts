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

  function startInterval() {
    let lastTime = 0;

    (function loop() {
      setTimeout(loop, 1);

      const now = Date.now();
      if (lastTime < now - 3000) {
        const areYouThereModal = document.querySelector('ytmusic-you-there-renderer');

        if (areYouThereModal) {
          const yesButton = areYouThereModal.querySelector('yt-button-renderer');

          if (yesButton && yesButton.clientHeight > 0) {
            yesButton.click();
          }
        }
      }
    })();
  }

  startInterval();
})();
