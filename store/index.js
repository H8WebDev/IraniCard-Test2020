import firebase from "firebase/app";
import "firebase/auth";


export const state = function ()
{
	return {
		user: null,
		signupError: '',
	};
};


export const mutations = {
	userLogin (context, payload) { context.user = payload; },
	userLogout (context) { context.user = null; },
};


export const actions = {

	async nuxtServerInit (store, context)
	{
		if(process.server){
			context.req.firebase.auth().onAuthStateChanged (function (user) {
				if(user){
					context.store.commit('userLogin', {
						uid: user.uid,
						displayName: user.displayName,
						photoURL: user.photoURL,
						email: user.email,
						emailVerified: user.emailVerified,
						phoneNumber: user.phoneNumber,
					});
				}else{
					context.store.commit('userLogout');
				}
			});
		}
	},

	async logout (context, payload)
	{
		return await this.$axios.$post('/auth/logout');
	},

	async login (context, payload)
	{
		return await this.$axios.$post('/auth/login', payload);
	},

	async signup (context, payload)
	{
		return await this.$axios.$post('/auth/signup', payload);
	},
};
