import { ActionReducerMap } from '@ngrx/store';

import { appReducer } from "./app.reducer";
import { ticketsReducer } from "./ticket.reducer";

import { State } from "../state/state";

export const rootReducer: ActionReducerMap<State> = {
    app: appReducer,
    tickets: ticketsReducer,
};