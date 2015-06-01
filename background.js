// Activates when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {

  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    var activeTab = tabs[0];

    chrome.cookies.getAll({url: activeTab.url.toString()}, function (cookies) {
      for (i in cookies) {
        console.log("Removing " + cookies[i].name);
        chrome.cookies.remove(
          {
            url: activeTab.url,
            name: cookies[i].name
          },
          function () {
            chrome.tabs.reload({});
          }
        );
      };
    });

    chrome.tabs.sendMessage(
      activeTab.id,
      {
        "message": "clicked_browser_action",
        "test": activeTab
      }
    );
  });
});
