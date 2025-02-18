import FadSDK from '../web-sdk/fad-sdk.min.js';
import { CREDENTIALS, CONFIGURATION, TOKEN } from './fingerprints&I-constants.js';

async function initProcess() {
 const options = {
  environment: FadSDK.getFadEnvironments().UAT,
 };

 const detectionModes = ['L4F', 'R4F'];

 const FAD_SDK = new FadSDK(TOKEN, options);
 try {
  const moduleResponse = await FAD_SDK.startIdentyFingerprints(detectionModes, CREDENTIALS, CONFIGURATION);

  // PROCESS_COMPLETED
  console.log('Process completed');
  console.log(moduleResponse);
  // use the results as you see fit
  // show result example

  // use the results as you see fit
  // show result example
  const containerResult = document.getElementById('container-result');

  containerResult.style.display = 'flex';
  containerResult.innerText = JSON.stringify(moduleResponse.data, null, 2)

 } catch (ex) {
  // PRROCESS_ERROR
  console.log(ex);
  if (ex.code === FadSDK.Errors.Identy.NO_CREDENTIALS) {
   // do something
   alert('Faltan las credenciales');
  } else if (ex.code === FadSDK.Errors.Identy.TIME_OUT) {
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
