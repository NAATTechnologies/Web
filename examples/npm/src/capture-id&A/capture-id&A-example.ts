
 import FadSDK from '@fad-producto/fad-sdk';
import {CREDENTIALS, CONFIGURATION, TOKEN} from './capture-id&A-constants';

 

 
 async function initProcess() {
	const options = {
	 environment: FadSDK.getFadEnvironments().UAT,
	};
 
	const FAD_SDK = new FadSDK(TOKEN, options);
	try {
	 const idData = true; // true - ocr, false - without this data
	 const idPhoto = true; // true - get image face of id, false - without this data
	 const manualCapture = true;
 
	 // Returns the image of identification (id.image.data) and relevant information (sharpness, glare), documentInstance, idData and idPhoto
	 const moduleResponse = await FAD_SDK.startAcuant(CREDENTIALS, idData, idPhoto, manualCapture, CONFIGURATION);
 
	 // PROCESS_COMPLETED
	 console.log(moduleResponse);
	 // use the results as you see fit
	 // show result example
 
	 const containerResult = document.getElementById('container-result');
	 const imageIdFront = document.getElementById('image-id-front') as HTMLImageElement;
	 const imageIdBack = document.getElementById('image-id-back') as HTMLImageElement;
	 const imageFace = document.getElementById('image-face') as HTMLImageElement;
	 const ocr = document.getElementById('ocr');
 
	 containerResult.style.display = 'flex';
	 imageIdFront.src = moduleResponse.data.id.front.image.data;
 
	 if(moduleResponse.data.id?.back?.image?.data) {
		 imageIdBack.src = moduleResponse.data.id.back.image.data;
	 } else {
		 imageIdBack.style.display = 'none';
	 }
	 imageFace.src = moduleResponse.data.idPhoto;
	 ocr.innerHTML = JSON.stringify(moduleResponse.data.idData.ocr);
	} catch (ex) {
	 // PRROCESS_ERROR
	 console.log(ex);
	 if (ex.code === FadSDK.Errors.Acuant.UNSUPPORTED_CAMERA) {
		// do something
		alert('Cámara no soportada, intenta en otro dispositivo');
	 } else if (ex.code === FadSDK.Errors.Acuant.FAIL_INITIALIZATION) {
		// restart component
	 } else if (ex.code === FadSDK.Errors.Acuant.FAIL_GET_OCR) {
		// restart component
	 } else if (ex.code === FadSDK.Errors.Acuant.FAIL_GET_FACE_IMAGE) {
		// restart component
	 } else if (ex.code === FadSDK.Errors.Acuant.FACE_IMAGE_URL_NOT_FOUND) {
		// restart component
	 } else if (ex.code === FadSDK.Errors.Acuant.FACE_IMAGE_NOT_FOUND) {
	 } else {
		// restart component
		alert(JSON.stringify(ex));
	 }
	} finally {
		FAD_SDK.end();
	}
 }
 

 initProcess();