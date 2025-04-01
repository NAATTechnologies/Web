import FadSDK from '../web-sdk/fad-sdk.min.js';

const options = { environment: FadSDK.getFadEnvironments().UAT };
const FAD_SDK = new FadSDK(null, options);

async function initProcess() {
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