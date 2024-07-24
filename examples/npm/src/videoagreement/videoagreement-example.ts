
import FadSDK from '@fad-producto/fad-sdk';
import { CONFIGURATION, TOKEN } from './videoagreement-constants';

async function initProcess() {
	const options = {
		environment: FadSDK.getFadEnvironments().UAT,
	};

	const FAD_SDK = new FadSDK(TOKEN, options);
	try {
		const LEGEND = 'Yo Nombre del firmante, con fecha de nacimiento 20 de Junio, con credencial de elector número: 1234134134 declaro que soy Soltero, con ingresos mensuales de $15,667.21, cuento con Casa o depto propio actualmente SI cuento con tarjetas de crédito y reconozco que la información que he proporcionado es verídica';
		const videoagreementResponse = await FAD_SDK.startVideoagreement(LEGEND, CONFIGURATION);

		if (videoagreementResponse.event === FadSDK.Constants.EventModule.MODULE_CLOSED) {
			alert('Module closed by the user');
			return;
		}

		// PROCESS_COMPLETED
		console.log('Process completed');
		console.log(videoagreementResponse);
		// use the results as you see fit
		// show result example

		const videoUrl = URL.createObjectURL(videoagreementResponse.data.video);
		// // show result example

		const containerResult = document.getElementById('container-result');
		const videoId = document.getElementById('video-id') as HTMLVideoElement;
		const downloadAncord = document.getElementById('donwload-ancord') as HTMLAnchorElement;

		containerResult.style.display = 'flex';
		videoId.src = videoUrl;
		downloadAncord.href = videoUrl;
	} catch (ex) {
		// PRROCESS_ERROR
		if (ex.code === FadSDK.Errors.Videoagreement.NOT_ACCEPT_CAMERA_PERMISSION) {
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
