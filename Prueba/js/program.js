let columnas = 1;
function agregar(id) {
    const columna = document.getElementById("div-"+id);
    const card = document.createElement("div");
    card.className = "card bg-dark text-light mb-2 px-0 redondeado";
    card.innerHTML = `
            <div class="etiqueta"></div>
            <div class="card-body">
              <textarea class="sinborde-textarea" placeholder="Escribe algo..." oninput="adjustTextareaHeight(this)"></textarea>
            </div>`;
  columna.appendChild(card);
}

function añadirColumna() {
    const div = document.getElementById("contenedorCol");
    const lastCol = document.getElementById("lastCol");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="col-6 me-3 px-3 py-3 rounded-4 contenido fondo-col" style="width: 18em;">
      <input type="text" class="sinborde h5 text-light" value="Inserte titulo">
      <div id="div-`+columnas+`" class="row justify-content-center px-2">
      </div>
      <div class="row align-items-end px-2">
        <button class="boton" name="button" onclick="agregar(`+columnas+`)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg> Añada una tarjeta</button>
      </div>
    </div>`;

  columnas++;
    div.insertBefore(element, lastCol);
}

function setInitialHeight() {
  const input = document.querySelector('.input-text');
  const textarea = document.querySelector('.expanding-textarea');
  const inputHeight = window.getComputedStyle(input).height;
  textarea.style.height = inputHeight;
}

function adjustTextareaHeight(element) {
  element.style.height = "auto";
  element.style.height = (element.scrollHeight) + "px";
}