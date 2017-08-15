import { AppState } from './appState';
import { ITicket } from "../../entities/interfaces/iticket";

export interface State {
  readonly app: AppState;
  readonly tickets: Array<ITicket>;
}