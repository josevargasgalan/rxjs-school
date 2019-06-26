import { updateDisplay } from './utils';
import { fromEvent, interval, merge, EMPTY } from 'rxjs';
import {
  mapTo,
  scan,
  takeWhile,
  switchMap,
  startWith,
  materialize,
  tap,
  dematerialize
} from 'rxjs/operators';

export default () => {
  /** start coding */

  /** number of seconds to init countdown */
  const countdownSeconds = 10;

  /** access interface buttons */
  const pauseButton = document.getElementById('pause-btn');
  const resumeButton = document.getElementById('resume-btn');

  /** get comments on button click */
  const pause$ = fromEvent(pauseButton, 'click');
  const resume$ = fromEvent(resumeButton, 'click');
  const isPaused$ = merge(pause$.pipe(mapTo(true)), resume$.pipe(mapTo(false)));

  /** 1s negative interval */
  const interval$ = interval(1000).pipe(mapTo(-1));

  /** countdown timer */
  /** Notificaciones Rxjs - una notificacion de rxjs es un objeto que representa una accion
   * push de un observable
   */
  /** Materialize - Genera eventos a partir de las notifiaciones */
  /** Dematerialize - Recibe eventos en forma de notificaciones y los transforma en acciones
   * sobre el propio observable
   */
  const countdown$ = isPaused$.pipe(
    startWith(false),
    switchMap(paused =>
      !paused ? interval$.pipe(materialize()) : EMPTY.pipe(materialize())
    ),
    dematerialize(),
    scan((acc, curr) => (curr ? curr + acc : curr), countdownSeconds),
    takeWhile(v => v >= 0)
  );

  /** subscribe to countdown */
  countdown$.subscribe(updateDisplay, null, () => console.log('complete'));

  /** end coding */
};
