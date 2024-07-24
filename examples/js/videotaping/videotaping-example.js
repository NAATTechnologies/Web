import FadSDK from '../web-sdk/fad-sdk.min.js';
import { CONFIGURATION, TOKEN } from './videotaping-constants.js';

async function initProcess() {
 const options = {
  environment: FadSDK.getFadEnvironments().UAT,
 };

 const FAD_SDK = new FadSDK(TOKEN, options);
 try {
  const LEGEND =
   'Yo Nombre del firmante, con fecha de nacimiento 20 de Junio, con credencial de elector número: 1234134134 declaro que soy Soltero, con ingresos mensuales de $15,667.21, cuento con Casa o depto propio actualmente SI cuento con tarjetas de crédito y reconozco que la información que he proporcionado es verídica';
  const IDENTIFICATIONS = [
   { name: FadSDK.Constants.Videotaping.IdsAllowed.ID_MEX_FRONT, title: 'Frente' },
   { name: FadSDK.Constants.Videotaping.IdsAllowed.ID_MEX_BACK, title: 'Reverso' },
  ];
  const videotapingResponse = await FAD_SDK.startVideotaping(LEGEND, IDENTIFICATIONS, CONFIGURATION);
  if (videotapingResponse.event === FadSDK.Constants.EventModule.MODULE_CLOSED) {
   alert('Module closed by the user');
   return;
  }

  // PROCESS_COMPLETED
  console.log('Process completed');
  console.log(videotapingResponse);
  // use the results as you see fit
  // show result example

  const videoUrl = URL.createObjectURL(videotapingResponse.data.video);
  const startSecondResult = videotapingResponse.data.startSecond;
  // // show result example

  const containerResult = document.getElementById('container-result');
  const videoId = document.getElementById('video-id');
  const startSecond = document.getElementById('startSecond');
  const downloadAncord = document.getElementById('donwload-ancord');

  containerResult.style.display = 'flex';
  videoId.src = videoUrl;
  downloadAncord.href = videoUrl;
  startSecond.innerHTML = startSecondResult;
 } catch (ex) {
  // PRROCESS_ERROR
  if (ex.code === FadSDK.Errors.Videotaping.NOT_ACCEPT_CAMERA_PERMISSION) {
   // do something
   alert('Cámara no soportada, intenta en otro dispositivo');
  } else {
   // restart component
   alert(JSON.stringify(ex));
  }
 } finally {
  FAD_SDK.end();
 }
}

initProcess();
