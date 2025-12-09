function verificarPrecioFruta() {
  // 1. Pedir la fruta al usuario (se usa prompt para entornos de navegador/simulación)
  const fruta = prompt("¿De qué fruta quiere saber el precio? (Naranja, Banana, Manzana)");

  // Verificar si el usuario ingresó algo o canceló
  if (fruta === null || fruta.trim() === "") {
    console.log("No ingresó ninguna fruta. Intente de nuevo.");
    return; // Salir de la función si no hay entrada
  }

  // Convertimos la entrada a minúsculas para manejar mayúsculas y minúsculas sin problemas
  const frutaMinuscula = fruta.toLowerCase();
  
  let mensaje = "";

  // 2. Usar el condicional switch
  switch (frutaMinuscula) {
    case "naranja":
      mensaje = `El precio de la ${fruta} es de $2.50 por unidad.`;
      break; // ¡IMPORTANTE! Detiene la ejecución del switch
    
    case "banana":
      mensaje = `El precio de la ${fruta} es de $1.20 por unidad.`;
      break;
      
    case "manzana":
      mensaje = `El precio de la ${fruta} es de $3.00 por unidad.`;
      break;

    // 3. Bloque default (si no coincide con ningún 'case')
    default:
      mensaje = `Lo sentimos, no tenemos ${fruta} en nuestro inventario.`;
  }

  // 4. Mostrar el resultado
  console.log(mensaje);
}

// Ejecutar la función para probar
verificarPrecioFruta();