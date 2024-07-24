
 import FadSDK from '@fad-producto/fad-sdk';
import {ACUANT_CREDENTIALS, CONFIGURATION, TOKEN} from './acuant-constants';

 

 
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
	 const acuantResponse = await FAD_SDK.startAcuant(ACUANT_CREDENTIALS, idData, idPhoto, manualCapture, CONFIGURATION);
 
	 // PROCESS_COMPLETED
	 console.log(acuantResponse);
	 // use the results as you see fit
	 // show result example
 
	 const containerResult = document.getElementById('container-result');
	 const imageIdFront = document.getElementById('image-id-front') as HTMLImageElement;
	 const imageIdBack = document.getElementById('image-id-back') as HTMLImageElement;
	 const imageFace = document.getElementById('image-face') as HTMLImageElement;
	 const ocr = document.getElementById('ocr');
 
	 containerResult.style.display = 'flex';
	 imageIdFront.src = acuantResponse.data.id.front.image.data;
 
	 if(acuantResponse.data.id?.back?.image?.data) {
		 imageIdBack.src = acuantResponse.data.id.back.image.data;
	 } else {
		 imageIdBack.style.display = 'none';
	 }
	 imageFace.src = acuantResponse.data.idPhoto;
	 ocr.innerHTML = JSON.stringify(acuantResponse.data.idData.ocr);
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