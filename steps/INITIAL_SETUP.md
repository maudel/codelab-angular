#### Indice ####
* **Configuracion Inicial <-**
* [Step 1](./STEP_1.md)
* [Step 2](./STEP_2.md)
* [Step 3](./STEP_3.md)
* [Step 4](./STEP_4.md)
* [Step 5](./STEP_4.md)
* [Step 6](./STEP_6.md)
* [Step 7](./STEP_7.md)
* [Step 9](./STEP_9.md)
* [Step 10](./STEP_10.md)

###### Configuracion Incial

Revisemos como empezar:

`src/index.html`
```html
<head>
  <meta charset="utf-8">
  <title>Angular 5 Codelab</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
```

`src/app/app.module.ts`
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```

Estos archivos contienen los componentes básicos de la aplicación y las instrucciones de arranque para nuestra aplicación.
* El archivo `index.html` es el punto de entrada html
* El `main.ts` es el punto de entrada del paquete web

> ** Nota: ** El archivo`angular-cli.json` simplemente configura nuestro angular-cli via webpack y carga todas las librerias.

#### Proximo Paso
[Go to Step 1](./STEP_1.md)
