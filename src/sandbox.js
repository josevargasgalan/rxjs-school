import { updateDisplay } from './utils';
import { fromEvent } from 'rxjs';
import { map, tap, sampleTime, auditTime, throttleTime } from 'rxjs/operators';

export default () => {
  /** start coding */
  const progressBar = document.getElementById('progress-bar');
  const docElement = document.documentElement;
  const updateProgressBar = percentage => {
    progressBar.style.width = `${percentage}%`;
  };

  //observable that returns scroll (from top) on scroll events
  /** SampleTime - emite el valor mas reciente de un flujo de datos cada cierto tiempo, siempre y cuando se 
   * haya emitido un valor en ese intervalo de tiempo
   */
  /** AuditTime - espera a detectar un evento y en ese momento crea una ventana temporal y al acaba esta 
   * ventana temporal es cuando emite la muestra mas reciente
   */
  /** ThrottleTime - cuando detecta un evento lo emite y acto seguido deja de escuchar el stream durante
   * la venta temporal indicada, y cuando acaba se queda a la espera para el siguiente evento
  */
  const scroll$ = fromEvent(document, 'scroll').pipe(
    // sampleTime(50),
    // auditTime(50),
    throttleTime(50),
    tap(evt => console.log('auditTime')),
    map(() => docElement.scrollTop),
    tap(evt => console.log('[scroll]: ', evt))
  );

  //observable that returns the amount of page scroll progress
  const scrollProgress$ = scroll$.pipe(
    map(evt => {
      const docHeight = docElement.scrollHeight - docElement.clientHeight;
      return (evt / docHeight) * 100;
    })
  );

  //subscribe to scroll progress to paint a progress bar
  const subscription = scrollProgress$.subscribe(updateProgressBar);

  /** end coding */
};
