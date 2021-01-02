/**
 * Ordena un vector 2D (matriz) usando Array.sort() y una función de comparación sobre elementos de texto
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
 */
function ordenarSort3() {

  const matrizOrdenada = obtenerUsuarios('A2:E7').sort((v1, v2) => {
    
    // Concatenar apellido 1 + apellido 2 + nombre para ordenación alfabética por nombre completo apropiada
    const elemento1 = v1[1] + v1[2] + v1[0];
    const elemento2 = v2[1] + v2[2] + v2[0];
    
    // Si el1 > el2 devuelve 1
    // Si el1 = el2 devuelve 0
    // Si el1 < el2 devuelve -1
    if (elemento1 > elemento2) return 1;
    else if (elemento1 < elemento2) return -1;
    else return 0;

    // De comparar valores numéricos la función podría ser algo tan sencillo como: v1 - v2.

  });
  
  visualizarUsuarios('A30', matrizOrdenada);  

}