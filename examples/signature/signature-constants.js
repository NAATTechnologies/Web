
export const TOKEN = 'TOKEN';

// optional, the app has default legends and colors
export const CONFIGURATION = {
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
		recording: { min: 2, max: 15 },
		faceUndetected: 5,
	},
	customization: {
		fadCustomization: {
			colors: {
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
				tapInstruction: 'Da un toque en el recuadro para empezar a firmar',
				buttonFinish: 'Terminar',
				recording: 'Grabando',
				focusFace: 'Enfoca tu rostro dentro de la guía',
				common: {
					loader: {
						initializing: 'iniciando',
						processing: 'procesando',
					},
				},
			},
			legendsInstructions: {
				title: 'Video firma',
				subtitle: 'Enfoca tu rostro dentro de la guía y firma dentro del recuadro',
				buttonNext: 'Continuar',
				instructions: 'Recuerda no hacer uso de lentes de sol, gorras u otros elementos que dificulten la identificación de tu rostro.',
			},
			legendsPreview: {
				title: 'Firma',
				buttonRetry: 'Volver a firmar',
				buttonNext: 'Confirmar firma',
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