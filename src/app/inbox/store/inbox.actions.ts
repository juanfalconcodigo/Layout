import { createAction, props } from "@ngrx/store";

export const setBreadCrumb=createAction('[INBOX] Set breadcrumb',props<{breadcrumb:string}>());
export const setSearch=createAction('[INBOX] Set search',props<{search:string}>());