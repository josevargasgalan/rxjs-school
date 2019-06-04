import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, first, take, takeWhile } from 'rxjs/operators';
export default () => {
  /** start coding */
  const grid = document.getElementById('grid');
  /** First */
  //   const click$ = fromEvent(grid, 'click').pipe(
  //     map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
  //     first(val => val[0] > 3)
  //   );
  /** Take */
  //   const click$ = fromEvent(grid, 'click').pipe(
  //     map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
  //     take(4)
  //   );
  /** TakeWhile */
  const click$ = fromEvent(grid, 'click').pipe(
    map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
    takeWhile(val => val[0] > 3)
  );
  const subscribe = click$.subscribe(data => displayLog(data));
  /** end coding */
};
