import FadSDK from "@fad-producto/fad-sdk";

async function initProcess() {
	const options = {
		environment: FadSDK.getFadEnvironments().UATHA
	};

	const FAD_SDK = new FadSDK(null, options);
	try {
			const idValidation = 'ID_VALIDATION';
			const result = await FAD_SDK.startBiometrics(idValidation);
			console.log(result);
	} catch (ex) {
		// PRROCESS_ERROR
		console.log('Unexpected error: ', ex);
		
	} finally {
		FAD_SDK.end();
	}
}

initProcess();