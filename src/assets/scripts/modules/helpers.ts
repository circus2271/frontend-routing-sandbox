import data from '../data'
import { GroupNotFoundError, AlbumNotFoundError } from './custom-errors';
import { navigate } from './routing';

export const getData = async () => {
  return data
}

export const getAllAlbums = async () => {
  const availableAlbums = [];
  const data = await getData();

  data.groups?.forEach(group => {
    const albums = [...group.albums]
    if (albums) {
      albums.forEach(album => {
        // alert(group.groupName)
        // album.groupName = group.groupName             //...
        availableAlbums.push(album)
        // debugger
      })
    }
  })

  return availableAlbums
}

export const getAllGroups = async () => {
  const data = await getData()
  const groups = data.groups || []

  return groups
}

export const getGroup = async (groupName) => {
  const allGroups = await getAllGroups()
  const group = allGroups.find(group => group.groupName === groupName)
  if (group === undefined) {
    throw new GroupNotFoundError()
  }

  return group
}
//
// const getGroupAlbums = async (groupName) => {
//   const group = await getGroup(groupName)
//   return group.albums || []
// }

export const findAlbum = async (groupName, albumName) => {
  const group = await getGroup(groupName)
  if (group === undefined) {
    throw new GroupNotFoundError()
  }

  const album = group.albums.find(album => album.albumName === albumName)
  if (album === undefined) {
    throw new AlbumNotFoundError()
  }

  return album
}

export const scrollToTop = () => {
  window.scroll(0, 0)
}

export const scrollUp = () => {
  window.scroll({top: 0, behavior: 'smooth'})
}

// export const URL_CHANGE_EVENT = 'urlChange';
//export const defaultTimeout = 1500
export const defaultTimeout = 500;
// export const defaultTimeout = 250


export const updateUi = async () => {
  // alert(location.pathname)
  // const is404 = location.pathname === '/404'
  // if (is404) document.body.setAttribute('data-404', '')
  // if (!is404) document.body.removeAttribute('data-404')


  const albumDetail = document.querySelector('album-detail')
  const navigation = document.querySelector('.navigation')
  const availableAlbums = document.querySelector('available-albums')

  const urlParts = location.pathname.split('/').filter(part => part !== '');

  if (urlParts.length === 2) {
    // assume it's an album page

    // navigation.classList.remove('visible')
    navigation.classList.remove('visible')
    availableAlbums.classList.remove('visible')

    const groupName = urlParts[0]
    const albumName = urlParts[1]

    let album;
    try {
      album = await findAlbum(groupName, albumName)
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        // alert('g')
        console.warn(error.message)
        navigate('/404')
      }
      if (error instanceof AlbumNotFoundError) {
        // alert('album')
        // console.log('album')
        console.warn(error.message)
        // console.log(error.message)
        navigate('/404')

      }

      console.log('redirect to 404 page')
      return
    }
    const fallbackImage = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url)

    albumDetail.innerHTML = `
      <div class="album-cover">
        <div class="placeholder"></div>
        <img 
          src="${album.coverImage}"
          alt="${album.albumName}'s album cover image"
          onload="
            // setTimeout(() => {
            this.classList.add('visible')
            //   this.style.visibility = 'visible';
            // }, ${defaultTimeout})
          "
          onerror="this.src = '${fallbackImage}"
          >        
      </div>
      <div class="album-info">
        <div class="album-name">
          ${album.albumName || 'default value album name'}
        </div>
        <div class="group-name">
          ${album.groupName || 'default value group name'}
        </div>
        <div class="date-of-release">
          ${album.release || 'bay'}
          // ${album.release || 'default release date'}
        </div>
      </div>
    `

    albumDetail.classList.add('visible')

    return
  }

  // const predefindeRoutes = ['about', '']

  navigation.classList.add('visible')
  albumDetail.classList.remove('visible')
  availableAlbums.classList.add('visible')
}


