import FadSDK from "@fad-producto/fad-sdk";
import { CONFIGURATION, TOKEN } from "./capture-id-constants";

 

 
 async function initProcess() {
	const options = {
	 environment: FadSDK.getFadEnvironments().UAT,
	};
 
	const FAD_SDK = new FadSDK(TOKEN, options);
	try {

	 const captureIdResponse = await FAD_SDK.startCaptureId(CONFIGURATION);
 
	 // PROCESS_COMPLETED
	 console.log(captureIdResponse);
	 // use the results as you see fit
	 // show result example
 
	 const containerResult = document.getElementById('container-result');
	 const imageIdFront = document.getElementById('image-id-front') as HTMLImageElement;
	 const imageIdBack = document.getElementById('image-id-back') as HTMLImageElement;
	 const ocr = document.getElementById('ocr');
 
	 containerResult.style.display = 'flex';
	 imageIdFront.src = captureIdResponse.data.image.front.data;
 
	 if(captureIdResponse.data.image?.back?.data) {
		 imageIdBack.src = captureIdResponse.data.image.back.data;
	 } else {
		 imageIdBack.style.display = 'none';
	 }
	 ocr.innerHTML = JSON.stringify(captureIdResponse.data.ocr);
	} catch (ex) {
	 // PRROCESS_ERROR
	 console.log(ex);
	 if (ex.code === FadSDK.Errors.CaptureId.NOT_READABLE_CAMERA) {
		// do something
		alert('La cámara web o el micrófono están siendo usadas por otra aplicación');
	 } else if (ex.code === FadSDK.Errors.CaptureId.SERVICE_ERROR) {
		// restart component
	 } else if (ex.code === FadSDK.Errors.CaptureId.VIDEO_PLAYING_ERROR) {
		// restart component
	 } else if (ex.code === FadSDK.Errors.CaptureId.MODEL_FAILED) {
		// restart component
	 } else if (ex.code === FadSDK.Errors.CaptureId.TF_LITE_ERROR) {
		//restart component
	 } else {
		// restart component
		alert(JSON.stringify(ex));
	 }
	} finally {
		FAD_SDK.end();
	}
 }
 

 initProcess();