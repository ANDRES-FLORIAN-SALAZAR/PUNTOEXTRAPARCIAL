// Manejo de botones de eliminación de productos
// Esta función maneja el evento de clic en los botones de eliminar
// y muestra una confirmación antes de proceder con la eliminación
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones con clase 'delete-btn'
    const deleteButtons = document.querySelectorAll('.delete-btn');
    
    // Para cada botón de eliminar
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevenir el comportamiento por defecto del enlace
            e.preventDefault();
            
            // Agregar animación de shake al botón
            this.classList.add('shake');
            
            // Obtener el nombre del producto desde la celda correspondiente
            const productName = this.closest('tr').querySelector('td:first-child').textContent;
            // Crear mensaje de confirmación personalizado
            const confirmMessage = `¿Estás seguro de eliminar el producto "${productName}"?`;
            
            // Si el usuario confirma la eliminación
            if (confirm(confirmMessage)) {
                // Eliminar la animación antes de redirigir
                this.classList.remove('shake');
                // Redirigir al usuario a la URL de eliminación
                window.location.href = this.href;
            } else {
                // Si se cancela, eliminar la animación
                this.classList.remove('shake');
            }
        });
    });
});

// Manejo de formularios
// Esta función agrega un efecto visual durante el envío de formularios
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        // Buscar el botón de submit en el formulario
        const submitButton = this.querySelector('button[type="submit"]');
        if (submitButton) {
            // Deshabilitar el botón para evitar múltiples envíos
            submitButton.disabled = true;
            // Mostrar un spinner mientras se envía el formulario
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Guardando...';
        }
    });
});

// Manejo de errores de formularios
// Esta función maneja la animación de entrada para los mensajes de error
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos con clase 'form-error'
    const formErrors = document.querySelectorAll('.form-error');
    if (formErrors.length > 0) {
        // Aplicar animación de entrada a cada mensaje de error
        formErrors.forEach(error => {
            error.style.animation = 'fadeIn 0.5s ease-out';
        });
    }
});

// Manejo de errores de formularios
document.addEventListener('DOMContentLoaded', function() {
    const formErrors = document.querySelectorAll('.form-error');
    if (formErrors.length > 0) {
        formErrors.forEach(error => {
            error.style.animation = 'fadeIn 0.5s ease-out';
        });
    }
});
