/**
 * @OnlyCurrentDoc
 */

/**
 * Ordena un intervalo de datos de una hoja de cálculo
 */
function ordenarHdc() {
  
  const rangoOrigen = SpreadsheetApp.getActiveSheet().getRange('A2:E7');
  const rangoDestino = SpreadsheetApp.getActiveSheet().getRange('A9');

  rangoOrigen.copyTo(rangoDestino);
  
  rangoDestino.offset(0, 0, 6, 5).sort([{column: 2, ascending:true}, {column: 3, ascending:true}, {column: 1, ascending:true}]);

}