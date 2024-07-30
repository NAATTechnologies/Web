export const TOKEN = "TOKEN";

// optional, the app has default legends and colors
export const CONFIGURATION = {
  customization: {
    fadCustomization: {
      colors: {
        primary: "#A70635",
      },
    },
    moduleCustomization: {
      legends: {
        title: "Identificación",
        detection: {
          noDocument: "Coloque el documento en el recuadro",
          goodDocument: "No se mueva",
          bigDocument: "Aléjese",
          smallDocument: "Acérquese",
          invalidBack: "Coloque el frente",
          invalidFront: "Coloque el reverso",
          blurryDocument: "Documento poco legible",
        },
        subtitle: {
          front: "Frente",
          back: "Reverso",
        },
        instruction: {
          front: "Captura de identificación",
          back: "Captura de identificación",
        },
      },
      style: {
        outerBackgroundColor: "#2b2b2b66",
        idDetectedOuterBackgroundColor: "#0a0a0ab3",
        detectionBorder: {
          initial: {
            color: "#FFFFFF",
            style: "solid",
            width: "4px",
          },
          warning: {
            color: "#FFDC45",
            style: "solid",
            width: "4px",
          },
          detected: {
            color: "#009895",
            style: "solid",
            width: "4px",
          },
        },
        instruction: {
          initial: {
            backgroundColor: "#000000b5",
            color: "#FFFFFF",
          },
          warning: {
            backgroundColor: "#FFDC45B5",
            color: "#FFFFFF",
          },
          detected: {
            backgroundColor: "#009895",
            color: "#FFFFFF",
          },
        },
      },
    },
  },
  pathDependencies: {
    //   imageDirectory: 'CUSTOM IMAGE URL',
    //   jsDirectory: 'CUSTOM IMAGE URL',
    //   images: {
    // 	nativeCaptureInstruction: 'CUSTOM IMAGE URL'
    //   }
  },
};
