import { AppState } from './appState';
import { ITicket } from "../../entities/interfaces/iticket";

export interface RootState {
  readonly app: AppState;
  readonly tickets: Array<ITicket>;
}