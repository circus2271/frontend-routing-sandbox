import data from '../data'
import { GroupNotFoundError, AlbumNotFoundError } from './custom-errors';
import { getCurrentPageInfo, navigate } from './routing';

export type GroupInfo = {
  groupName: string;
  coverImage: string;
  albums: AlbumInfo[];
  // albums: any
}

export type AlbumInfo = {
  albumName: string;
  coverImage: string;
  release?: string;
  tracks: {
    name: string;
    src: string;
  }[]
}

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

export const getGroup = async (groupName): Promise<GroupInfo> => {
  const allGroups = await getAllGroups()
  const group = allGroups.find(group => group.groupName === groupName)
  // if (group === undefined) {
  //   throw new GroupNotFoundError()
  // }

  return group
}
//
// const getGroupAlbums = async (groupName) => {
//   const group = await getGroup(groupName)
//   return group.albums || []
// }

export const findAlbum = async (groupName, albumName): Promise<AlbumInfo> => {
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

export type AlbumRelatedInfo = {
  albumInfo: AlbumInfo;
  groupInfo: GroupInfo;
}

export const getAlbumRelatedInfo = async (groupName, albumName): Promise<AlbumRelatedInfo> => {
  const group = await getGroup(groupName)
  if (group === undefined) {
    throw new GroupNotFoundError()
  }

  const album = group.albums.find(album => album.albumName === albumName)
  if (album === undefined) {
    throw new AlbumNotFoundError()
  }

  return {groupInfo: group, albumInfo: album}
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

  // debugger

  const currentPage = await getCurrentPageInfo()
  const currentRoute = currentPage.routeName

  if (currentRoute === 'album-page') {
    navigation.classList.remove('visible')
    availableAlbums.classList.remove('visible')

    // const fallbackImage = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url)

    const data = currentPage.data as AlbumRelatedInfo
    const {albumInfo: album, groupInfo: group} = data

    albumDetail.innerHTML = `
      <album-cover class="album-detail__album-cover" image-src="${album.coverImage}">
      </album-cover>
      <div class="album-info">
        <div class="album-name">
          ${album.albumName || 'default value album name'}
        </div>
        <div class="group-name">
          ${group.groupName || 'default value group name'}
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


  navigation.classList.add('visible')
  albumDetail.classList.remove('visible')
  availableAlbums.classList.add('visible')
}


