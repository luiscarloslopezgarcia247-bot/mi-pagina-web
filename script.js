function mostrar(seccion) {
  let contenido = document.getElementById("contenido");
  if (seccion === "antigua") {
    contenido.innerHTML = `
      <h2>Historia Antigua</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg" width="300">
      <p>La historia antigua abarca desde las primeras civilizaciones hasta la caída del Imperio Romano.</p>
      <ul>
        <li>Egipto: pirámides y faraones</li>
        <li>Grecia: filosofía y democracia</li>
        <li>Roma: derecho y expansión</li>
      </ul>
    `;
  } else if (seccion === "medieval") {
    contenido.innerHTML = `
      <h2>Edad Media</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Castle_Neuschwanstein.jpg" width="300">
      <p>La Edad Media se caracteriza por castillos, cruzadas y el feudalismo.</p>
      <ul>
        <li>Castillos y caballeros</li>
        <li>Las cruzadas</li>
        <li>El surgimiento de universidades</li>
      </ul>
    `;
  } else if (seccion === "moderna") {
    contenido.innerHTML = `
      <h2>Historia Moderna</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Bastille_fall.jpg" width="300">
      <p>La historia moderna incluye revoluciones, descubrimientos y el inicio del mundo contemporáneo.</p>
      <ul>
        <li>Renacimiento y descubrimientos</li>
        <li>Revolución Francesa</li>
        <li>Industrialización</li>
      </ul>
    `;
  }
}
