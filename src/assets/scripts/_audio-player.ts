
const audioPlayer = document.querySelector('.audio-player')
audioPlayer.addEventListener('click', event => {
  player.togglePlaying()
})

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

