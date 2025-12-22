// Cargar sonido de clic
const sonidoClick = new Audio("audio/clic.mp3"); // ajustá la ruta si lo tenés en otra carpeta

function mostrar(seccion) {
  sonidoClick.play(); // reproducir sonido al pulsar

  let contenido = document.getElementById("contenido");

  if (seccion === "antigua") {
    contenido.innerHTML = `
      <h2>Historia Antigua</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg" width="300">
      <p>
        La historia antigua abarca desde las primeras civilizaciones hasta la caída del Imperio Romano.
        Este periodo incluye el surgimiento de culturas como Mesopotamia, Egipto, Grecia, Roma, China y la India.
        Se desarrollaron sistemas de escritura, leyes, religiones organizadas, arquitectura monumental y estructuras políticas complejas.
      </p>
      <p>
        Egipto destacó por sus pirámides, faraones y creencias sobre la vida después de la muerte.
        Grecia aportó la filosofía, la democracia y el teatro, mientras que Roma expandió el derecho, la ingeniería y el concepto de ciudadanía.
        También florecieron imperios en Asia y América, como los chinos, los persas y los olmecas.
      </p>
      <p>
        La historia antigua nos permite entender cómo se formaron las bases de la civilización moderna.
        A través de sus logros y conflictos, podemos ver cómo evolucionaron las ideas, las tecnologías y las formas de vida que aún nos influyen.
      </p>
    `;
  }

  else if (seccion === "medieval") {
    contenido.innerHTML = `
      <h2>Edad Media</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Castillo_de_Pe%C3%B1afiel.jpg" width="300">
      <p>
        La Edad Media se extiende aproximadamente desde el siglo V hasta el siglo XV.
        Fue una época marcada por el feudalismo, la religión dominante, los castillos y las cruzadas.
        Aunque a veces se la llama “época oscura”, también fue un periodo de creatividad y transformación.
      </p>
      <p>
        Los monasterios preservaron el conocimiento antiguo, las universidades comenzaron a surgir y la arquitectura gótica nos dejó catedrales impresionantes.
        La vida cotidiana giraba en torno al campo, los gremios y la iglesia.
        Las cruzadas fueron expediciones militares con motivaciones religiosas, políticas y económicas.
      </p>
      <p>
        También se desarrollaron las lenguas romances, se consolidaron los reinos europeos y se vivieron pandemias como la peste negra.
        La Edad Media sentó las bases para el Renacimiento y el mundo moderno.
      </p>
    `;
  }

  else if (seccion === "moderna") {
    contenido.innerHTML = `
      <h2>Historia Moderna</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Delacroix_-_La_Libert%C3%A9_guidant_le_peuple.jpg" width="300">
      <p>
        La historia moderna comienza con el Renacimiento y se extiende hasta el siglo XIX.
        Es un periodo de grandes cambios en la ciencia, la política, la economía y la cultura.
        El ser humano empieza a cuestionar el orden establecido y a buscar nuevas formas de entender el mundo.
      </p>
      <p>
        El Renacimiento impulsó el arte, la exploración y el pensamiento racional.
        Las revoluciones científicas y filosóficas transformaron la visión del universo y del individuo.
        Los descubrimientos geográficos ampliaron el mundo conocido y dieron lugar a imperios coloniales.
      </p>
      <p>
        La Revolución Francesa marcó el inicio de una nueva era de derechos, ciudadanía y participación política.
        La Revolución Industrial cambió radicalmente la producción, el trabajo y la vida urbana.
        La historia moderna es el puente entre las tradiciones antiguas y el mundo contemporáneo.
      </p>
    `;
  }
}

