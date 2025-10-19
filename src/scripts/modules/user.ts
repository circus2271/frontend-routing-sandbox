class User {
	constructor(
		public name: string,
		public email: string,
		public avatarSrc: string
		) {}
}

const isLoggedIn = () => localStorage.getItem('isLoggedIn') === 'true'


export let currentUser = isLoggedIn() ? getUserInfo() : null

// тупо конечно, но пока так
function getUserInfo() {
	const name = localStorage.getItem('name')
	const email = localStorage.getItem('email')
	const avatarSrc = localStorage.getItem('avatarSrc')

    return new User(name, email, avatarSrc)
}

export const logout = () => {
		localStorage.setItem('name', 'b')
	localStorage.setItem('email', 'example@example.com')
	localStorage.setItem('avatarSrc', 'https:///')

	currentUser = null
}

export const login = () => {
	localStorage.setItem('name', 'b')
	localStorage.setItem('email', 'example@example.com')
	localStorage.setItem('avatarSrc', 'https:///')

	currentUser = getUserInfo()
}

