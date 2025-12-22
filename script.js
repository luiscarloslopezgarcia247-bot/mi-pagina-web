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
  }

  else if (seccion === "medieval") {
    contenido.innerHTML = `
      <h2>Edad Media</h2>
      <img src="https://pixabay.com/get/g7f9c7b2f0a2c0b6d5b8b7c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6.jpg" width="300">
      <p>La Edad Media se caracteriza por castillos, cruzadas y el feudalismo.</p>
      <ul>
        <li>Castillos y caballeros</li>
        <li>Las cruzadas</li>
        <li>El surgimiento de universidades</li>
      </ul>
    `;
  }

  else if (seccion === "moderna") {
    contenido.innerHTML = `
      <h2>Historia Moderna</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Delacroix_-_La_Libert%C3%A9_guidant_le_peuple.jpg" width="300">
      <p>La historia moderna incluye revoluciones, descubrimientos y el inicio del mundo contemporáneo.</p>
      <ul>
        <li>Renacimiento y descubrimientos</li>
        <li>Revolución Francesa</li>
        <li>Industrialización</li>
      </ul>
    `;
  }
}
