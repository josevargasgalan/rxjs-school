import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile, last, takeLast, skip, tap } from 'rxjs/operators';
export default () => {
  /** start coding */
  const grid = document.getElementById('grid');
  /** Last */
  //   const click$ = fromEvent(grid, 'click').pipe(
  //     map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
  //     takeWhile(val => val[0] > 3),
  //     tap(val => console.log(`Valid in takeWhile ${val}`)),
  //     last()
  //   );

  /** TakeLast */
//   const click$ = fromEvent(grid, 'click').pipe(
//     map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
//     takeWhile(val => val[0] > 3),
//     tap(val => console.log(`Valid in takeWhile ${val}`)),
//     takeLast(3)
//   );

  /** Skip */
  const click$ = fromEvent(grid, 'click').pipe(
    map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
    tap(val => console.log(`cell: ${val}`)),
    skip(5)
  );
  const subscribe = click$.subscribe(data => displayLog(data));
  /** end coding */
};
