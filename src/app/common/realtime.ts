import { WEBSOCKETS_API } from '../configuration/config'
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { State } from "../redux/state/state";
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import { READ_API } from "../configuration/config";

@Injectable()
export class RealTime {
    private _hubConnection: HubConnection;

    constructor(private store: Store<State>) {
        this._hubConnection = new HubConnectionBuilder()
            .withUrl(`${READ_API}/events`)
            .configureLogging(LogLevel.Trace)
            .build();
    }

    connect(): void {
        this._hubConnection.on('SendAction', (data: string) => {
            debugger;
            const action = JSON.parse(data);
            console.log(action);
            this.store.dispatch(action);
        });

        this._hubConnection.start()
            .then(() => {
                console.log('Hub connection started')
            })
            .catch(err => {
                console.log('Error while establishing connection')
            });
    }

    // TODO DISCONNECT
}