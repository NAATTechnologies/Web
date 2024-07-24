// regula credentials
export const REGULA_CREDENTIALS = {
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
	cameraSnapshot: {
		changeCameraButton: true,
    closeButton: false
	},
	documentReader: {
		changeCameraButton: true,
		timeout: 30000,
	},
	idValidations: {
		cardMatch: true,
	},
	customization: {
		moduleCustomization: {
			style: {},
			legends: {
				desktop: {
					front: {
						instruction: 'Sube el frente de tu identificación',
						title: 'Frente',
					},
					back: {
						instruction: 'Sube el reverso de tu identificación',
						title: 'Reverso',
					},
				},
				cameraSnapshot: {
					front: {
						instruction: 'Captura el frente de tu identificación',
					},
					back: {
						instruction: 'Captura el reverso de tu identificación',
					},
					preparingCamera: 'Preparando cámara',
				},
				documentReader: {
					positionDocumentCenter: 'Posicione el documento en el centro',
					noFocus: 'La cámara no enfoca, favor de dar click en el botón de cambio de cámara',
					moveCloser: 'Acercar la cámara',
					glaresOnDocument: 'Evite brillo en el documento',
					holdDocumentStraight: 'Mantener el documento derecho',
					preparingCamera: 'Preparando cámara',
					preparingService: 'Preparando servicio',
					front: {
						instruction: 'Captura el frente de tu identificación',
					},
					back: {
						instruction: 'Captura el reverso de tu identificación',
					},
				},
			},
			legendsInstructions: {
				title: 'Identificación',
				subtitle: 'Captura tu identifcación',
				buttonNext: 'Continuar',
			},
			legendsPreview: {
				title: 'Identificación',
				subtitle: 'Imagen de tu identificación',
				confirmation: '¿Los datos de tu identificación son legibles?',
				buttonNext: 'Sí, continuar',
				buttonRetry: 'Volver a capturar',
			},
		},
	},
};
