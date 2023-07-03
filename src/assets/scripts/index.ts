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
  document.querySelector('#current-url').innerHTML = location.pathname
});


const navigate = (url, state = {}) => {
  history.pushState(state, '', url)
  document.querySelector('#current-url').innerHTML = location.pathname
}


// navigate('555')


const audioPlayer = document.querySelector('.audio-player')
audioPlayer.addEventListener('click', event => {
  player.togglePlaying()
})


document.querySelector('.navigation').addEventListener('click', event => {
  if (event.target instanceof HTMLAnchorElement) {
    event.preventDefault()

    const href = event.target.href
    navigate(href)
  }
})


// add state and controllers
//
// update state via controller
// then notify controller that state is changed
// update ui via controller

// const playerStateSetHandler = () => {
//   set: function (obj, prop, value) {
//     if (obj[prop] === 'Playing') {
//       obj[prop] = value;
//
//       console.log('value changed:',obj[prop])
//       alert('wow')
//     }
//   }
// };

class Player {
  state: {
    playing: boolean,
    currentSong: string,
    defaultSong: string
  }

  constructor() {
    // how to proxy:
    // https://www.programiz.com/javascript/proxies
    // @ts-ignore
    this.state = new Proxy({playing: false}, {
      set: function (obj, prop, value) {
        obj[prop] = value;

        console.log('value changed:', obj[prop])
        // notify controllers and update ui

        window.dispatchEvent(new CustomEvent('playerStateChanged', {
          detail: {
            state: obj
          }
        }))
        return true
      }
    })

    this.setInitialSong()
  }

  setInitialSong() {
    this.setSong()
  }

  play() {
    this.state.playing = true
  }

  stop() {
    this.state.playing = false
  }

  isPlaying() {
    return this.state.playing
  }

  togglePlaying() {
    this.state.playing = !this.state.playing;
  }

  setSong(songName) {
    this.state.currentSong = songName
  }
}

const player = new Player()

window.addEventListener('playerStateChanged', (e: CustomEvent) => {
  const newState = e.detail.state

  document.body.setAttribute('data-player-state', newState.playing)
  const songName = newState.songName
})


// const updateUi = (newState) => {
//   document.body.setAttribute('data-player-state', newState.playing)
//
// }
