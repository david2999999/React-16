import { activeThreadIdReducer } from "./activeThreadIdReducer";
import { threadsReducer } from "./threadsReducer";
import { combineReducers } from "redux";

// export function reducer(state = {}, action) {
//     return {
//         activeThreadId: activeThreadIdReducer(state.activeThreadId, action),
//         threads: threadsReducer(state.threads, action)
//     }
// }

export const reducer = combineReducers({
    activeThreadId: activeThreadIdReducer,
    threads: threadsReducer
});