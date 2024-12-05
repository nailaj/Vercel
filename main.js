// Este archivo contiene el código JavaScript que se ejecutará en la página

// Esperamos a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el botón por su ID
    const btn = document.getElementById('btn-accion');

    // Agregamos un evento para cuando el botón sea clickeado
    btn.addEventListener('click', function() {
        alert('¡Haz hecho clic en el botón!');
    });
});
