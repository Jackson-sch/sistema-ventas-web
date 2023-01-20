const inputNombre = document.querySelector("#productoNombre");
const inputPrecio = document.querySelector("#productoPrecio");

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  const nombre = inputNombre.value;
  const precio = inputPrecio.value;

  fetch("/api/v1/productos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      precio,
    }),
  }).then(function (response) {});
});
