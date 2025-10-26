// function subscribeTo(eventName:)
// export function subscribeTo(event: string | CustomEvent) {
// 	window.addEventListener(typeof event === 'string' ? event : event.type )
// } 

export function attachCallbackToEvent(event, callback) {
	window.addEventListener(event, callback)
} 

// export function registerEvent(event: string | CustomEvent) {
export function registerEvent(event: string) {
	const callbacks = []
	window.addEventListener(event, () => callbacks.forEach(cb => cb(event)))

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

export const themeSwitchEvent = registerEvent('themeSwitchEvent')

