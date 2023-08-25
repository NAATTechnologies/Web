

import FadSdk from '../../web-sdk/fad-sdk.min.js';

async function initProcess() {
	const options = {
		environment: FadSdk.getFadEnvironments().UAT
	};

	const fadSdk = new FadSdk(null, options);
	try {
			const ticket = 'ticket';
			const result = await fadSdk.startFadWeb4(ticket);
			console.log(result);
	} catch (ex) {
		// PRROCESS_ERROR
		console.log('Unexpected error: ', ex);
		
	} finally {
		fadSdk.end();
	}
}

initProcess();