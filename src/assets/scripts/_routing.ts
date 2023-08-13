import { scrollUp, updateUi, urlChange } from './_helpers';

export const navigate = async (url, state = {}) => {
  history.pushState(state, '', url)
//  document.querySelector('#current-url').innerHTML = location.pathname

  emitUrlChangeEvent()
//  await updateUi(url)
}

export const urlChange = 'urlChange';

// prevent default scroll restoration
// https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

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
//   scrollToTop()
//   alert(2)

  scrollUp()
  updateUi()
})

updateUi()


type PredefinedPage = 'about' | 'home' | '404'
//const a: PredefinedPage = 'about'

//alert(typeof a)
const whichPage = (): 'about' | 'home' | 'group' | 'album' | '404' => {
  const urlParts = location.pathname.split('/').filter(part => part !== '')

  return 'about'
}

whichPage()

const predefinedPages: PredefinedPage[] = ['about', 'home', '404']
