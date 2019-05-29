import { displayLog } from './utils';
import { fromEvent } from 'rxjs'

export default () => {
    /** start coding */
    const actionBtn = document.getElementById('action-btn');
    const source = fromEvent(actionBtn, 'click');

    source.subscribe(event => {
        displayLog(`Click event at position ${event.x}, ${event.y}`);
    })
    fromEvent(document, 'mousemove').subscribe(event => {
        console.log(event);
    });
    /** end coding */
}
