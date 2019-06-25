import { updateDisplay, displayLog } from './utils';
import { api } from './api';
import { fromEvent } from 'rxjs';
import { map, scan, tap, concatMap, catchError, retry } from 'rxjs/operators';

export default () => {
  /** start coding */

  const button = document.getElementById('btn');

  /** get comments on button click */
  // fromEvent(button, 'click')
  //   .pipe(
  //     scan((acc, evt) => acc + 1, 0),
  //     concatMap(id => api.getComment(id)),
  //     map(JSON.stringify),
  //     tap(console.log)
  //   )
  //   .subscribe(displayLog, error => console.log('Error: ', error.message));

  /** CatchError - con este operador podemos intervenir el error a nivel de observable,
   * es decir, antes de que se emita hacia la suscripcion y la cierre */
  fromEvent(button, 'click')
    .pipe(
      scan((acc, evt) => acc + 1, 0),
      concatMap(id =>
        api.getComment(id).pipe(
          catchError((error, src$) => {
            console.log('Catch!');
            return src$;
          })
        )
      ),
      // catchError((error, src$) => {
      //   console.log('Catch!');
      //   return src$;
      // }),
      map(JSON.stringify),
      tap(console.log)
    )
    .subscribe(displayLog, error => console.log('Error: ', error.message));
  /** Retry - Permite capturar una excepcion en el flujo de datos y reintentar su
   * ejecucion un numero limitado de veces
   */
  fromEvent(button, 'click')
    .pipe(
      scan((acc, evt) => acc + 1, 0),
      concatMap(id => api.getComment(id).pipe(retry(3))),
      map(JSON.stringify),
      tap(console.log)
    )
    .subscribe(displayLog, error => console.log('Error: ', error.message));
  /** end coding */
};
