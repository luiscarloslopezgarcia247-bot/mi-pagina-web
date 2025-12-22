// Creamos un objeto de audio para el sonido del clic
const sonidoClick = new Audio("sonido.mp3"); // coloca aquí tu archivo de sonido en la carpeta

function mostrar(seccion) {
  // reproducir sonido al pulsar
  sonidoClick.play();

  let contenido = document.getElementById("contenido");

  if (seccion === "antigua") {
    contenido.innerHTML = `
      <h2>Historia Antigua</h2>
      <p>
        La historia antigua abarca miles de años de evolución humana, desde las primeras comunidades agrícolas hasta la caída del Imperio Romano.
        En este periodo se desarrollaron las primeras ciudades, los sistemas de escritura y las grandes civilizaciones que marcaron el rumbo de la humanidad.
      </p>
      <p>
        Egipto destacó por sus faraones y pirámides, Grecia por su filosofía y democracia, y Roma por su derecho y expansión militar.
        Cada una de estas culturas dejó un legado que aún influye en nuestra vida cotidiana.
      </p>
      <p>
        Además, la historia antigua nos muestra cómo los seres humanos comenzaron a organizarse en sociedades complejas, con religiones, comercio y arte.
        Es un periodo fascinante que nos ayuda a comprender los orígenes de nuestra civilización.
      </p>
    `;
  }

  else if (seccion === "medieval") {
    contenido.innerHTML = `
      <h2>Edad Media</h2>
      <p>
        La Edad Media se extiende aproximadamente desde el siglo V hasta el XV. Fue una época marcada por el feudalismo, los castillos y las cruzadas.
        Aunque muchas veces se la considera un periodo oscuro, también fue una etapa de grandes transformaciones culturales y sociales.
      </p>
      <p>
        Los monasterios preservaron el conocimiento antiguo, las universidades comenzaron a surgir y la arquitectura gótica nos dejó catedrales impresionantes.
        La vida cotidiana estaba organizada en torno al campo, los gremios y la religión.
      </p>
      <p>
        Este periodo también fue testigo de conflictos, como las invasiones bárbaras y las guerras de sucesión, pero al mismo tiempo sentó las bases para el Renacimiento.
      </p>
    `;
  }

  else if (seccion === "moderna") {
    contenido.innerHTML = `
      <h2>Historia Moderna</h2>
      <p>
        La historia moderna comienza con el Renacimiento y los grandes descubrimientos geográficos, y se extiende hasta la Revolución Francesa y la Revolución Industrial.
        Es un periodo de cambios profundos en la ciencia, la política y la economía.
      </p>
      <p>
        El Renacimiento impulsó el arte y el pensamiento científico, mientras que los descubrimientos de América y nuevas rutas marítimas ampliaron el horizonte del mundo conocido.
        La Reforma protestante transformó la religión y la política europea.
      </p>
      <p>
        La Revolución Francesa marcó el inicio de una nueva era de derechos y ciudadanía, y la Revolución Industrial cambió para siempre la forma en que producimos y vivimos.
        La historia moderna es el puente hacia el mundo contemporáneo.
      </p>
    `;
  }
}
