// regula credentials
export const CREDENTIALS = {
	license: 'XXXXXXXXXXXXXXXXXXXX',
	apiBasePath: 'XXXXXXXXXXXXXXXXXX'
};
export const TOKEN = 'TOKEN';

// optional, the app has default legends and colors
export const CONFIGURATION = {
	views: {
		instructions: true,
		preview: true,
	},
  disableDesktopView: false,
  capture: {
	cameraSnapshot: {
      changeCameraButton: false,
      closeButton: false,
	},
	documentReader: {
      changeCameraButton: false,
      closeButton: false,
      captureButton: false,
      timeout: 60000,
    },
	},
	idValidations: {
    cardMatch: false,
	},
	customization: {
		moduleCustomization: {
			style: {},
			legends: {
				desktop: {
					front: {
            instruction: "Sube el frente de tu identificación",
            title: "Frente",
					},
					back: {
            instruction: "Sube el reverso de tu identificación",
            title: "Reverso",
					},
				},
				cameraSnapshot: {
					front: {
            instruction: "Captura el frente de tu identificación",
					},
					back: {
            instruction: "Captura el reverso de tu identificación",
					},
				},
				documentReader: {
          noFocus: "La cámara no enfoca, favor de dar click en el botón de cambio de cámara",
          moveCloser: "Acercar la cámara",
          glaresOnDocument: "Evite brillo en el documento",
          holdDocumentStraight: "Mantener el documento derecho",
          keepDeviceStill: "Mantén el dispositivo quieto",

					front: {
            instruction: "Coloca el frente de tu identificación en el recuadro",
					},
					back: {
            instruction: "Coloca el reverso de tu identificación en el recuadro",
					},
				},
			},
			legendsInstructions: {
        title: "Identificación",
        subtitle: "Captura tu identifcación",
        buttonNext: "Continuar",
			},
			legendsPreview: {
        title: "Identificación",
        subtitle: "Imagen de tu identificación",
        confirmation: "¿Los datos de tu identificación son legibles?",
        buttonNext: "Sí, continuar",
        buttonRetry: "Volver a capturar",
			},
		},
	},
};
