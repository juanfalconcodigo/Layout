import { createReducer, on } from "@ngrx/store";
import {setRefresh } from './portal.actions';

export interface PortalState {
    refresh: string;
}

const initialState: PortalState = {
    refresh: null
}

const _portalReducer = createReducer(initialState,
    on(setRefresh, (state, { refresh }) => {
        return {
            ...state,
            refresh
        }
    })
)

export const portalReducer = (state, action) => {
    return _portalReducer(state, action);
}