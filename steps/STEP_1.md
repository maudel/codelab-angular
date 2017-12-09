#### Indice  ####
* [Initial Setup](./INITIAL_SETUP.md)
* **Step 1 <-**
* [Step 2](./STEP_2.md)
* [Step 3](./STEP_3.md)
* [Step 4](./STEP_4.md)
* [Step 5](./STEP_4.md)
* [Step 6](./STEP_6.md)
* [Step 7](./STEP_7.md)
* [Step 9](./STEP_9.md)
* [Step 10](./STEP_10.md)

### Step #1 Task:

Aqui te explicaremos como instalar l Angular Material en tu aplicacion your Angular application.

* Importa `MaterialModule` de` @ angular / material` y usala dentro del conjunto de importaciones de tu módulo.
* Dado que el material angular depende de las animaciones, el `BrowserAnimationsModule` necesita ser incluido también.

> Como también usaremos Flexbox CSS, también incluiremos la biblioteca `@ angular / flex-layout`.

```terminal
npm install @angular/material @angular/flex-layout --save
```

Modifique los siguientes archivos para usar Angular Material y FlexLayout en la aplicación.
###### File: `src/app/app.module.ts`


```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,

    // Flex-layout
    FlexLayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

###### File: `src/styles.scss`

```css
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
@import "https://fonts.googleapis.com/css?family=Material+Icons";
@import "https://fonts.googleapis.com/css?family=Roboto:400,300";

html, body {
  display: flex;
  flex-direction: column;

  font-family: Roboto, Arial, sans-serif;
  margin: 0;
  height: 100%;
}
```
### Tips

#### 1. FlexLayout + Body

Usamos propiedades de flexión en `html` y` body` porque no son parte del marcado `<app-root> Loading ... </ app-root>` que Angular arranca. Esto se puede solucionar con facilidad cuando se realiza un bootstraping de un componente que tiene `body` como selector.
###### File: `src/app/app.component.ts`

```js
@Component({
  selector: 'body',
  template: '<h1> {{title}} </h1>'
})
export class AppComponent {
  title = 'Angular Material Workshop';
}
```

#### 2. Temas 

Podemos importar un tema o crear el nuestro, read [Theming your Angular Material app](https://github.com/angular/material2/blob/master/guides/theming.md) for more info



---
  
[Go to Tutorial Step 2](./STEP_2.md)
