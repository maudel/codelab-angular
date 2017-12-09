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
* [Step 9](./STEP_9.md)
* **Step 10 <-**

### Step #10 Task:

Crear un formulario dentro del diálogo Material angular.

###### File: `src/app/dialog/dialog.component.html`

```html
<h3>Add User Dialog</h3>
<form #form="ngForm" (ngSubmit)="dialogRef.close(form.value)" ngNativeValidate>
  <div fxLayout="column" fxLayoutGap="8px">
    <div fxLayout="row" fxLayoutAlign="start center">
      <mat-icon svgIcon="avatars:{{selectedAvatar}}" class="avatar"></mat-icon>
      <mat-form-field>
        <mat-select name="avatar" fxFlex placeholder="Avatar" [(ngModel)]="selectedAvatar">
          <mat-option *ngFor="let avatar of avatars; let i = index;" [value]="avatar">Avatar - {{i + 1}}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <mat-form-field>
      <input matInput ngModel name="name" placeholder="Full name" required>
    </mat-form-field>

    <mat-form-field>
      <textarea matInput ngModel name="details" placeholder="Details" rows="15" cols="60" required></textarea>
    </mat-form-field>

    <div fxLayout="row" fxLayoutGap="24px">
      <mat-checkbox ngModel name="isAdmin">Is Admin?</mat-checkbox>
      <mat-checkbox ngModel name="isCool">Is Cool?</mat-checkbox>
    </div>
  </div>
  <mat-dialog-actions align="end">
    <button mat-button type="button" (click)="dialogRef.close()">Cancel</button>
    <button mat-button color="accent">Save User</button>
  </mat-dialog-actions>
</form>
```

Tan pronto como un elemento `<form>` se coloca dentro de un componente, Angular creará una forma angular
automáticamente.

##### Template-Driven Forms

El formulario contendrá diferentes componentes de Material; cada uno con una directiva `ngModel` en él. Todos los componentes que se registran a través de `ngModel` y tienen un atributo` name` de acuerdo se incluirán en el valor del formulario. Una vez que el formulario es válido y se envía el formulario, se puede entregar el valor del formulario
volver al `AppComponent` y agregarlo a la matriz de` usuarios`.


###### File:  `src/app/dialog/dialog.component.ts`

```ts
import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  templateUrl: 'dialog.component.html'
})
export class DialogComponent {
  avatars = new Array(16).fill(0).map((_, i) => `svg-${i+1}`);
  selectedAvatar = this.avatars[0];

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
}

```

Para los componentes que se abren a través del servicio `MatDialog`, se puede inyectar` MatDialogRef`
usando Depnddency Injection. Utilice el token `MatDialogRef` para cerrar y devolver los datos al componente de origen.

###### File: `src/app/app.component.ts`

```ts
this.dialog.open(DialogComponent).afterClosed()
  .filter(result => !!result)
  .subscribe(user => {
    this.users.push(user);
    this.selectedUser = user;
  });
```

Al abrir un diálogo usando el servicio `MatDialog`, habrá un` afterClosed () `observable
que contendrá los datos del resultado de `MatDialogRef`.

###### File: `src/app/app.component.css`

```css
...

/deep/ mat-icon.avatar {
  ...
}
```

Actualmente el ícono `avatar` en el diálogo no tiene los estilos de la clase` avatar`.

Esto se debe al hecho de que Angular encapsula los selectores en los componentes. Usando el `/ deep`
prefix se asegurará de que el selector también coincida con los elementos fuera del componente actual.
--- 

[Go to Summary](../README.md#summary)
