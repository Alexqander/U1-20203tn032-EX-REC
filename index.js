const producto = {
  nombre: "",
  precioU: 0,
  cantidad: 0,
  importe: function () {
    return this.precioU * this.cantidad;
  },
};
console.log(producto);
const carrito = {
  productos: [],
  folio: "",
  subtotal: function () {
    const reduce = this.productos.reduce(
      (acumulador, actual) => acumulador + actual.total,
      0
    );
    return reduce;
  },
  total: function () {
    return this.subtotal() * 1.16;
  },
};

const addProduct = () => {
  nombre = document.getElementById("nombreP").value;
  precioU = document.getElementById("precioUp").value;
  cantidad = document.getElementById("cantidadP").value;
  console.log("Entre a agregarProducto");
  producto.nombre = nombre;
  producto.precioU = precioU;
  producto.cantidad = cantidad;

  console.log(producto);
  carrito.productos.push(producto);
  console.log("carrito de compras");
  console.log(carrito.productos);

  return producto;
};

const cerrarCarrito = () => {
  console.log("Entre a cerrarCarrito");
  console.log(carrito.subtotal());
  console.log(carrito.total());
};
