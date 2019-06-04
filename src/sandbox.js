import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, startWith, endWith } from 'rxjs/operators';
export default () => {
  /** start coding */
  const grid = document.getElementById('grid');
  /** StartWith */
  //   const click$ = fromEvent(grid, 'click').pipe(
  //     map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
  //     takeWhile(val => val[0] !== 0),
  //     tap(val => console.log(`cell: ${val}`)),
  //     startWith('grid dimensions:', '10x10')
  //   );

  /** EndWith */
  const click$ = fromEvent(grid, 'click').pipe(
    map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
    takeWhile(val => val[0] !== 0),
    tap(val => console.log(`cell: ${val}`)),
    endWith('game finished', 'Bye!')
  );

  const subscribe = click$.subscribe(data => displayLog(data));
  /** end coding */
};
