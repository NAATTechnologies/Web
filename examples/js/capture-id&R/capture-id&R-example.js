

import FadSDK from '../web-sdk/fad-sdk.min.js';
import {CREDENTIALS, CONFIGURATION, TOKEN} from './capture-id&R-constants.js';

async function initProcess() {
	const options = {
		environment: FadSDK.getFadEnvironments().UAT
	};

	const FAD_SDK = new FadSDK(TOKEN, options);
	try {
		const idData = true; // true - ocr, false - without this data
		const idPhoto = true; // true - get imaghen face of id, false - without this data

		// Returns the image of identification (id.image.data) and relevant information (sharpness, glare), documentInstance, idData and idPhoto
		const moduleResponse = await FAD_SDK.startRegula(CREDENTIALS, idData, idPhoto, FadSDK.Constants.Regula.CaptureType.CAMERA_SNAPSHOT, CONFIGURATION);

		if(moduleResponse.event  === FadSDK.Constants.EventModule.MODULE_CLOSED){
			alert('Module closed by the user');
			return;
		}
		// PROCESS_COMPLETED
		console.log('Process completed');
		console.log(moduleResponse);
		// use the results as you see fit
		// show result example

		const containerResult = document.getElementById('container-result');
		const imageIdFront = document.getElementById('image-id-front');
		const imageIdBack = document.getElementById('image-id-back');
		const imageFace = document.getElementById('image-face');
		const ocr = document.getElementById('ocr');

		containerResult.style.display = 'flex';
		imageIdFront.src = moduleResponse.data.id.front;

		if (moduleResponse.data.id?.back) {
			imageIdBack.src = moduleResponse.data.id.back;
		} else {
			imageIdBack.style.display = 'none';
		}
		imageFace.src = moduleResponse.data.idPhoto;
		ocr.innerHTML = JSON.stringify(moduleResponse.data.idData.ocr);
	} catch (ex) {
		// PRROCESS_ERROR
		console.log(ex);
		if (ex.code === FadSDK.Errors.Regula.CAMERA_PERMISSION_DENIED) {
			// do something
			alert('Permiso de la cámara denegado, favor de activar los permisos');
		} else if (ex.code === FadSDK.Errors.Regula.ID_PHOTO_NOT_FOUND) {
			// restart component
			alert('Foto del rostro de la identificación no encontrada, favor de reintentar el proceso');
		} else if (ex.code === FadSDK.Errors.Regula.OCR_NOT_FOUND) {
			// restart component
			alert('OCR de la identificación no encontradO, favor de reintentar el proceso');
		} else {
			// restart component
			alert(JSON.stringify(ex));
		}
	} finally {
		FAD_SDK.end();
	}
}

initProcess();