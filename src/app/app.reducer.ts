import { ActionReducerMap } from "@ngrx/store";
import { inboxReducer, InboxState } from './inbox/store/inbox.reducer';

export interface AppState{
    inbox:InboxState;
}

export const appReducers:ActionReducerMap<AppState>={
  inbox:inboxReducer
}