import FadSDK from '../../web-sdk/fad-sdk.min.js';

async function initProcess() {
	const options = {
		environment: FadSDK.getFadEnvironments().UAT
	};

	const FAD_SDK = new FadSDK(null, options);
	try {
			const ticket = 'ticket';
			const result = await FAD_SDK.startFadWeb4(ticket);
			console.log(result);
	} catch (ex) {
		// PRROCESS_ERROR
		console.log('Unexpected error: ', ex);
		
	} finally {
		FAD_SDK.end();
	}
}

initProcess();