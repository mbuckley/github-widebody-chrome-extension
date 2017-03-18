'use strict';

const widenDiffContainers = () => {
  const diffContainers = document.getElementsByClassName("js-diff-progressive-container");
  for(let i=0, len=diffContainers.length; i < len; i++) {
      diffContainers[i].style["width"] = "1400px";
      diffContainers[i].style["margin-left"] = "-210px";
  }
}

document.addEventListener("DOMContentLoaded", function onDomChange() {
  const isGitHub = window.location.href.indexOf("https://github.com") > -1;
  // make it wider
  if (isGitHub) {
    widenDiffContainers();
    chrome.runtime.sendMessage({ action: 'show-page-action' });
  }
});
