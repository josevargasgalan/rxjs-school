import { updateDisplay, displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

export default () => {
  /** start coding */

  const inputBox = document.getElementById('input-box');
  /** DebounceTime - Es muy similar al auditTime con la diferencia de que reinicia la espera cada vez
   * que recibe un nuevo valor, con lo que para que DebounceTime emita un evento, es necesario que el
   * flujo de origen deje de emitir datos durante el tiempo prefijado
   */
  const inputSrc$ = fromEvent(inputBox, 'input').pipe(
    debounceTime(300),
    map(event => event.target.value)
  );
  inputSrc$.subscribe(displayLog);
  /** end coding */
};
