#### Quick Jump ####
* [Initial Setup](./INITIAL_SETUP.md)
* [Step 1](./STEP_1.md)
* **Step 2 <-**
* [Step 3](./STEP_3.md)
* [Step 4](./STEP_4.md)
* [Step 5](./STEP_5.md)
* [Step 6](./STEP_6.md)
* [Step 7](./STEP_7.md)
* [Step 9](./STEP_9.md)
* [Step 10](./STEP_10.md)

### Step #2 Task:

Aquí utilizaremos la planificación y el diseño de wireframe para identificar los componentes y atributos necesarios.
* Añadir  `<mat-toolbar>`, `<mat-sidenav-container>`, `<mat-sidenav>` elementos

  > **Nota:** El `<mat-sidenav>` is el contenedor **lista** vista, y por ahora es una simple contenedor
  `<div>` es el contenedor para la lista de **detalles** .
  
* Agregar  **fxLayout** y **fxFlex** atributos para configurar los layouts y configuracion de tamaño 
* Usar `mode="side"` y `opened` para que no se pueda abrir el layout

###### File: `src/app/app.component.html`

```html
<div fxLayout="column" fxFlex>

  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <span>Angular 5 Tutorial</span>
    </mat-toolbar-row>
  </mat-toolbar>

  <mat-sidenav-container fxFlex>
    <mat-sidenav mode="side" opened>
      Sidenav
    </mat-sidenav>
    <div class="content">
      Page Content
    </div>
  </mat-sidenav-container>

</div>
```

Dando al elemento padre el atributo flex de `1` para llenar la altura y la etiqueta sidenav con el ancho de `320px`

###### File:  `src/app/app.component.css`

```css
:host {
  display: flex;
  flex: 1;
}

mat-sidenav {
  width: 320px;
}
```

---
  
[Go to Tutorial Step 3](./STEP_3.md)
