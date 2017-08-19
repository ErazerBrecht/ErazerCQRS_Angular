import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Routing
import { routing } from './routes';

// Containers (Smart - components)
import { NavbarComponent } from './containers/navbar/navbar.component';
import { AllTicketsComponent } from './containers/all-tickets/all-tickets.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
import { CreateTicketComponent } from './containers/create-ticket/create-ticket.component';

// Services
import { AllTicketsService } from './containers/all-tickets/all-tickets.service';
import { CreateTicketService } from './containers/create-ticket/create-ticket.service';

// Presential Components (Dumb - components)
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

// State-managment REDUX
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './redux/reducers/root.reducer';
import { LimitToPipe } from './pipes/limit-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllTicketsComponent,
    WelcomeComponent,
    SidebarComponent,
    TicketListComponent,
    LimitToPipe,
    CreateTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(rootReducer),
    routing
  ],
  providers: [AllTicketsService, CreateTicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
