import * as io from "socket.io-client";
import { WEBSOCKETS_API } from '../configuration/config'
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { State } from "../redux/state/state";

@Injectable()
export class RealTime {
    constructor(private store: Store<State>) {
    }

    connect(): void {
        const socket = io(WEBSOCKETS_API);
        socket.emit('add');
        socket.on("UPDATE_REDUX", action => {this.store.dispatch(action)});
    }

    // TODO DISCONNECT
}