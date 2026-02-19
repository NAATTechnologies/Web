

import FadSDK from '../web-sdk/fad-sdk.min.js';
import { CONFIGURATION, TOKEN } from './signature-constants.js';

async function initProcess() {
	const options = {
		environment: FadSDK.getFadEnvironments().UATHA
	};

	const FAD_SDK = new FadSDK(TOKEN, options);
	try {
		const signatureResponse = await FAD_SDK.startSignature(CONFIGURATION);

		if (signatureResponse.event === FadSDK.Constants.EventModule.MODULE_CLOSED) {
			alert('Module closed by the user');
			return;
		}

		// PROCESS_COMPLETED
		console.log('Process completed');
		console.log(signatureResponse);
		// use the results as you see fit
		// show result example

		const faceVideoUrl = URL.createObjectURL(signatureResponse.data.videoFace);
		const signatureVideoUrl = URL.createObjectURL(signatureResponse.data.videoSignature);

		const containerResult = document.getElementById('container-result');
		const faceVideo = document.getElementById('face-video');
		const signatureVideo = document.getElementById('signature-video');
		const signatureImage = document.getElementById('signature-img');
		const downloadFaceVideo = document.getElementById('donwload-face-video');
		const downloadSignatureVideo = document.getElementById('donwload-signature-video');

		containerResult.style.display = 'flex';
		faceVideo.src = faceVideoUrl;
		signatureVideo.src = signatureVideoUrl;
		downloadFaceVideo.href = faceVideoUrl;
		downloadSignatureVideo.href = signatureVideoUrl;
		signatureImage.src = signatureResponse.data.imageSignature;


	} catch (ex) {
		// PRROCESS_ERROR
		if (ex.code === FadSDK.Errors.Signature.NOT_ACCEPT_CAMERA_PERMISSION) {
			// do something
			alert('Cámara no soportada, intenta en otro dispositivo');
		} else {
			// restart component
			alert(JSON.stringify(ex));
		}
		console.log(ex);
	} finally {
		FAD_SDK.end();
	}
}

initProcess();