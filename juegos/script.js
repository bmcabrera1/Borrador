document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('circle-container');
    const maxCircles = 20;
    let circleCount = 0;

    container.addEventListener('click', function(event) {
        // Comprobar si se ha alcanzado el límite de círculos
        if (circleCount >= maxCircles) {
            // Eliminar el círculo más antiguo
            container.removeChild(container.firstChild);
            circleCount--;
        }

        // Crear un nuevo elemento div para el círculo
        let circle = document.createElement('div');
        circle.className = 'circle';

        // Establecer la posición del círculo en base a la posición del clic dentro del contenedor
        let rect = container.getBoundingClientRect();
        circle.style.left = (event.clientX - rect.left) + 'px';
        circle.style.top = (event.clientY - rect.top) + 'px';

        // Generar un color aleatorio
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        circle.style.backgroundColor = randomColor;

        // Añadir el círculo al contenedor
        container.appendChild(circle);
        circleCount++;
    });
});