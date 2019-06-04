import { displayLog } from "./utils";
import { fromEvent } from "rxjs";
import { mapTo, map, filter } from "rxjs/operators";
export default () => {
  /** start coding */
  const grid = document.getElementById("grid");
  /** MapTo */
  //   const click$ = fromEvent(grid, 'click').pipe(
  //       mapTo('CLICK')
  //   );

  /** Map */
  //   const click$ = fromEvent(grid, "click").pipe(
  //     map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)])
  //   );

  /** Filter */
  const click$ = fromEvent(grid, "click").pipe(
    map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
    filter(val => (val[0] + val[1]) % 2 != 0)
  );
  const subscribe = click$.subscribe(data => displayLog(data));
  /** end coding */
};
