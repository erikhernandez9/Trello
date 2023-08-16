let columnas = 1;
function agregar(id) {
    const columna = document.getElementById("div-"+id);
    console.log("ffdfd")
    const card = document.createElement("div");
    card.innerHTML = `<div class="card bg-dark bg-gradient text-light mb-3 mt-2 px-0">
    <img src="img/imagen1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h6 class="card-title">Card title</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>`;
  columna.appendChild(card);
}

function añadirColumna() {
    const div = document.getElementById("contenedorCol");
    const lastCol = document.getElementById("lastCol");
    const element = document.createElement("div");
    element.innerHTML = `<div class="col-6 bg-dark mx-3 px-3 py-3 rounded-3 contenido" style="width: 18em;">
    <h5 class="text-light">Titulo ejemplo</h5>
    <div id="div-`+columnas+`" class="row justify-content-center px-2"></div>
    <div class="row align-items-end px-2">
      <a href="#" onclick="agregar(`+columnas+`)" class="btn btn-light h-50">+</a>
    </div>
  </div>`;
  columnas++;
    div.insertBefore(element, lastCol);
}