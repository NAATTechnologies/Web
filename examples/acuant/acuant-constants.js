// acuant credentials
export const ACUANT_CREDENTIALS = {
	passiveUsername: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
	passivePassword: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
	passiveSubscriptionId: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
	acasEndpoint: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
	livenessEndpoint: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
	assureidEndpoint: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
};

export const TOKEN = 'TOKEN';
// optional, the app has default legends and colors
export const CONFIGURATION = {
	views: {
		instructions: true,
		preview: true,
	},
	imageResult: {
		quality: 0.3,
	},
	customization: {
		fadCustomization: {
			colors: {
				primary: '#A70635',
				secondary: '#A70635',
				tertiary: '#363636',
			},
			buttons: {
				primary: {
					backgroundColor: '#A70635',
					labelColor: '#ffffff',
					borderColor: '#A70635',
					borderStyle: 'solid',
					borderWidth: '1px',
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
				scan: {
					none: 'ENFOCA TU ID SOBRE LA GUÍA',
					smallDocument: 'ACERCATE MÁS',
					bigDocument: 'DEMASIADO CERCA',
					goodDocument: '',
					capturing: 'CAPTURANDO ',
					tapToCapture: 'TOCA LA PANTALLA PARA CAPTURAR',
				},
				manualCapture: {
					tooltip: 'Captura nuevamente',
					mobile: {
						instruction: 'Captura el frente de tu identificación',
						buttonNext: 'Continuar',
					},
					desktop: {
						instruction: 'Sube el frente de tu identificación',
						title: 'Frente',
					},
				},
				common: {
					loader: {
						initializing: 'iniciando',
						processing: 'procesando',
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
			//  instruction: 'Custom image URL',
		},
		images: {
			//  instructionFrontManualCaptureMobile: 'Custom image URL',
			// instructionBackManualCaptureMobile: 'Custom image URL',
			// instructionFrontManualCaptureDesktop: 'Custom image URL',
			// instructionBackManualCaptureDesktop: 'Custom image URL'
		},
	},
};
