let timeout$;

function startInterval() {
  let lastTime = 0;

  (function loop() {
    timeout$ = setTimeout(loop, 1);

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

onmessage = function(e) {
  postMessage({ e, d: document });
  switch (e.data) {
    case 'start':
      // startInterval();
      break;
    default:
      break;
  }
}
