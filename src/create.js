import { displayLog } from './utils';
import { of, range } from 'rxjs'

export default () => {
    /** start coding */

    const source = of(1,2,3,4,5,6);
    const source2 = of([1,2,3], "Hello World", {foo: "bar"}, function sayHello() {
        return "Hi!";
    });
    //Rango de numeros que empieza en 2 y tiene 5 valores
    const source3 = range(2,5);
    const subscription = source3.subscribe((event) => {
        displayLog(event);
    })
    /** end coding */
}
