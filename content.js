chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request);
    if (request.message === "clicked_browser_action") {
      console.log("Full stop");
    }
  }
);
