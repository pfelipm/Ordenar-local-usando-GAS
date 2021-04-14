/**
 * Ordena un vector 2D (matriz) usando Array.sort() y una función de comparación sobre elementos de texto
 * respetando los particularidades ortograficas locales
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
 */
function ordenarSort4() {

  const matrizOrdenada = obtenerUsuarios('A2:E7').sort((v1, v2) => {
    
    // Concatenar apellido1 + apellido2 + nombre (sin espacios) con separador ' ' para ordenar por nombre completo
    const elemento1 = v1[1].replace(/ /g, '') + ' ' + v1[2].replace(/ /g, '') + ' ' + v1[0].replace(/ /g, '');
    const elemento2 = v2[1].replace(/ /g, '') + ' ' + v2[2].replace(/ /g, '') + ' ' + v2[0].replace(/ /g, '');
    
    // ¡Usamos String.localeCompare()!
    return elemento1.localeCompare(elemento2);

  });
  
  visualizarUsuarios('A37', matrizOrdenada);  

}

// https://www.uoc.edu/portal/es/servei-linguistic/convencions/ordenacio-alfabetica/index.html
// u < ú < ü
// u < U
function test(){

  console.log('a'.localeCompare('A')) // -1
  console.log('a'.localeCompare('á')) // -1
  console.log('u'.localeCompare('ü')) // -1
  console.log('ü'.localeCompare('ú')) // 1
  console.log('n'.localeCompare('ñ')) // -1
  console.log('c'.localeCompare('ç')) // -1
  console.log('d'.localeCompare('ç')) // 1

}