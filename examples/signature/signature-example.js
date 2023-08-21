

import FadSdk from '../../web-sdk/fad-sdk.min.js';
import { CONFIGURATION, TOKEN} from './signature-constants.js';

async function initProcess() {
	const options = {
		environment: FadSdk.getFadEnvironments().UAT
	};

	const fadSdk = new FadSdk(TOKEN, options);
	try {
		const signatureResponse = await fadSdk.startSignature( CONFIGURATION);

		// PROCESS_COMPLETED
		console.log('Process completed');
		console.log(signatureResponse);
		// use the results as you see fit
		// show result example
		
		const faceVideoUrl = URL.createObjectURL(signatureResponse.videoFace);
		const signatureVideoUrl = URL.createObjectURL(signatureResponse.videoSignature);

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
		signatureImage.src = signatureResponse.imageSignature;


	} catch (ex) {
		// PRROCESS_ERROR
		console.log(ex);
	} finally {
		fadSdk.end();
	}
}

initProcess();