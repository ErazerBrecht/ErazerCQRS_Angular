import {RouterModule} from "@angular/router";

import {AllTicketsComponent} from "./containers/all-tickets/all-tickets.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";

export const routes = [
    {path: "", redirectTo: "/tickets", pathMatch: "full"},
    { path: "about", component: WelcomeComponent},
    { path: "tickets", component: AllTicketsComponent },
];
export const routing = RouterModule.forRoot(routes);