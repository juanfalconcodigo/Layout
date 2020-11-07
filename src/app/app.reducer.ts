import { ActionReducerMap } from "@ngrx/store";
import { inboxReducer, InboxState } from './inbox/store/inbox.reducer';
import { PortalState, portalReducer } from './inbox/portal/views/store/portal.reducer';

export interface AppState{
    inbox:InboxState;
    portal:PortalState;
}

export const appReducers:ActionReducerMap<AppState>={
  inbox:inboxReducer,
  portal:portalReducer
}