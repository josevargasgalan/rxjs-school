import { updateDisplay, displayLog } from './utils';
import { fromEvent, zip, merge } from 'rxjs';
import { map, tap, scan, filter, distinctUntilChanged } from 'rxjs/operators';

export default () => {
  /** start coding */

  /** init canvas and context reference  */
  const canvas = document.getElementById('drawboard');
  const ctx = canvas.getContext('2d');

  /** method to draw a line in canvas  */
  const drawLine = (initCoords, endCoords) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(initCoords.x, initCoords.y);
    ctx.lineTo(endCoords.x, endCoords.y);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  };

  /** helper method to retrieve local coords from click */
  const getLocalClickCoords = (event, parent) => {
    return {
      x: event.clientX - parent.offsetLeft,
      y: event.clientY - parent.offsetTop
    };
  };

  /** observable from canvas mouse down events */
  const mouseStart$ = fromEvent(canvas, 'mousedown').pipe(
    map(event => {
      return {
        label: 'start',
        coords: getLocalClickCoords(event, canvas)
      };
    })
  );

  /** observable from canvas mouse up events */
  const mouseEnd$ = fromEvent(canvas, 'mouseup').pipe(
    map(event => {
      return {
        label: 'end',
        coords: getLocalClickCoords(event, canvas)
      };
    })
  );

  /** observable from canvas mouse move events */
  const mouseMove$ = fromEvent(canvas, 'mousemove').pipe(
    map(event => {
      return {
        label: 'drawing',
        coords: getLocalClickCoords(event, canvas)
      };
    })
  );

  //TODO: draw current line

  /** Zip - Combina varios flujos de datos en un unico observable que devuelve un array con los valores
   *  de los observables de entrada
   */
  // const drawLine$ = zip(mouseStart$, mouseEnd$).pipe(
  //   tap(console.log),
  //   map(([start, end]) => {
  //     return {
  //       origin: start.coords,
  //       end: end.coords
  //     };
  //   })
  // );

  // drawLine$.subscribe(data => drawLine(data.origin, data.end));

  /** Merge - entrelaza los flujos de distintos observables en un unico flujo de datos, y a diferencia de
   * zip no espera a tener datos de todos los flujos de entrada ni tampoco devuelve un array, así que si uno
   * de los flujos de entrada emite un evento, merge lo emite en el flujo de salida
   */
  const computeDrawState = (prevState, event) => {
    switch (prevState.label) {
      case 'init':
      case 'end':
        if (event.label === 'start') {
          return { origin: event.coords, ...event };
        }
        break;
      case 'start':
      case 'drawing':
        return { origin: prevState.coords, ...event };
    }
    return prevState;
  };

  const drawLine$ = merge(mouseStart$, mouseMove$, mouseEnd$).pipe(
    scan(computeDrawState, { label: 'init' }),
    filter(data => data.origin && data.coords),
    distinctUntilChanged(),
    tap(console.log)
  );

  drawLine$.subscribe(data => {
    drawLine(data.origin, data.coords);
  });

  /** end coding */
};
