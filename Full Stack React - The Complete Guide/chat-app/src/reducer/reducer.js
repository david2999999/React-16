import { activeThreadIdReducer } from "./activeThreadIdReducer";
import { threadsReducer } from "./threadsReducer";

export function reducer(state, action) {
    return {
        activeThreadId: activeThreadIdReducer(state.activeThreadId, action),
        threads: threadsReducer(state.threads, action)
    }
}