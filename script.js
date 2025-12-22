function mostrar(seccion) {
  let contenido = document.getElementById("contenido");

  if (seccion === "antigua") {
    contenido.innerHTML = `
      <h2>Historia Antigua</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/640px-Kheops-Pyramid.jpg" width="300">
      <p>La historia antigua abarca desde el surgimiento de las primeras civilizaciones hasta la caída del Imperio Romano.</p>
      <h3>Civilizaciones destacadas</h3>
      <ul>
        <li><strong>Egipto:</strong> pirámides, faraones y escritura jeroglífica.</li>
        <li><strong>Mesopotamia:</strong> cuna de la escritura y los primeros códigos legales.</li>
        <li><strong>Grecia:</strong> filosofía, democracia y arte clásico.</li>
        <li><strong>Roma:</strong> derecho, arquitectura y expansión imperial.</li>
      </ul>
      <p>Estas culturas sentaron las bases de la ciencia, la política y la religión que influenciaron siglos posteriores.</p>
    `;
  }

  else if (seccion === "medieval") {
    contenido.innerHTML = `
      <h2>Edad Media</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Castle_Neuschwanstein.jpg/640px-Castle_Neuschwanstein.jpg" width="300">
      <p>La Edad Media se extiende aproximadamente del siglo V al XV, marcada por el feudalismo, la religión y los conflictos territoriales.</p>
      <h3>Aspectos clave</h3>
      <ul>
        <li><strong>Feudalismo:</strong> sistema social basado en la tierra y la lealtad.</li>
        <li><strong>Las cruzadas:</strong> expediciones religiosas hacia Tierra Santa.</li>
        <li><strong>Monasterios:</strong> centros de conocimiento y preservación cultural.</li>
        <li><strong>Arte gótico:</strong> catedrales con vitrales y arcos apuntados.</li>
      </ul>
      <p>Fue una época de contrastes: oscuridad para algunos, pero también de avances en arquitectura, filosofía y organización social.</p>
    `;
  }

  else if (seccion === "moderna") {
    contenido.innerHTML = `
      <h2>Historia Moderna</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Bastille_fall.jpg/640px-Bastille_fall.jpg" width="300">
      <p>La historia moderna comienza con el Renacimiento y se extiende hasta el siglo XIX, marcada por revoluciones, descubrimientos y cambios radicales.</p>
      <h3>Transformaciones importantes</h3>
      <ul>
        <li><strong>Renacimiento:</strong> redescubrimiento del arte, la ciencia y el pensamiento clásico.</li>
        <li><strong>Revolución Científica:</strong> Galileo, Newton y el método experimental.</li>
        <li><strong>Revolución Francesa:</strong> fin de la monarquía absoluta y surgimiento de los derechos ciudadanos.</li>
        <li><strong>Industrialización:</strong> fábricas, trenes y nuevas clases sociales.</li>
      </ul>
      <p>Esta etapa dio forma al mundo moderno, con ideas de libertad, progreso y transformación tecnológica.</p>
    `;
  }
}

