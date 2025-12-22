function mostrar(seccion) {
  let contenido = document.getElementById("contenido");
  if (seccion === "antigua") {
    contenido.innerHTML = "<h2>Historia Antigua</h2><p>Desde las pirámides hasta Roma, exploramos los orígenes de la civilización.</p>";
  } else if (seccion === "medieval") {
    contenido.innerHTML = "<h2>Edad Media</h2><p>Castillos, cruzadas y reinos: el mundo medieval en detalle.</p>";
  } else if (seccion === "moderna") {
    contenido.innerHTML = "<h2>Historia Moderna</h2><p>Revoluciones, descubrimientos y el mundo contemporáneo.</p>";
  }
}
