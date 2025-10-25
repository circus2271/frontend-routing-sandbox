// function subscribeTo(eventName:)
export function subscribeTo(event: string | CustomEvent) {
	window.addEventLitener(typeof event === 'string' ? event : event.type )
}

export function attachCallbackToEvent(event, callback) {
	window.addEventLitener(event, callback)
}

export function registerEvent(event) {
	const callbacks = []
	window.addEventLitener(event, () => callbacks.forEach(cb => cb(event)))

	// return function addCallback(cb) {
	// 	callbacks.push(cb)
	// }
	return function registerCallback(callback) {
		callbacks.push(callback)
	}
}