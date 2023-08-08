import { data } from './data.js'

export const getData = async () => {
  return data
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
