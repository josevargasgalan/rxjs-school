import { updateDisplay } from './utils';
import { fromEvent, Subject, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export default () => {
  /** start coding */
  const progressBar = document.getElementById('progress-bar');
  const docElement = document.documentElement;
  const updateProgressBar = percentage => {
    progressBar.style.width = `${percentage}%`;
  };

  //observable that returns scroll (from top) on scroll events
  /** Share - convierte un cold observable en un hot observable consiguiendo compartir una misma instancia
   * del observable con todas sus suscripciones
   */
  const scroll$ = fromEvent(document, 'scroll').pipe(
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

  /**
   * Subject - Por definicion es un hot observable, observer y observador.
   */
  // const scrollProgressHot$ = new Subject();
  /**
   * BehaviorSubject - Es un Subject que además tiene un estado. Este estado puede ser el valor inicial que se le da
   * en el constructor o el ultimo valor emitido por el streaming
   */
  const scrollProgressHot$ = new BehaviorSubject(0);
  scrollProgress$.subscribe(scrollProgressHot$);
  //subscribe to scroll progress to paint a progress bar
  const subscription = scrollProgressHot$.subscribe(updateProgressBar);

  const subscription2 = scrollProgressHot$.subscribe(updateProgressBar => {
    updateDisplay(`${Math.floor(updateProgressBar)} %`);
  });

  // scrollProgressHot$.next(0);
  /** end coding */
};
