#### Quick Jump ####
* [Initial Setup](./INITIAL_SETUP.md)
* [Step 1](./STEP_1.md)
* [Step 2](./STEP_2.md)
* [Step 3](./STEP_3.md)
* [Step 4](./STEP_4.md)
* [Step 5](./STEP_5.md)
* **Step 6 <-**
* [Step 7](./STEP_7.md)
* [Step 9](./STEP_9.md)
* [Step 10](./STEP_10.md)

### Step #6 Task:

Aquí utilizaremos los componentes `mat-card` y` mat-slide-toggle` de Angular Material.

###### File:  `src/app/app.component.html`

```html
...

<div class="content" fxLayout="row" fxLayout.sm="column" fxLayoutGap="16px">

  <mat-card fxFlex="80">
    <mat-icon svgIcon="avatars:{{selectedUser.avatar}}" class="avatar"></mat-icon>
    <h2>{{selectedUser.name}}</h2>
    <p>{{selectedUser.details}}</p>
  </mat-card>

  <mat-card fxFlex fxLayout="column" fxLayoutGap="14px">
    <mat-slide-toggle [(ngModel)]="selectedUser.isAdmin">Is Admin?</mat-slide-toggle>
    <mat-slide-toggle [(ngModel)]="selectedUser.isCool">Is Cool?</mat-slide-toggle>
  </mat-card>

</div>

...
```

![image](https://cloud.githubusercontent.com/assets/6004537/24765552/7d32dbf2-1ab5-11e7-886d-3eee6fa84ba6.png)


### Tips

#### 1. FlexLayout
El uso de `fxLayout.sm =" column "` le dice al contenido que debe ser un contenedor de columna cuando la pantalla es pequeña (punto de corte `960px`)

Especificar un espacio entre los diferentes niños se puede hacer mediante el uso de
[`fxLayoutGap`](https://github.com/angular/flex-layout/wiki/Declarative-API-Overview) con valor de `16px`.

#### 2. HammerJS

HammerJS maneja todas las interacciones y gestos del usuario para Material y simplifica la API.

Incluyendo el paquete `hammerjs` en nuestra aplicación angular usando Webpack.

###### File:  `src/app/app.module.ts`

```ts
...

import 'hammerjs';

...
```

----

[Go to Tutorial Step 7](./STEP_7.md)
