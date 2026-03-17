import FadSDK from "@fad-producto/fad-sdk";

async function initProcess() {
	const options = {
		environment: FadSDK.getFadEnvironments().UATHA
	};

	console.log(`V${FadSDK.version}`)

	const FAD_SDK = new FadSDK(null, options);
	try {
			const ticket = 'fad-web-click-ticket';
			await FAD_SDK.startFadWebClick(ticket);
			console.log('Process completed');
	} catch (ex) {
		// PRROCESS_ERROR
		// Restart process
		console.log('Unexpected error: ', ex);
		
	} finally {
		FAD_SDK.end();
	}
}

initProcess();