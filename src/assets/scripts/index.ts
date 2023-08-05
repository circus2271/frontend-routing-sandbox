// check current url
// draw page
// remove loader
// create player
// keep playing song even when url changes (when navigation occurs)
//
// set addeventlisteners on a hrefs, and if they are external -> make prevent default if ctrl isn't pressed
import './custom-elements'
import {getData} from "./_helpers";

document.querySelector('#current-url').innerHTML = location.pathname


// https://flaviocopes.com/history-api/
window.addEventListener("popstate", (event) => {
  document.querySelector('#current-url').innerHTML = location.pathname
});


const navigate = async (url, state = {}) => {
  history.pushState(state, '', url)
  document.querySelector('#current-url').innerHTML = location.pathname

//  await updateUi(url)
}


// navigate('555')
const updateUi = async (newUrl) => {
  const urlParts = location.pathname.split('/').filter(part => part !== '')

  if (urlParts.length === 2) {
    // assume that first part is groupName and second is album name
    const groupName = urlParts[0]
    const albumName = urlParts[1]

    const data = await getData()

    const currentGroup = data.groups?.filter(group => {
      return group.groupName === groupName
    })[0]

    if (!currentGroup) return console.error('can\'t find a group, 404')

    const currentAlbum = currentGroup.albums?.filter(album => {
      return album.albumName === albumName
    })[0]

    console.log(currentAlbum)

  }

  if (urlParts.length === 1) {
    const part = urlParts[0]

    if (part === 'about') {
      // show about page
    }

    if (part == 'contacts') {
      // show contacts page
    }

    // assume it's a group name and hense a group page

    const groupName = part
    const data = await getData()
    const currentGroup = data.groups?.filter(group => {
      return group.groupName === groupName
    })[0]

    if (!currentGroup) return console.error('can\'t find a group, 404')

    console.log(currentGroup)

  }
//  if (albumName) {
////    showAlbumPage()
//  }
//
//  if (groupName) {
////    showGroupPage()
//  }

//  switch (newUrl) {
//    case '':
//      break;
//    default:
//      alert('хых')
//  }
}

const audioPlayer = document.querySelector('.audio-player')
audioPlayer.addEventListener('click', event => {
  player.togglePlaying()
})

document.body.addEventListener('click', event => {
  if (event.target instanceof HTMLAnchorElement) {
    if (event.target.target) return;
    // https://stackoverflow.com/a/6806291/9675926
    if (event.ctrlKey) return;

    event.preventDefault()

    const href = event.target.href
    navigate(href)
  }
})
//document.querySelector('.navigation').addEventListener('click', event => {
//  if (event.target instanceof HTMLAnchorElement) {
//    event.preventDefault()
//
//    const href = event.target.href
//    navigate(href)
//  }
//})


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

type PlayerState = {
  playing: boolean,
  currentSong?: string,
  defaultSong: string
}

class Player {
  state: PlayerState
  initialState: PlayerState = {
    playing: false,
//    defaultSong: 'https://t4.bcbits.com/stream/397d033da156343a86b71302aad9be72/mp3-v0/3970411301?p=1&ts=1688430687&t=34d036f456ccb3e46edb8f5f1ac296de58484ba7&token=1688430687_ad5728c1b929b1695dbc938898a8608b1bf90f5c'
  }
  audioElement: HTMLAudioElement = document.createElement('audio')

  constructor() {
    // how to proxy:
    // https://www.programiz.com/javascript/proxies
    // @ts-ignore

    this.state = new Proxy(this.initialState, {
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

    this.audioElement.src = this.state.defaultSong
    // this.setInitialSong()
  }

  // setInitialSong() {
  //   this.setSong(this.state.defaultSong)
  // }

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

  // setSong(songName) {
  //   this.state.currentSong = songName
  //   this.audioElement.src = this.state.currentSong
  // }
}

const player = new Player()

// maybe replace this with htmlaudioelement onplay event
window.addEventListener('playerStateChanged', (e: CustomEvent) => {
  const newState = e.detail.state
  document.body.setAttribute('data-player-state', newState.playing)

  if (newState.playing) {
    return player.audioElement.play();
  }

  player.audioElement.pause()
})


// const updateMarkup = () => {
//
// }
// const updateUi = (newState) => {
//   document.body.setAttribute('data-player-state', newState.playing)
//
// }
