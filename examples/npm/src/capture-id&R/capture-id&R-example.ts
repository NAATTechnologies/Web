import { TOKEN, CREDENTIALS, CONFIGURATION } from "./capture-id&R-constants";

// const FadSDK = require('FadSDK');
import FadSDK from "@fad-producto/fad-sdk";

async function initProcess() {
	const options = {
		environment: FadSDK.getFadEnvironments().UAT
	};

	const FAD_SDK = new FadSDK(TOKEN, options);
	try {
		const idData = true; // true - ocr, false - without this data
		const idPhoto = true; // true - get imaghen face of id, false - without this data
		console.log(TOKEN);
		
		// Returns the image of identification (id.image.data) and relevant information (sharpness, glare), documentInstance, idData and idPhoto
		const regulaResponse = await FAD_SDK.startRegula(CREDENTIALS, FadSDK.Constants.Regula.CaptureType.CAMERA_SNAPSHOT, idData, idPhoto, CONFIGURATION);

		if(regulaResponse.event  === FadSDK.Constants.EventModule.MODULE_CLOSED){
			alert('Module closed by the user');
			return;
		}
		// // PROCESS_COMPLETED
		console.log('Process completed');
		console.log(regulaResponse);
		// // use the results as you see fit
		// // show result example

		const containerResult = document.getElementById('container-result');
		const imageIdFront = document.getElementById('image-id-front') as HTMLImageElement;
		const imageIdBack = document.getElementById('image-id-back') as HTMLImageElement;
		const imageFace = document.getElementById('image-face') as HTMLImageElement;
		const ocr = document.getElementById('ocr');

		containerResult.style.display = 'flex';
		imageIdFront.src = regulaResponse.data.id.front;

		if (regulaResponse.data.id?.back) {
			imageIdBack.src = regulaResponse.data.id.back;
		} else {
			imageIdBack.style.display = 'none';
		}
		imageFace.src = regulaResponse.data.idPhoto;
		ocr.innerHTML = JSON.stringify(regulaResponse.data.idData.ocr);
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