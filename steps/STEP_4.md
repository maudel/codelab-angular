#### Quick Jump ####
* [Initial Setup](./INITIAL_SETUP.md)
* [Step 1](./STEP_1.md)
* [Step 2](./STEP_2.md)
* [Step 3](./STEP_3.md)
* **Step 4 <-**
* [Step 5](./STEP_5.md)
* [Step 6](./STEP_6.md)
* [Step 7](./STEP_7.md)
* [Step 9](./STEP_9.md)
* [Step 10](./STEP_10.md)

### Step #4 Task:

Aquí utilizará el servicio `MatIconRegistry` provisto por Material que nos permite agregar un espacio de nombres para un grupo de svg's.

###### File: `src/app/app.component.html`

```html
...
  <mat-sidenav mode="side" opened>
  
    <mat-tab-group>
      <mat-tab label="Users">
        <mat-nav-list>
          <mat-list-item *ngFor="let user of users">
            <mat-icon matListAvatar svgIcon="avatars:{{user.avatar}}" class="avatar"></mat-icon>
            <span>{{user.name}}</span>
          </mat-list-item>
        </mat-nav-list>
      </mat-tab>
      <mat-tab label="Settings">
        <span>Settings</span>
      </mat-tab>
    </mat-tab-group>
  
  </mat-sidenav>
...
```

Al usar la función `addSvgIconSetInNamespace` proporcionamos un espacio de nombres que se puede usar con` mat-icon`
y la ubicación de ese grupo svg.
Con eso, podemos tener `<mat-icon svgIcon =" [namespace]: [id] ">` y se vería el espacio de nombres y la identificación en él.
###### File:  `src/app/app.component.ts`

```ts
import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {
      name: 'Lia Lugo',
      avatar: 'svg-11',
      details: 'I love cheese, ...',
      isAdmin: true,
      isCool: false
    },
    {
      name: 'George Duke',
      avatar: 'svg-12',
      details: 'Zombie ipsum ...',
      isAdmin: false,
      isCool: true
    }
    // ...
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }
}

```

###### File:  `src/app/app.component.css`

```css
...

.avatar {
  overflow: hidden;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 12px;
}

/deep/ .mat-list-item-content {
  height: auto !important;
}
```

### Tips

#### 1. Deep CSS Operators

El uso del prefijo `/ deep /` en los selectores hará que el selector se mueva fuera de la encapsulación de vista.
#### 2.  List Items

Los elementos de la lista Material angular tienen una altura fija y no se expandirán a la altura del contenido.
     Sobrescribir y forzar la altura a `auto` permite que el avatar tome altura completa.
----


[Go to Tutorial Step 5](./STEP_5.md)
