import FadSDK from "@fad-producto/fad-sdk";
import { CREDENTIALS, CONFIGURATION, TOKEN } from './liveness-3D-constants';


async function initProcess() {
 const options = {
  environment: FadSDK.getFadEnvironments().UAT,
 };

 const FAD_SDK = new FadSDK(TOKEN, options);
 try {
  const facetecResponse = await FAD_SDK.startFacetec(CREDENTIALS, CONFIGURATION);

  // PROCESS_COMPLETED
  console.log('Process completed');
  console.log(facetecResponse);
  // use the results as you see fit
  // show result example

  const img = facetecResponse.data.auditTrail[0];
  const imgLowQuality = facetecResponse.data.lowQualityAuditTrail[0];
  const faceScan = facetecResponse.data.faceScan;

  // use the results as you see fit
  // show result example
  const containerResult = document.getElementById('container-result');
  const imageId = document.getElementById('image-id') as HTMLImageElement;
  const imageFace = document.getElementById('image-face') as HTMLImageElement;

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
  } else {
   // restart component
   console.log(JSON.stringify(ex));
  }
 } finally {
  FAD_SDK.end();
 }
}

initProcess();
