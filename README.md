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

Este documento proporciona información sobre FadSDK, el SDK web que permite a los desarrolladores integrar funcionalidad de difentes módulos (link al apartado e módulos) en sus aplicaciones web móviles.

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

## Módulos

El SDK incluye los siguientes módulos:

### [Regula](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Regula)

- Captura y procesamiento de documentos
- Extracción de OCR
- Clasificación de documentos
### [Acuant](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Acuant#websdk-acuant)

- Captura y procesamiento de documentos
- Extracción de OCR
- Clasificación de documentos

---

## Configuración

1. Agregue el archivo `fad-sdk.min.js` en el proyecto que se utilizará

> **Nota**: estos archivos deben estar accesibles en el directorio de recursos públicos de la aplicación alojada):

Dentro del archivo JS donde se quiere utilizar el SDK debes importar el objeto `FadSdk`.

```js
import FadSdk from 'fad-sdk.min.js';
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

1. Una vez se ha importado `FadSdk` en el script deseado, se debe crear una instancia de la clase FadSdk.

```js
const FAD_SDK = new FadSdk(token, options);
```

> :information_source: Para más información consulta [Uso](https://github.com/NAATTechnologies/Web/wiki/Uso)

## Iniciar proceso

### 1. Usar instancia de `FadSdk` para iniciar el proceso deseado a través de un método.

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

#### Regula

[`FadSDK.startRegula(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Regula#websdk-regula)

#### Acuant
[`FadSDK.startAcuant(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Acuant#websdk-acuant)

#### Signature
[`FadSDK.startSignature(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Signature#websdk-signature)

#### Facetec
[`FadSDK.startFacetec(....)`](https://github.com/NAATTechnologies/Web/wiki/WebSDK-Facetec#websdk-facetec)

### 5. Ejemplo de código completo

```js
import FadSdk from './web-sdk/fad-sdk.min.js';

.
.
.

const FAD_SDK = new FadSdk(token, options);
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

> **Nota**: estos ejemplos son únicamente desmostrativos, cada desarrollador debe determinar la mejor implementación y las mejores prácticas según sea el caso.

