
import FadSDK from '@fad-producto/fad-sdk';
import { CREDENTIALS, CONFIGURATION, TOKEN } from './liveness-3D&I-constants';

async function initProcess() {
 const options = {
  environment: FadSDK.getFadEnvironments().UAT,
 };

 const FAD_SDK = new FadSDK(TOKEN, options);
 try {
  const moduleResponse = await FAD_SDK.startIdentyFace(CREDENTIALS, CONFIGURATION);

  // PROCESS_COMPLETED
  console.log('Process completed');
  console.log(moduleResponse);
  // use the results as you see fit
  // show result example

  const img = moduleResponse.data.templates.JPEG;
  const dataInfo = {
    quality: moduleResponse.data.quality,
    resolution: moduleResponse.data.resolution,
    captureData: moduleResponse.data.capture_date
  }

  // use the results as you see fit
  // show result example
  const containerResult = document.getElementById('container-result');
  const imageId = document.getElementById('image-id') as HTMLImageElement;
  const info = document.getElementById("info");

  containerResult.style.display = 'flex';
  imageId.src = 'data:image/png;base64, ' + img;
  info.innerText = JSON.stringify(dataInfo, null, 2)

 } catch (ex) {
  // PRROCESS_ERROR
  console.log(ex);
  if (ex.code === FadSDK.Errors.IdentyFace.NO_MODEL_URL) {
   // do something
   alert('Faltan las credenciales');
  } else if (ex.code === FadSDK.Errors.IdentyFace.ERROR_BROWSER_VERSION_NOT_SUPPORTED) {
   // restart component
  } else if (ex.code === FadSDK.Errors.IdentyFace.TIMEOUT) {
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
