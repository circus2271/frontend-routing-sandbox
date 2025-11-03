import {settings} from '@modules/settings'

export function attachCallbackToEvent(event, callback) {
	window.addEventListener(event, callback)
} 

// export function registerEvent(event: string | CustomEvent) {
export function registerEvent(event: string, action) {
	const callbacks = []
	window.addEventListener(event, async () => {
		await action()

		// and then notify callbacks...
		callbacks.forEach(cb => cb(event))
	})


	// return function addCallback(cb) {
	// 	callbacks.push(cb)
	// }
	// return function registerCallback(callback) {
	// 	callbacks.push(callback)
	// }
	return {
		registerCallback(callback) {
   		    callbacks.push(callback)
   		},
   		dispatchEvent() {
   			window.dispatchEvent(new CustomEvent(event))
   		}
	}
}
   			
   			
export const themeSwitchEvent = registerEvent('themeSwitchEvent', () => settings.toggleTheme())

