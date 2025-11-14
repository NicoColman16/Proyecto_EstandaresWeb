import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import Swal from 'sweetalert2'
import 'animate.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import {html} from 'htm/preact';
import '@algolia/autocomplete-theme-classic';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'pace-js';
import 'pace-js/themes/blue/pace-theme-flash.css';




console.log("Funciona corrcetamente");

Swal.fire({
  title: '¡Bienvenido!',
  text: 'Explorá las últimas zapatillas en oferta 👟🔥',
  icon: 'success',
  confirmButtonText: 'Descubre mas!'
})

document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btn-alert')

  if(boton){
  boton.addEventListener('click', (event) => {
    // Evita que el formulario se envíe y la página se recargue
    event.preventDefault()

    // Muestra la alerta con SweetAlert2
    Swal.fire({
      title: '¡Agregado al carrito!',
      text: 'Tus zapatillas fueron añadidas correctamente 🛒',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  })
}

  const productos = [
    { nombre: "Nike Air Zoom", precio: 12000 },
    { nombre: "Adidas Ultraboost", precio: 15000 },
    { nombre: "Puma RS-X", precio: 13000 },
    { nombre: "Reebok Classic", precio: 9000 },
    { nombre: "New Balance 574", precio: 11000 }
  ];

  const contenedor = document.querySelector('#autocomplete-container');

  if (!contenedor) {
    console.warn("⚠️ No se encontró el contenedor #autocomplete-container");
    return;
  }

  autocomplete({
    container: '#autocomplete-container',
    placeholder: 'Buscar zapatillas...',
    getSources({ query }) {
      return [
        {
          sourceId: 'productos',
          getItems() {
            return productos.filter(p =>
              p.nombre.toLowerCase().includes(query.toLowerCase())
            );
          },
          templates: {
            item({ item }) {
              return  html`
                <div class="aa-ItemWrapper">
                <div class="aa-ItemContent">
                  <div class="aa-ItemTitle">${item.nombre}</div>
                  <div class="aa-ItemSubtitle">$${item.precio}</div>
                </div>
              </div>
              `;
            },
            noResults() {
              return `<div style="padding:5px;">Sin resultados</div>`;
            }
          }
        }
      ];
    }
  });
});


AOS.init({
  duration: 2000,  // duración de la animación
  once: false      // anima solo una vez

})

window.onload = function () {
    document.getElementById("loader").style.display = "none";
};






