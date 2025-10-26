// import {contentWrappers} from '@custom-elements/index'
// import {contentWrappers} from '~/src/scripts/components/custom-elements/index'
import {contentWrappers} from '../../components/custom-elements'

export function showComponent(value) {
    const component = typeof value === 'string' ? document.querySelector(value) : value

    component.setAttribute('visible', '')
}

export function hideComponent(value) {
    const component = typeof value === 'string' ? document.querySelector(value) : value
// debugger
    component.removeAttribute('visible')
}

export function isVisible(value) {
    const component = typeof value === 'string' ? document.querySelector(value) : value

    return component.hasAttribute('visible')
}

export function triggerNavigation(relativePath) {
    history.pushState({}, '', relativePath)
}

export const hideAllComponents = () => {
    // get html nodes
    // const nodes = Object.keys(contentWrappers)
    const nodes = Object.values(contentWrappers)
    nodes.forEach(component => hideComponent(component))
}