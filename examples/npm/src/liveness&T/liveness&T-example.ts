
import FadSDK from '@fad-producto/fad-sdk';
import { CREDENTIALS, CONFIGURATION, TOKEN } from './liveness&T-constants';

async function initProcess() {
 const options = {
  environment: FadSDK.getFadEnvironments().UATHA,
 };

 const FAD_SDK = new FadSDK(TOKEN, options);
 try {
  const moduleResponse = await FAD_SDK.startLivenessToc(CREDENTIALS, CONFIGURATION);

  // PROCESS_COMPLETED
  console.log('Process completed');
  console.log(moduleResponse);

  if (moduleResponse.event == FadSDK.Constants.EventModule.MODULE_CLOSED) {
    alert('Module closed by user');
  } else {
    // use the results as you see fit
    // show result example
      
    const img = moduleResponse.data.faceScan;
  
    // use the results as you see fit
    // show result example
    const containerResult = document.getElementById('container-result');
    const imageId = document.getElementById('image-id') as HTMLImageElement;
  
    containerResult.style.display = 'flex';
    imageId.src = img;
  }

 } catch (ex) {
  // PROCESS_ERROR
  console.log(ex);
  if (ex.code === FadSDK.Errors.LivenessToc.SERVICE_ERROR) {
   // do something
   alert('Ocurrió un error en el servicio');
  } else if (ex.code === FadSDK.Errors.LivenessToc.TIMEOUT_EXCEEDED) {
   // restart component
  } else if (ex.code === FadSDK.Errors.LivenessToc.FACE_BLURRY) {
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
