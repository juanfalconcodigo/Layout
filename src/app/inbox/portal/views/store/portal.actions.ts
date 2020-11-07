import { createAction, props } from "@ngrx/store";

export const setRefresh=createAction('[INBOX] Set refresh',props<{refresh:string}>());