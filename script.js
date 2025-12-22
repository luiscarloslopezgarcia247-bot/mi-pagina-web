function mostrar(seccion) {
  let contenido = document.getElementById("contenido");

  if (seccion === "antigua") {
    contenido.innerHTML = `
      <h2>Historia Antigua</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg" width="300">
      <p>La historia antigua abarca desde las primeras civilizaciones hasta la caída del Imperio Romano.</p>
    `;
  }

  else if (seccion === "medieval") {
    contenido.innerHTML = `
      <h2>Edad Media</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Mont_Saint-Michel_-_2009.jpg" width="300">
      <p>La Edad Media se caracteriza por castillos, cruzadas y el feudalismo.</p>
    `;
  }

  else if (seccion === "moderna") {
    contenido.innerHTML = `
      <h2>Historia Moderna</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Storming_of_the_Bastille.jpg" width="300">
      <p>La historia moderna incluye revoluciones, descubrimientos y el inicio del mundo contemporáneo.</p>
    `;
  }
}
