// check current url
// draw page
// remove loader
// create player
// keep playing song even when url changes (when navigation occurs)
//
// set addeventlisteners on a hrefs, and if they are external -> make prevent default if ctrl isn't pressed









document.querySelector('#current-url').innerHTML = location.pathname


// https://flaviocopes.com/history-api/

window.addEventListener("popstate", (event) => {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );
  document.querySelector('#current-url').innerHTML = location.pathname
  
});



const navigate = (url, state = {}) => {
  history.pushState(state, '', url)
  document.querySelector('#current-url').innerHTML = location.pathname
}



navigate('555')













