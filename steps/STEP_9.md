#### Quick Jump ####
* [Initial Setup](./INITIAL_SETUP.md)
* [Step 1](./STEP_1.md)
* [Step 2](./STEP_2.md)
* [Step 3](./STEP_3.md)
* [Step 4](./STEP_4.md)
* [Step 5](./STEP_5.md)
* [Step 6](./STEP_6.md)
* [Step 7](./STEP_7.md)
* [Step 8](./STEP_8.md)
* **Step 9 <-**
* [Step 10](./STEP_10.md)

### Step #9 Task:

Creando un diálogo de Material Angular.
###### File: `src/app/app.component.html`

```html
  <mat-menu #themeMenu x-position="before">
    ...
  </mat-menu>

  <button mat-fab (click)="openAdminDialog()" class="fab-bottom-right">
    <mat-icon>add</mat-icon>
  </button>
```

Se creará un botón `fab` en la parte inferior derecha para abrir el diálogo Material angular.

###### File:  `src/app/app.component.css`

```css
  ...
  
.fab-bottom-right {
position: fixed;
right: 16px;
bottom: 16px;
}
```

El botón `fab` necesita un poco de estilo para colocarlo en el lugar correcto.

###### File:  `src/app/app.component.ts`

```ts
import {MatIconRegistry, MatDialog} from '@angular/material';

import {DialogComponent} from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ...

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog) {
    ...
  }

  private openAdminDialog() {
    this.dialog.open(DialogComponent);
  }

...
```

Para poder mostrar diálogos, el servicio `MatDialog` necesita ser inyectado. Una función que es
referenciado desde la plantilla abrirá el diálogo.

###### File:  `src/app/dialog/dialog.component.ts`

```ts
import {Component} from '@angular/core';

@Component({
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {}
```

###### File: `src/app/dialog/dialog.component.html`

```html
<h3 mat-dialog-title>Admin Dialog</h3>

<mat-dialog-content>
  This is the admin dialog.
</mat-dialog-content>
```

Un diálogo puede ser solo un componente angular normal. Puedes usar directivas específicas
como `mat-dialog-title`,` mat-dialog-content` o `mat-dialog-actions` para darle estilo al diálogo.

###### File: `src/app/app.module.ts`

```ts
...

import {DialogComponent} from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  ...
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Angular no podría compilar el `DialogComponent` cuando llama` openAdminDialog` porque
el componente de diálogo no es parte del `NgModule` dado.

---

[Go to Tutorial Step 10](./STEP_10.md)
