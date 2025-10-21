import {contentWrappers} from '../../custom-elements'

export function showComponent(value) {
    const component = typeof value === 'string' ? document.querySelector(value) : value

    component.setAttribute('visible', '')
}

export function hideComponent(value) {
    const component = typeof value === 'string' ? document.querySelector(value) : value

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
    contentWrappers.forEach(component => hideComponent(component))
}