// ==UserScript==
// @name         YouTube: automated AYA
// @namespace    https://iker.io
// @version      0.5
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
    try {
      const $areYouThereModal = $parent.querySelector('ytmusic-you-there-renderer');
      $areYouThereModal.querySelector('yt-button-renderer').click();
    } catch(error) {
      // do nothing
      console.error('Oopsies: ', error);
    }
  });

  observer.observe($parent, {
    childList: true,
    subtree: true,
  });
})();
