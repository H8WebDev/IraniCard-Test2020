export default {
	components: true,

	router: {
		base: '/',
	},

	serverMiddleware: [
		'~/middleware/firebase.js',
		{ path: '/auth/login', handler: '~/middleware/auth/login.js' },
		{ path: '/auth/logout', handler: '~/middleware/auth/logout.js' },
		{ path: '/auth/signup', handler: '~/middleware/auth/signup.js' },
	],

	modules: [ '@nuxtjs/axios', 'bootstrap-vue/nuxt' ],

	bootstrapVue: {
		icons: true,
	},

	privateRuntimeConfig: {
		firebase: {
			apiKey: "AIzaSyDT3123T1nrxAsoo0D2pq4ASY5CHITd2fk",
			authDomain: "iranicard-test.firebaseapp.com",
			databaseURL: "https://iranicard-test.firebaseio.com",
			projectId: "iranicard-test",
			storageBucket: "iranicard-test.appspot.com",
			messagingSenderId: "1089381516550",
			appId: "1:1089381516550:web:00f69ea2fd616c01ad0a87"
		},
	},

	head: {
		title: 'IraniCard - Front End Test 2020',
		meta: [
			{ charset: 'UTF-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'author', content: 'Hessam Shahpouri' },
			{ hid: 'description', name: 'description', content: 'IraniCard Front End Test 2020' },
		],
		link: [
			{ rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' },
		],
		script: [],
	},

	loading: {
		color: '#2196F3',
		failedColor: '#F44336',
		height: '4px',
		throttle: 200,
		duration: 8000,
		continuous: true,
		css: true,
		rtl: false,
	},

}
