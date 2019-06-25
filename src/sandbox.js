import { updateDisplay, displayLog } from './utils';
import { api } from './api';
import { fromEvent } from 'rxjs';
import { map, scan, tap, mergeMap, switchMap, concatMap } from 'rxjs/operators';

export default () => {
  /** start coding */

  const button = document.getElementById('btn');

  /** get comments on button click */
  /** SwitchMap - es un operador que cuando recibe un evento externo cancela la suscripcion
   * del evento interno anterior antes de suscribirse a un nuevo evento interno
   */
  // fromEvent(button, 'click')
  //   .pipe(
  //     scan((acc, evt) => acc + 1, 0),
  //     switchMap(id => api.getComment(id)),
  //     map(JSON.stringify),
  //     tap(console.log)
  //   )
  //   .subscribe(displayLog);

  /** ConcatMap - es un operador para HOO que se suscribe a los observables internos de 
   * forma ordenar, es decir, que hasta que no se completen los eventos del primer observable,
   * no se suscribe al segundo y asi sucesivamente
   */
  fromEvent(button, 'click')
  .pipe(
    scan((acc, evt) => acc + 1, 0),
    concatMap(id => api.getComment(id)),
    map(JSON.stringify),
    tap(console.log)
  )
  .subscribe(displayLog);
  /** end coding */
};
