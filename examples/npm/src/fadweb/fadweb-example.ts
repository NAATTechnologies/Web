import FadSDK from "@fad-producto/fad-sdk";

async function initProcess() {
	const options = {
		environment: FadSDK.getFadEnvironments().UAT
	};

	console.log(`V${FadSDK.version}`)

	const FAD_SDK = new FadSDK(null, options);
	try {
			const ticket = 'TICKET';
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