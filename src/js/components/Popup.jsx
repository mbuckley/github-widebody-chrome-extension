import React from 'react';
import {render} from 'react-dom';

// let port;

// /**
//  * Initialize first grabs the current tab and connects to the port
//  * and renders when the addListener comes back.
//  */

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   port = chrome.tabs.connect(tabs[0].id);
// });

// window.addEventListener("unload", function() {
//   // port.postMessage({ action: 'hide-custom-elements', pinned: [] });
// });

class Popup extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { port: port };
  }

  render () {
    return (
      <p>TODO: Add width adjustment</p>
    )
  }
}

render(<Popup />, document.getElementById('popup'));
