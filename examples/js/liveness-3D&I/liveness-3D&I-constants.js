export const CREDENTIALS = {
  modelUrl: "XXXXXXXXXXXXXXXXXX",
};
export const TOKEN = "XXXXXXXXXXXXXXXXXXXXX";


// optional, the app has default legends and colors
export const CONFIGURATION = {
  livenesCheck: true,
  asThreshold: "HIGH",
  assisted: false,
  timeout: 50000,
  appUI: 0,
  headerProcess: window.location.origin,
  customization: {
    fadCustomization: {
    colors: {
      primary: "#A70635",
    },
    buttons: {
      primary: {
        backgroundColor: "#A70635",
        labelColor: "#ffffff",
      },
    },
    fonts: {
      title: {
        fontSize: "25px",
        fontFamily: "system-ui",
      },
      subtitle: {
        fontSize: "17px",
        fontFamily: "system-ui",
      },
      content: {
        fontSize: "15px",
        fontFamily: "system-ui",
      },
      button: {
        fontSize: "17px",
        fontFamily: "system-ui",
      },
    },
  },
  moduleCustomization: {
    style: {
      identy: {
        canvas: {
          canvasBackground: "#F2F2F2",
          labelColor: "#FFFFFF",
          ovalBorderBackground: null,
          ovalBorderErrorBackground: "#E4DC30",
          tickerActiveBackground: null,
          tickerDefaultBackground: "#FFFFFF",
        },
      },
    },
    legends: {
      identy: {
        feedbackCaptured: "Captura exitosa",
        feedbackChangeLight: "Evite reflejos y sombras",
        feedbackChangeLightTooBright:
          "Entorno muy iluminado, muévase a un entorno con mejor iluminación",
        feedbackChangeLightTooDark:
          "Entorno muy oscuro, muévase a un entorno con mejor iluminación",
        feedbackClose: "Aléjese del dispositivo",
        feedbackDownFacing:
          "Inclina la cabeza hacia arriba, barbilla perpendicular al dispositivo",
        feedbackEyeLevel: "Mire de frente",
        feedbackFaceOutside: "Coloque su cara dentro del óvalo",
        feedbackFar: "Acérquese al dispositivo",
        feedbackInitialization: "inicializando",
        feedbackInsideGuide: "Coloque su cara dentro del óvalo",
        feedbackLeftFacing:
          "Cabeza inclinada hacia la izquierda, mire de frente",
        feedbackNotCentered: "Coloque su cara dentro del óvalo",
        feedbackNotStable: "No se mueva",
        feedbackOk: "No se mueva",
        feedbackOnlyPortrait: "Posición <strong>vertical</strong> requerida",
        feedbackPleaseHold: "No se mueva",
        feedbackProcessing: "procesando",
        feedbackRetakeButton: "Recaptura",
        feedbackRetakeButtonClose: "Cerrar",
        feedbackRetakeContent: "Muévase a un entorno con mejor iluminación",
        feedbackRetakeHeader: "Necesitamos recapturar",
        feedbackRetakeOptimalImage: "Captura óptima",
        feedbackRetakeYourImage: "Su captura",
        feedbackRightFacing:
          "Cabeza inclinada hacia la derecha, mire de frente",
        feedbackRotated: "Mire de frente",
        feedbackSearching: "Buscando",
        feedbackTrainingButtonNext: "Siguiente",
        feedbackTrainingLabel: "No mostrar de nuevo",
        feedbackUpFacing:
          "Inclina la cabeza hacia abajo, barbilla perpendicular al dispositivo",
      },
    },
  }
},
  pathDependencies: {
    // imageDirectory: "IMAGES PATH",
  },
};
