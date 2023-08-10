import { data } from './data.js'

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
        album.groupName = group.groupName             //...
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

  return group
}
//
// const getGroupAlbums = async (groupName) => {
//   const group = await getGroup(groupName)
//   return group.albums || []
// }

export const findAlbum = async (groupName, albumName) => {
  const group = await getGroup(groupName)
  const album = group.albums.find(album => album.albumName === albumName)

  return album
}

export const scrollToTop = () => {
  window.scroll(0,0)
}

export const scrollUp = () => {
  window.scroll({top: 0, behavior: 'smooth'})
}

export const URL_CHANGE_EVENT = 'urlChange'
export const urlChange = 'urlChange'
//export const defaultTimeout = 1500
export const defaultTimeout = 500
// export const defaultTimeout = 250

type PredefinedPage = 'about' | 'home' | '404'
//const a: PredefinedPage = 'about'

//alert(typeof a)
const whichPage = (): 'about' | 'home' | 'group' | 'album' | '404' => {
  const urlParts = location.pathname.split('/').filter(part => part !== '')

  if (urlParts.length === 2) {
    // propably an album page or 404
//    return 'album'

//    const possibleGroupName = urlParts[0]
//    const possibleAlbumName = urlParts[1]


  }
 // if (urlParts.length === 1) {
 //   const part = urlParts[0]
 //
 //   if ((predefinedPages as string[]).includes(part)) {
 //     return part as PredefinedPage
 //   }
//  }

//    switch (part) {
//      case 'about':
//        return 'about';
//    }
//    if (predefinedPages.includes(part)) {
//      return predefinedPages.find(page => page === part)
//    }


//    const possibleGroupName = urlParts[0]

//    const data = await getData()

//    const currentGroup = data.groups?.filter(group => {
//      return group.groupName === possibleGroupName
//    })[0]
//
//    if (currentGroup.coverImage) {
//      this.image.src = currentGroup.coverImage
//    }
//
//    if (!currentGroup.coverImage) {
//      this.image.src = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url);
//    }
//  }
//
//  if (urlParts.length > 1) {
//    // set placeholder
//    this.image.src = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url);
//  }

  return 'about'
}

whichPage()

const predefinedPages: PredefinedPage[] = ['about', 'home', '404']
