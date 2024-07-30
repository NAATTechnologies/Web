<!--div align="right">

  ## Idiomas

  [![en](https://img.shields.io/badge/idioma-english-B22234.svg)](https://github.com/jonatasemidio/multilanguage-readme-pattern/blob/master/README.md)
  [![pt-br](https://img.shields.io/badge/idioma-português-009C3B.svg)](https://github.com/jonatasemidio/multilanguage-readme-pattern/blob/master/README.pt-br.md)
  [![es](https://img.shields.io/badge/idioma-español-yellow.svg)](https://github.com/jonatasemidio/multilanguage-readme-pattern/blob/master/README.es.md)

</div-->

# FAD SDK Web iframe v1.0.0

**Agosto 2023**

<!-- Accede a [https://github.com/NAATTechnologies/Web/releases](https://github.com/NAATTechnologies/Web/releases) para ver las notas de la versión. -->

---

<!-- ## Migration information

See [Migration Details](docs/MigrationDetails.md) for more information. -->

## Introducción

Este documento proporciona información sobre FAD SDK, el SDK web que permite a los desarrolladores integrar funcionalidad de diferentes [módulos](#modules) en sus aplicaciones web móviles.

---

## Requerimientos

Los requerimientos de hardware y de dispositivo/navegador cambian en relación al módulo que se va a usar.

**Hardware:**
  - **Global:**
    - Memoria RAM: 4GB+
  - **Módulo con uso de cámara:**
    - Cámara frontal 7 MP+
    - Cámara trasera 12 MP+
  - **Módulo con grabación de video:**
    - Cámara frontal 7 MP+
    - Cámara trasera 12 MP+

**Dispositivo/Navegador:**
- **Módulo con uso de cámara:**
    - Soporte de [getUserMedia](https://developer.mozilla.org/es/docs/Web/API/MediaDevices/getUserMedia)
    - Soporte de [WASM/WebAssembly](https://developer.mozilla.org/es/docs/WebAssembly)
- **Módulo con grabación de video:**
    - Soporte de [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)


---
<a name="modules"></a>
## Módulos

El SDK incluye los siguientes módulos:

### [Capture-id&R](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Capture‐id&R)

- Captura y procesamiento de documentos
- Extracción de OCR
- Clasificación de documentos
### [Capture-id&A](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Capture‐id&A)

- Captura y procesamiento de documentos
- Extracción de OCR
- Clasificación de documentos
- Alertas de pruebas ( fecha de expiración del documento, fecha de nacimiento de la persona, clasificación del documento, el número del documento, el nombre en la identificación, etc ) realizadas en los documentos 

### [Liveness-3D](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Liveness‐3D)

- Prueba de vida
- Detección suplantación de identidad (fotografías, videos y máscaras)

### [Firma](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Signature)
- Pad de firma
- Detección de rostro
- Grabación de videos (rostro y firma)
- Biometría de la firma

### [Videoacuerdo](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Videoagreement)
- Detección de rostro
- Grabación de video
- Leyenda en modo karaoke

### [Videograbación](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Videotaping)
- Detección de rostro
- Detección de identificaciones (ID MEX, Pasaporte MEX)
- Grabación de video
- Leyenda en modo karaoke

### [Capture-id](https://github.com/NAATTechnologies/Web/wiki/WebSDK-CaptureId)
- Captura de documentos (INE, IFE, Pasaporte Mexicano)
- Extraccion de OCR

### [Liveness-3D&I](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Liveness‐3D&I)
- Prueba de vida
- Detección suplantación de identidad (fotografías, videos y máscaras)

## Instalación  

### Para npm instale la librería con el comando:
```bash
npm install @fad-producto/fad-sdk 
```

### Para el archivo JS
Agregue el archivo `fad-sdk.min.js` en el proyecto que se utilizará

> **Nota**: estos archivos deben estar accesibles en el directorio de recursos públicos de la aplicación alojada):

## Configuración

Importar el objeto `FadSDK` desde la libreria npm
 
```js
import FadSDK from '@fad-producto/fad-sdk';
```
Importar el objeto `FadSDK` desde el archivo JS

```js
import FadSDK from 'fad-sdk.min.js';
```

> :warning: Nota importante para **Vanila JS**
>
> Para esta forma de implementación recuerda que al importar tu script desde el HTML, debe especificarse que es de tipo módulo
>
> ```html
> <!DOCTYPE html>
> <html lang="es">
>  <head> </head>
>  <body>
>   ...
>   <script
>    src="index.js"
>    type="module"
>   ></script>
>  </body>
> </html>
> ```

## Inicializar el SDK

1. Una vez se ha importado `FadSDK` en el script deseado, se debe crear una instancia de la clase FadSDK.

```js
const FAD_SDK = new FadSDK(token, options);
```

> :information_source: Para más información consulta [Uso](https://github.com/NAATTechnologies/Web/wiki/Uso)

## Iniciar proceso

### 1. Usar instancia de `FadSDK` para iniciar el proceso deseado a través de un método.

Todos los procesos serán promesas por lo que para obtener el resultado del proceso es necesario esperar a que la promesa sea resuelta o, en su defecto, si se generó un error, que la promesa sea rechazada.

```js
const response = await FAD_SDK.startRegula();
// usar el resultado como sea deseado
```

> :information_source:  Para más información consulta consulta [uso de `async/await`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

### 2. Manejo de errores

En caso de generarse un error, la promesa será rechazada y se retornará el error.

```js
 .
 .
 .
 catch (ex) {
  // Catches the error code and process as you consider
  console.error(ex);
 }

```

De forma general, la estructura devuelta en el error será la siguiente:

```js
ResponseError <T> {
  code: T
  error: string;
}

```

> :warning: Para entender a qué se refiere el código de error (_code_) es necesario consultar la lista de los códigos de error para cada módulo.

Es responsabilidad plena del desarrollador que implemente el SDK el manejo de los errores, así como las decisiones que se tomen en cada caso.

Los errores pueden contener información diferente en función del módulo, por lo que es necesario que se consulte la documentación específica para cada proceso.

### 3. Terminar el proceso
Finalmente, terminar el proceso con el uso del método `end()`

```js
.
.
.
finally {
 FAD_SDK.end();
}
```

### 4. Referencia de los métodos de FadSDK

#### Capture-id&R

[`FAD_SDK.startRegula(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Capture‐id&R)

#### Capture-id&A
[`FAD_SDK.startAcuant(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Capture‐id&A)

#### Signature
[`FAD_SDK.startSignature(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Signature#websdk-signature)

#### Liveness-3D
[`FAD_SDK.startFacetec(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Liveness‐3D)

#### Videoagreement
[`FAD_SDK.startVideoagreement(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Videoagreement#websdk-videoagreement)

#### Videotaping
[`FAD_SDK.startVideotaping(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Videotaping#websdk-videotaping)

#### Capture id
[`FAD_SDK.startCaptureId(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-CaptureId#websdk-captureId)

#### Liveness‐3D&I
[`FAD_SDK.startIdentyFace(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Liveness‐3D&I)

### 5. Ejemplo de código completo

```js
import FadSDK from './web-sdk/fad-sdk.min.js';

.
.
.

const FAD_SDK = new FadSDK(token, options);
try {
 const response = await FAD_SDK.startRegula(....);
 // use the result as you fit
} catch (ex) {
 // Catches the error code and process as you consider
 console.error(ex);
} finally {
 FAD_SDK.end();
}
```
## Ejemplos

Cada módulo aquí descrito, cuenta con su [ejemplo](https://github.com/NAATTechnologies/Web/tree/master/examples) para un entendimiento más práctico.

> **Nota**: estos ejemplos son únicamente demostrativos, cada desarrollador debe determinar la mejor implementación y las mejores prácticas según sea el caso.

