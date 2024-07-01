# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Tecnologias empleadas

- Vite
- Uso de Hooks
- ReactJS
- React Router Dom
- Firebase


## Sobre la app

### Barra de navegación
La app cuenta con una barra de navegación que muestra el logo de la marca, un selector de categoría de productos y el ícono de un carrito que aparece al agregar algún producto. La página muestra por defecto todos los productos, y siempre se puede acceder a esta vista por defecto haciendo clic en el logo de TECNOW.

### Agregar productos al carrito
Al ingresar al detalle de algún producto, se puede seleccionar la cantidad de productos deseados y luego hacer clic en "Agregar al carrito". Automáticamente, aparece en su lugar el botón "Terminar mi compra", que llevará al usuario a la sección de revisión del estado del carrito. También se puede acceder a dicha sección haciendo clic en el ícono de carrito que aparece en la barra de navegación. Por supuesto, se pueden agregar más productos antes de revisar el carrito y terminar la compra.

### Estado del carrito
Al revisar el carrito, se pueden ver los datos de los productos elegidos, con los subtotales correspodientes y el total a pagar. Se pueden quitar o agregar más unidades de cada producto desde aquí mismo, e incluso hay un botón para limpiar el carrito. Con el botón "Continuar" se accede al formulario final.

### Checkout
Aquí, el comprador completa el formulario con su nombre, número de teléfono y correo electrónico. Al hacer clic en "Crear orden" se genera el pedido, se envía al comprador vía correo electrónico y se le muestra el número de referencia, mientras el vendedor lo almacena en Firebase y en la bandeja de salida de correos electrónicos. Además, la cantidad pedida se resta del stock mostrado en la página.


