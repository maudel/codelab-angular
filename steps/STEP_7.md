#### Quick Jump ####
* [Initial Setup](./INITIAL_SETUP.md)
* [Step 1](./STEP_1.md)
* [Step 2](./STEP_2.md)
* [Step 3](./STEP_3.md)
* [Step 4](./STEP_4.md)
* [Step 5](./STEP_5.md)
* [Step 6](./STEP_6.md)
* **Step 7 <-**
* [Step 9](./STEP_9.md)
* [Step 10](./STEP_10.md)

### Step #7 Task:

Añade temas [theming mixins](https://github.com/angular/material2/blob/master/docs/theming.md) provided by Material.

###### File: `src/theme.scss`

```scss
@import '~@angular/material/_theming';

@include mat-core();

$primary: mat-palette($mat-red);
$accent: mat-palette($mat-blue);

$theme: mat-light-theme($primary, $accent);

@include angular-material-theme($theme);
```

Puede elegir sus paletas de la [Especificación de paletas de colores de Material Design] (https://material.io/guidelines/style/color.html)

Dile a ** angular-cli ** que también compile el archivo de temas, porque angular-cli usa el paquete web,
Angular CLI tiene un complemento integrado para compilar scss para nosotros, por lo que todo lo que tenemos que hacer es incluirlo en la sección de estilos.

###### File: `angular-cli.json`

```json
{
  "apps": [
    {
      "styles": [
        "styles.css",
        "theme.scss"
      ]
    }
  ]
}
```

> El tema precompilado que se incluyó en * Paso 1 * ahora no se utiliza y se puede eliminar.

### Tips

#### 1. Angular CLI

La CLI angular no notará los cambios en el archivo `angular-cli.json`. Reiniciando el
   servir tarea hará el truco.

---

[Go to Tutorial Step 8](./STEP_8.md)
