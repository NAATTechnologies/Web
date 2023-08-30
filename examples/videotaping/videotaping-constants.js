export const TOKEN = 'TOKEN';

// optional, the app has default legends and colors
export const CONFIGURATION = {
 allowClose: true,
 views: {
  instructions: true,
  preview: true,
 },
 idDetection: {
  captureId: true,
  probability: 0.8,
 },
 selfie: {
  captureSelfie: false,
  imageType: 'image/png',
  imageQuality: 1,
 },
 selfieId: {
  captureSelfieId: false,
  imageType: 'image/png',
  imageQuality: 1,
  captureTimeout: 100,
 },
 timer: {
  recording: { min: 5, max: 60 },
  faceUndetected: 5,
 },
 recorder: {
  recordEverything: false,
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
    videoagreement: {
     buttonRecord: 'Iniciar grabación',
     buttonFinish: 'Terminar',
     acceptancetInstruction: 'Graba el siguiente texto de forma clara y fuerte',
     recording: 'Grabando',
     focusFace: 'Enfoca tu rostro dentro de la guía',
    },
    idDetection: {
     instruction: 'Acerca y aleja tu identificación',
     instructionCustomOne: 'Acerca y aleja el',
     instructionCustomTwo: 'de tu identificación',
    },
    common: {
     loader: {
      initializing: 'iniciando',
      processing: 'procesando',
     },
    },
   },
   legendsInstructions: {
    title: 'Videograbación',
    subtitle: 'Acerca y aleja tu identificación, posteriormente graba el texto de forma clara y fuerte',
    buttonNext: 'Continuar',
    instructions: 'Recuerda no hacer uso de lentes de sol, gorras u otros elementos que dificulten la identificación de tu rostro.',
   },
   legendsPreview: {
    title: 'Videograbación',
    buttonRetry: 'Volver a grabar',
    buttonNext: 'Confirmar grabación',
   },
   style: {
    common: {
     loader: {
      backgroundColor: '#000000',
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
