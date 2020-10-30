export default function (req, res, next)
{
	res.setHeader('Content-Type', 'application/json');
	let body = JSON.parse(req.read().toString());
	return new Promise(function (resolve, reject) {
		req.firebase.auth().signInWithEmailAndPassword(body.email, body.passwd)
			.then(function () {
				res.end(JSON.stringify({ ok: true, code: 200, message: 'OK' }));
				resolve();
			})
			.catch(function (err) {
				res.end(JSON.stringify({ ok: false, code: err.code || 400, message: err.message }));
				resolve();
			});
	});
}
