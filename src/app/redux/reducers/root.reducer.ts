import { ActionReducerMap } from '@ngrx/store';

import { appReducer } from "./app.reducer";
import { ticketsReducer } from "./ticket.reducer";

import {RootState} from "../state/rootState";

export const rootReducer: ActionReducerMap<RootState> = {
    app: appReducer,
    tickets: ticketsReducer,
};