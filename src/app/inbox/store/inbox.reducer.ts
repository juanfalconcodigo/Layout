import { createReducer, on } from "@ngrx/store";
import { setBreadCrumb, setSearch } from './inbox.actions';

export interface InboxState {
    search: string;
    breadcrumb: string;
}

const initialState: InboxState = {
    search: null,
    breadcrumb: null
}

const _inboxReducer = createReducer(initialState,
    on(setBreadCrumb, (state, { breadcrumb }) => {
        return {
            ...state,
            breadcrumb
        }
    }),
    on(setSearch, (state, { search }) => {
        return {
            ...state,
            search
        }
    })
)

export const inboxReducer = (state, action) => {
    return _inboxReducer(state, action);
}