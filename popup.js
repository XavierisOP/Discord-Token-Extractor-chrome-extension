document.addEventListener("DOMContentLoaded", function () {
  var extractButton = document.getElementById("extractButton");

  extractButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      if (tab.url.startsWith("https://discord.com/")) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tab.id },
            function: extractToken,
          },
          function (result) {
            if (chrome.runtime.lastError || !result || result.length === 0) {
              alert("Failed to extract token. Make sure you are on a Discord page.");
              return;
            }

            var token = result[0].result;
            if (token) {
              token = token.replace(/"/g, "");
              navigator.clipboard.writeText(token).then(function () {
                alert("Token extracted and copied to clipboard!");
              });
            } else {
              alert("Failed to extract token. Make sure you are on a Discord page.");
            }
          }
        );
      } else {
        alert("Please navigate to a valid Discord page to extract the token.");
      }
    });
  });
});

function extractToken() {
  var token = localStorage.token;
  return token;
}
