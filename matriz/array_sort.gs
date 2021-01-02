/**
 * Ordena un *vector 2D* (matriz) usando Array.sort()
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
 */
function ordenarSort1() {

  const matrizOrdenada = obtenerUsuarios('A2:E7').sort();
  
  visualizarUsuarios('A16', matrizOrdenada);  

}

/**
 * Ordena un *vector* usando Array.sort()
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
 */
function ordenarSort2() {

  const matrizOrdenada = obtenerUsuarios('B2:B7').flat().sort();
  
  visualizarUsuarios('B23', matrizOrdenada.map(elemento => [elemento]));  

}

/**
 * Devuelve un vector con nombres, apellidos, dnis e emails de un conjunto de personas
 * [[Nombre, apellido1, apellido2, dni, email]]
 */
function obtenerUsuarios(referenciaRango) {

  // Aquí el proceso que obtiene la lista de usuarios, por ejemplo, pero podría ser cualquier otra cosa:
  const usuarios = SpreadsheetApp.getActiveSheet().getRange(referenciaRango).getValues();

  return usuarios;

}

function visualizarUsuarios(referenciaCelda, usuarios) {

  SpreadsheetApp.getActiveSheet().getRange(referenciaCelda).offset(0, 0, usuarios.length, usuarios[0].length).setValues(usuarios);

}
