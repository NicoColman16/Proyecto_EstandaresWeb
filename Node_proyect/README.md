# Proyecto_EstandaresWeb
Repositorio para los trabajos de Enstandares en Desarrollo Web
Para poder visualizar correctamente este proyecto, se dispone de 3 opciones:

-Opcion 1: Se puede clonar este repositorio en una carpeta local y alli apareceran cada archivo html de una forma que al abrirlo se podra visualizar completamente en el navegador habitual del usuario

-Opcion 2: Si abrimos el proyecto con el editor de codigo Visual Studio Code, podremos descarfar en el mismo la extencion "Live Server" la cual nos permitira visualizazr la pagina web y todos los cambios que hagamos en la misma en nuestro navegador por defecto. Este metodo tiene la ventaja de que cualquier cambio que hagamos en el proyecto, se proyectara en el navegador en tiempo real.

-Opcion 3: La tercera opcion seria clonar el repositorio, abrir github en la web, luego ir a la pestaña de "Settings" y luego "Pages" para activar el servicio de hosting y alli poder visualizarla correctamente.


---------------------------------------------------------------------------------------------------
Este proyecto es un sitio web desarrollado con Vite + Bootstrap que incluye animaciones, buscador inteligente, alertas personalizadas y un loader visual.
A continuación se detallan las librerías utilizadas y cómo están integradas:

Tecnologías principales:

- Vite – entorno de desarrollo rápido y moderno

- JavaScript (ES Modules)

- Bootstrap 5 – estilos y componentes responsivos

- CSS personalizado (custom.css)

- FontAwesome – iconos utilizados en la UI

Dependencias instaladas con Node js

npm install bootstrap  // importa los estilos y funcionalidades de boostrap sin necesidad de poner los enlaces en las vistas html

npm install sweetalert2 // Libreria utilizada para dar mensajes de alertas personalizados (en este caso el "Bienvenidos" y el "Agregar al carrito"#)

npm install aos //Libreria para dar efectos visuales (en este proyecto para el texto que se mueve en la pantalla principal)

npm install @algolia/autocomplete-js  // Libreria para dar funcionalidad a input (aqui sed utiliza para dar las "opciones" en el buscador)

npm install pace-js //Dependencia para dar estilo a la pantalla de carga (las 5 barritas que aparecen entre paginas)


-----------------------------------------------------------
Pasos a seguir para "levantar" el proyecto

1- Clonar el Repositorio con "git clone"
2- Ejecutar el comando "npm install" para que node js descargue todas las dependencias del proyecto y 
lo que figure en package.json
3- Ejecutar "npm run dev" para iniciar el servidor con vite

