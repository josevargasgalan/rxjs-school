import { displayLog } from './utils';
import { game$ } from './tic-tac-toe/game';


export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    
    const subscription = game$.subscribe(data => displayLog(data));
    /** end coding */
}

    // OTHER REACTIVE APPROACH USING REDUCERS
    // const userTurnReducer = click$.pipe(
    //     map(userClick => (state) => {
    //         //return old state if it's not the users turn
    //         if(state.nextPlayer != 1){ return state;} 

    //         //return old state if it's not a valid move
    //         if(state.board[userClick.x][userClick.y] != 0){ return state;}
    //     })
    // )
    //
    // const game$ = merge(userTurnReducer, reducer2, ...).pipe(
    //     startWith(gameState),
    //     switchMap(({nextPlayer}) => nextPlayer == 1 ? click$ : computer$),
    //     scan((acc/* acc is the state */,reducer) => reducer(acc))
    // )  