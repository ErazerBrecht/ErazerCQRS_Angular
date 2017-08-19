import { AppState } from './appState';
import { ITicket } from "../../entities/read/interfaces/iticket";

export interface State {
  readonly app: AppState;
  readonly tickets: Array<ITicket>;
}