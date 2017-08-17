import { RouterModule } from "@angular/router";

import { AllTicketsComponent } from "./containers/all-tickets/all-tickets.component";
import { CreateTicketComponent } from "./containers/create-ticket/create-ticket.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

export const routes = [
    { path: "", redirectTo: "/tickets", pathMatch: "full" },
    { path: "about", component: WelcomeComponent },
    { path: "tickets", component: AllTicketsComponent },
    { path: "create", component: CreateTicketComponent },
];
export const routing = RouterModule.forRoot(routes);