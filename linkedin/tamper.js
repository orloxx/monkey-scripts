// ==UserScript==
// @name         Linkedin: Load icons
// @namespace    https://iker.io
// @version      0.1
// @description  Because of custom browser restrictions LinkedIn fails to show icons
// @author       iker.io
// @match        https://www.linkedin.com/*
// @icon         https://www.google.com/s2/favicons?domain=linkedin.com
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function(){
    document.body.classList.add('boot-complete');
    document.body.classList.add('icons-loaded');
  });
})();
