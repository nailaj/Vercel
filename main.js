// Esperamos que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn-cambiar-color');

    // Función para cambiar el color de fondo aleatoriamente
    function cambiarColorFondo() {
        const colores = ['#f4a261', '#2a9d8f', '#e76f51', '#264653', '#d4a5a5'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.backgroundColor = colorAleatorio;
    }

    // Agregar el evento al botón
    btn.addEventListener('click', cambiarColorFondo);
});
