'use strict';

const widenDiffContainers = () => {
  const diffContainers = document.getElementsByClassName("js-diff-progressive-container");
  for(let i=0, len=diffContainers.length; i < len; i++) {
      diffContainers[i].style["width"] = "1400px";
      diffContainers[i].style["margin-left"] = "-210px";
  }
}

const isGitHub = () => {
  const ghRE = /^https:\/\/github.com\/.+\/pull\/.+\/files$/;
  return window.location.href.match(ghRE);
}

const detectAndRun = () => {
  if (isGitHub()) {
    widenDiffContainers();
    chrome.runtime.sendMessage({ action: 'show-page-action' });
  }
}

// listen for state change
document.addEventListener("pjax:complete", function() {
  widenDiffContainers();
});

document.addEventListener("DOMContentLoaded", () => {
  widenDiffContainers();
});
