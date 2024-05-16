document.addEventListener('DOMContentLoaded', (event) => {
    // Función para obtener un valor aleatorio de un array
    const getRandom = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    // Paleta de colores tomada de coolors.co
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#33FFF3'];

    // Lista de GIFs en la carpeta assets
    const gifs = ['assets/magic-1.gif', 'assets/magic-2.gif', 'assets/magic-3.gif'];

    // Función para cambiar una imagen a un GIF aleatorio
    function changeImageToRandomGif(img) {
        const randomGif = getRandom(gifs);
        img.src = randomGif;
    }

    // Manejador de clics en el documento
    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target.tagName.toLowerCase() === 'a') {
            event.preventDefault();
            console.log('Enlace clicado, pero sin redirigir.');
        } else if (target.tagName.toLowerCase() === 'img') {
            changeImageToRandomGif(target);
            console.log('Imagen cambiada a un GIF aleatorio.');
        } else if (target.tagName.toLowerCase() === 'p') {
            target.style.color = getRandom(colors);
            target.style.backgroundColor = getRandom(colors);
            console.log('Color del párrafo cambiado.');
        } else if (target.tagName.toLowerCase() === 'article' || target.tagName.toLowerCase() === 'section') {
            target.style.backgroundColor = getRandom(colors);
            console.log('Color de fondo del bloque cambiado.');
        }
    });

    // Manejador de hover (mouseover y mouseout) en el documento
    document.addEventListener('mouseover', (event) => {
        const target = event.target;

        if (target.tagName.toLowerCase() === 'img') {
            target.originalSrc = target.src;
            target.src = 'assets/abracadabra.gif';
            console.log('Imagen cambiada a abracadabra.gif.');
        } else if (target.tagName.toLowerCase() === 'p') {
            target.originalColor = target.style.color;
            target.originalBackgroundColor = target.style.backgroundColor;
            target.style.color = getRandom(colors);
            target.style.backgroundColor = getRandom(colors);
            console.log('Color del párrafo cambiado en hover.');
        } else if (target.tagName.toLowerCase() === 'article' || target.tagName.toLowerCase() === 'section') {
            target.originalBackgroundColor = target.style.backgroundColor;
            target.style.backgroundColor = getRandom(colors);
            console.log('Color de fondo del bloque cambiado en hover.');
        }
    });

    document.addEventListener('mouseout', (event) => {
        const target = event.target;

        if (target.tagName.toLowerCase() === 'img' && target.originalSrc) {
            target.src = target.originalSrc;
            console.log('Imagen devuelta a su estado original.');
        } else if (target.tagName.toLowerCase() === 'p' && target.originalColor && target.originalBackgroundColor) {
            target.style.color = target.originalColor;
            target.style.backgroundColor = target.originalBackgroundColor;
            console.log('Párrafo devuelto a su estado original.');
        } else if ((target.tagName.toLowerCase() === 'article' || target.tagName.toLowerCase() === 'section') && target.originalBackgroundColor) {
            target.style.backgroundColor = target.originalBackgroundColor;
            console.log('Color de fondo del bloque devuelto a su estado original.');
        }
    });
});
