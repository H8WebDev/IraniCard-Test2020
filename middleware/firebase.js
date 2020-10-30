import firebase from "firebase/app";
import "firebase/auth";


export default async function (req, res, next)
{
	if(firebase.apps.length == 0){
		let config = require('../nuxt.config.js').default.privateRuntimeConfig.firebase;
		firebase.initializeApp(config);
	}
	req.firebase = firebase;
	next();
}
