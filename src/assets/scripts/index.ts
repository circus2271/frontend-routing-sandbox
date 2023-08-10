// check current url
// draw page
// remove loader
// create player
// keep playing song even when url changes (when navigation occurs)
//
// set addeventlisteners on a hrefs, and if they are external -> make prevent default if ctrl isn't pressed
import './custom-elements'
import { getData, urlChange } from "./_helpers";

//document.querySelector('#current-url').innerHTML = location.pathname


const navigate = async (url, state = {}) => {
  history.pushState(state, '', url)
//  document.querySelector('#current-url').innerHTML = location.pathname

//  await updateUi(url)
}

// const updateUi = () => {
//  const urlParts = location.pathname.split('/').filter(part => part !== '')
//
//  if (urlParts.length === 1) {
//    // assume this is group name,
//    // so show group detail page
//
//    const groupName = urlParts[0]
//
//  }

// }

// updateUi()


// navigate('555')
const oldupdateUi = async (newUrl) => {
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

// https://flaviocopes.com/history-api/
window.addEventListener("popstate", (event) => {
  //  document.querySelector('#current-url').innerHTML = location.pathname

//  console.log('popstate', event)
//  updateUi()
  emitUrlChangeEvent()
});


document.body.addEventListener('click', event => {
  if (event.target instanceof HTMLAnchorElement) {
    if (event.target.target) return;
    // https://stackoverflow.com/a/6806291/9675926
    if (event.ctrlKey) return;

    event.preventDefault()

    const href = event.target.href
    navigate(href)

    emitUrlChangeEvent()
//    alert(location.pathname)
  }
})

const emitUrlChangeEvent = () => {
  const event = new CustomEvent(urlChange, {
//    detail: {
//      newLocation: location.pathname
//    }
  })

  window.dispatchEvent(event)
}

window.addEventListener(urlChange, (e: CustomEvent) => {
//  alert(e.detail.newLocation)
//   highlightActiveNavLink()
updateUi()
})

const updateUi = () => {
  const albumDetail = document.querySelector('album-detail')
  const navigation = document.querySelector('.navigation')
  const availableAlbums = document.querySelector('available-albums')

  const urlParts = location.pathname.split('/').filter(part => part !== '');


  const backArrow = document.querySelector('.back-arrow')
  if (urlParts.length === 0) {
    backArrow.classList.remove('visible')
    backArrow.setAttribute('href', '/')
  } else if (urlParts.length === 1) {
    backArrow.classList.add('visible')
    backArrow.setAttribute('href', '/')
  } else {
    backArrow.classList.add('visible')

    // slice returns new array (from start, to end (not included))
    const newUrl = urlParts.slice(0, urlParts.length - 1 ).join('');
    backArrow.setAttribute('href', '/' + newUrl)
    // const lastUrlPart = urlParts[urlParts.length - 1]
    // const newUrl =
  }

  if (urlParts.length === 2) {
    // assume it's an album page

    // navigation.classList.remove('visible')
    albumDetail.classList.add('visible')
    navigation.classList.remove('visible')
    availableAlbums.classList.remove('visible')

    return
  }

  navigation.classList.add('visible')
  albumDetail.classList.remove('visible')
  availableAlbums.classList.add('visible')
}

updateUi()



// const backButton = document.querySelector('.back-button a')

// backButton.setAttribute('href', '..' + location.pathname)
// const backButton = document.querySelector('.back-button') as HTMLElement
// backButton.onclick = () => {
  // console.log(history.state)
  // history.back()
// }
// const highlightActiveNavLink = () => {
//   document.querySelector('.navigation a.active')?.classList.remove('active')
//   document.querySelectorAll('.navigation a').forEach((a: HTMLAnchorElement) => {
//     if (a.getAttribute('href') === location.pathname) a.classList.add('active')
//   })
// }
//
// highlightActiveNavLink()
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
    defaultSong: 'https://t4.bcbits.com/stream/397d033da156343a86b71302aad9be72/mp3-v0/3970411301?p=1&ts=1688430687&t=34d036f456ccb3e46edb8f5f1ac296de58484ba7&token=1688430687_ad5728c1b929b1695dbc938898a8608b1bf90f5c'
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
