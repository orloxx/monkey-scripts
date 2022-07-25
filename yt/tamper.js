// ==UserScript==
// @name         YouTube: automated AYA
// @namespace    https://iker.io
// @version      0.2
// @description  YouTube Music Player performs an are-you-alive check sometimes. This will click "Yes" always.
// @author       iker.io
// @match        https://music.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const $parent = document.querySelector('ytmusic-popup-container');
  const observer = new MutationObserver(() => {
    const $areYouThereModal = document.querySelector('ytmusic-you-there-renderer');
    if ($areYouThereModal) {
      const yesButton = $areYouThereModal.querySelector('yt-button-renderer');

      if (yesButton && yesButton.clientHeight > 0) {
        yesButton.click();
      }
    }
  });

  observer.observe($parent, {
    childList: true,
    subtree: true,
  });
})();
