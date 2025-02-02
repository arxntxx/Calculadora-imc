# Proyecto Calculadora de IMC

Este proyecto es una aplicación web desarrollada con Angular que permite calcular el Índice de Masa Corporal (IMC) del usuario.


## 🛠️ Comandos Utilizados

### 1️⃣ Creación del Proyecto Angular
```sh
ng new calculadora-imc
```
Este comando genera un nuevo proyecto Angular llamado **calculadora-imc**.

### 2️⃣ Creación de Componentes
```sh
ng generate component component-name
```
o  
```sh
ng g c component-name
```
Este comando crea un nuevo componente Angular. Se utilizó para generar los siguientes componentes:
- **form** → Estructura base de la calculadora
- **weight-height** → Maneja la entrada del peso y la altura del usuario.
- **action-buttons** → Contiene los botones para calcular y resetear el formulario.
- **results** → Muestra el historial de cálculos de IMC.

Ejemplo para generar el componente del formulario:
```sh
ng generate component form
```

### 3️⃣ Creación de una Interfaz TypeScript
```sh
ng generate interface interface-name
```
o  
```sh
ng g i interface-name
```
Este comando crea una interfaz TypeScript para definir la estructura de los datos del usuario.  
Ejemplo:
```sh
ng generate interface userdata
```
Esto generará el archivo `userdata.interface.ts`, donde se puede definir la estructura de los datos del usuario (nombre, peso, altura, IMC, etc.).

### 4️⃣ Ejecutar el Servidor de Desarrollo
```sh
ng serve
```
Este comando inicia el servidor de desarrollo y permite acceder a la aplicación en el navegador en `http://localhost:4200/`.

## 📂 Estructura del Proyecto
```
calculadora-imc/
│── src/
│   ├── app/
│   │   ├── form/
│   │   ├── weight-height/
│   │   ├── action-buttons/
│   │   ├── results/
│   │   ├── userdata.interface.ts
│   │   ├── app.module.ts
│   │   └── app.component.ts
│── angular.json
│── package.json
│── README.md
```

