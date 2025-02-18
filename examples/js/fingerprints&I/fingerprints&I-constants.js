export const CREDENTIALS = {
  modelUrl: "XXXXXXXXXXXXXXXXXX",
};
export const TOKEN = "XXXXXXXXXXXXXXXXXXXXX";


// optional, the app has default legends and colors
export const CONFIGURATION = {
  livenesCheck: true,
  asThreshold: 'HIGH',
  captureTimeout: 60000,
  headerProcess: window.location.origin,
  customization: {
    moduleCustomization: {
      style: {
        identy: {
          boxes: {
            initial: null,
            updating: null
          },
          header: {
            flashing: {
              initial: '#FFFFFF',
              middle: '#FFFFFF',
              final: '#FFFFFF'
            }
          },
          instruction: {
            color: '#FFFFFF'
          }
        }
      },
      legends: {
        identy: {
          feedbackRetry: "Algo salió mal, por favor cambie de ubicación",
          feedbackSearching: "Buscando...",
          feedbackInsideGuide: "Por favor, manténgase dentro de la guía",
          feedbackPleaseHold: "Por favor, espere",
          feedbackPleaseHoldFlash: "Por favor, espere el flash",
          feedbackPleaseMove: "Mueva ligeramente los dedos para mejorar el enfoque",
          feedbackPleaseMoveIos2: "Reposicione los dedos <br> para mejorar el enfoque",
          feedbackNoFingers: "Buscando mano {0}",
          feedbackStable: "Por favor, mantenga la mano estable",
          feedbackHandFar: "Acerque la mano",
          feedbackHandClose: "Aleje la mano",
          feedbackCameraAcquiringFailed: "No se puede acceder a la cámara, conceda permisos o vuelva a intentarlo",
          feedbackInitialization: "Inicializando...",
          feedbackNextDetection: "Mueva a la siguiente mano",
          feedbackOrientationNotSupported: "Solo se admite el modo retrato",
          feedbackCapturing: "Capturando",
          feedbackCaptured: "Capturado",
          feedbackBlurry: "Calidad borrosa, vuelva a intentarlo",
          feedbackBlurryNoFlash: "La iluminación no es adecuada, por favor intente en un lugar más iluminado.",
          feedbackRetryQuality: "Mala calidad, intente nuevamente",
          feedbackRetryBlurryNoFlash: "La iluminación no es adecuada, por favor intente en una mejor ubicación.",
          feedbackRetryError: "Mala calidad, intente nuevamente",
          feedbackFingerQuality: "Calidad de la huella, intente nuevamente",
          feedbackLicenseInvalid: "Licencia no válida",
          feedbackDialogClosed: "",
          feedbackTimeout: "No se detectó una mano, ¿Reintentar?",
          feedbackProcessing: "Procesando...",
          feedbackButtonClose: "Cerrar",
          feedbackButtonRetry: "Reintentar",
          feedbackTrainingButtonNext: "Siguiente",
          feedbackTrainingLabel: "No mostrar de nuevo",
          feedbackNoFlash: "Por favor, asegúrese de estar en un lugar bien iluminado",
          feedbackTrainingDialogClosed: "Diálogo de entrenamiento cerrado",
          feedbackDetectionError: "Ocurrió un error de detección",
          feedbackChangeLocation: "Cambiar ubicación para mejorar el enfoque",
          feedbackChangeLocationIos: "Cambiar ubicación para mejor iluminación",
          feedbackSearchingHand: "Coloque su mano {0}",
          errorBrowserNotSupported: "Navegador no compatible, por favor actualice a la última versión.",
          errorUrlNotSupported: "URL no compatible, el SDK requiere una URL con HTTPS o el hostname debe ser 'localhost'",
          errorInetNotSupported: "Internet no compatible.",
          errorDetectionCancelled: "Detección cancelada",
          errorModelFail: "Fallo en la detección del modelo",
          errorInternalServer: "Error interno del servidor",
          errorRequestExpired: "La solicitud ha expirado, intente nuevamente",
          errorDecryptionFailed: "Fallo en la integridad de la solicitud",
          button: {
            ok: "Aceptar",
            cancel: "Cancelar"
          },
          hand: {
            left: "izquierda",
            right: "derecha"
          }
        }
      }
    }
  },
  pathDependencies: {
    // imageDirectory: 'images path'
  }
};
