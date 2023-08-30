export const TOKEN =
 'TOKEN';

// optional, the app has default legends and colors
export const CONFIGURATION = {
 allowClose: true,
 views: {
  instructions: true,
  preview: true,
 },
 selfie: {
  captureSelfie: false,
  imageType: 'image/png',
  imageQuality: 1,
 },
 timer: {
  recording: { min: 5, max: 40 },
  faceUndetected: 5,
 },
 customization: {
  fadCustomization: {
   colors: {
    primary: '#A70635',
    secondary: '#A70635',
    tertiary: '#363636',
    succesful: '#5A9A92',
   },
   buttons: {
    primary: {
     backgroundColor: '#A70635',
     labelColor: '#ffffff',
     borderColor: '#A70635',
     borderStyle: 'solid',
     borderWidth: '1px',
    },
    secondary: {
     backgroundColor: '#363636ad',
     labelColor: '#ffffff',
     borderColor: '#ffffff',
    },
    common: {
     backgroundColorDisabled: '#dcdcdc',
     labelColorDisabled: '#8e8e8e',
    },
   },
   fonts: {
    title: {
     fontSize: '25px',
     fontFamily: 'system-ui',
    },
    subtitle: {
     fontSize: '17px',
     fontFamily: 'system-ui',
    },
    content: {
     fontSize: '15px',
     fontFamily: 'system-ui',
    },
    informative: {
     fontSize: '12px',
     fontFamily: 'system-ui',
    },
    button: {
     fontSize: '17px',
     fontFamily: 'system-ui',
    },
   },
  },
  moduleCustomization: {
   legends: {
    buttonRecord: 'Iniciar grabación',
    buttonFinish: 'Terminar',
    acceptancetInstruction: 'Graba el siguiente texto de forma clara y fuerte',
    recording: 'Grabando',
    focusface: 'Enfoca tu rostro dentro de la guía',
    common: {
     loader: {
      initializing: 'iniciando',
      processing: 'procesando',
     },
    },
   },
   legendsInstructions: {
    title: 'Video acuerdo',
    subtitle: 'Confirma por voz la aceptación del documento',
    buttonNext: 'Continuar',
    instructions: 'Recuerda no hacer uso de lentes de sol, gorras u otros elementos que dificulten la identificación de tu rostro.',
   },
   legendsPreview: {
    title: 'Video acuerdo',
    buttonRetry: 'Volver a grabar',
    buttonNext: 'Confirmar grabación',
   },
   style: {
    common: {
     loader: {
      animationColor: '#FFFFFF',
      backgroundColor: '#000000',
      labelColor: '#FFFFFF',
     },
    },
   },
  },
 },
 pathDependencies: {
  imagesInstructions: {
   // instruction: 'Custom image URL',
  },
 },
};
