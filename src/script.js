var input = document.querySelector(".input");
var botonAgregar = document.querySelector(".boton-agregar");
var container = document.querySelector(".container");

// CLASE ITEM ----------
class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }

  crearDiv(nuevaTarea) {
    var div = document.createElement("div");
    div.classList.add("item");

    var inputItem = document.createElement("input");
    inputItem.setAttribute("type", "text");
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;

    var botonEditar = document.createElement("button");
    botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
    botonEditar.classList.add("boton-editar");

    var botonRemover = document.createElement("button");
    botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
    botonRemover.classList.add("boton-remover");

    // Agregar-----------
    div.appendChild(inputItem);
    div.appendChild(botonEditar);
    div.appendChild(botonRemover);
    container.appendChild(div);

    //  Eventos ---------

    var cont = 0;
    botonEditar.addEventListener("click", function () {
      if (cont % 2 == 0) {
        inputItem.disabled = false;
        botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
      } else {
        inputItem.disabled = true;
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
      }

      console.log("click 1");
      cont++;
    });

    botonRemover.addEventListener("click", function () {
      div.remove();
    });
  }
}

// Funcion ----------
function chequearInput() {
  if (input.value != "") {
    let nuevaTarea = new Item(input.value);
  }

  // Hace que el input vuelva a estar vacio
  input.value = "";
}

// Evento
botonAgregar.addEventListener("click", function () {
  chequearInput();
  console.log("Click 2");
});
