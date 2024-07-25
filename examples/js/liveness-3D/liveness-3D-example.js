import FadSDK from '../web-sdk/fad-sdk.min.js';
import { CREDENTIALS, CONFIGURATION, TOKEN } from './liveness-3D-constants.js';

async function initProcess() {
 const options = {
  environment: FadSDK.getFadEnvironments().UAT,
 };

 const FAD_SDK = new FadSDK(TOKEN, options);
 try {
  const moduleResponse = await FAD_SDK.startFacetec(CREDENTIALS, CONFIGURATION);

  // PROCESS_COMPLETED
  console.log('Process completed');
  console.log(moduleResponse);
  // use the results as you see fit
  // show result example

  const img = moduleResponse.data.auditTrail[0];
  const imgLowQuality = moduleResponse.data.lowQualityAuditTrail[0];
  const faceScan = moduleResponse.data.faceScan;

  // use the results as you see fit
  // show result example
  const containerResult = document.getElementById('container-result');
  const imageId = document.getElementById('image-id');
  const imageFace = document.getElementById('image-face');

  containerResult.style.display = 'flex';
  imageId.src = 'data:image/png;base64, ' + img;
  imageFace.src = 'data:image/png;base64, ' + imgLowQuality;
 } catch (ex) {
  // PRROCESS_ERROR
  console.log(ex);
  if (ex.code === FadSDK.Errors.Facetec.Session.CAMERA_NOT_RUNNING) {
   // do something
   alert('Cámara no soportada, intenta en otro dispositivo');
  } else if (ex.code === FadSDK.Errors.Facetec.Session.INITIALIZATION_NOT_COMPLETED) {
   // restart component
  } else if (ex.code === FadSDK.Errors.Facetec.Status.TIMEOUT) {
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
