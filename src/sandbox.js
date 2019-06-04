import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import {
  map,
  takeWhile,
  tap,
  distinct,
  distinctUntilChanged
} from 'rxjs/operators';
export default () => {
  /** start coding */
  const grid = document.getElementById('grid');
  /** Distinct - no deja pasar ningun valor que coincida con alguno ya emitido en el pasado*/
  //   const click$ = fromEvent(grid, 'click').pipe(
  //     map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
  //     takeWhile(val => val[0] !== 0),
  //     tap(val => console.log(`cell: ${val}`)),
  //     distinct(val => `${val[0]} - ${val[1]}`)
  //   );

  /** DistinctUntilChanged */
  const click$ = fromEvent(grid, 'click').pipe(
    map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
    takeWhile(val => val[0] !== 0),
    tap(val => console.log(`cell: ${val}`)),
    distinctUntilChanged((cell1, cell2) => 
      (cell1[0] === cell2[0]) && (cell1[1] === cell2[1]))
  );
  const subscribe = click$.subscribe(data => displayLog(data));
  /** end coding */
};
