import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
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
import { TicketCreateFormComponent } from './components/ticket-create-form/ticket-create-form.component';
import { FormGroupTextboxComponent } from './components/form-group-textbox/form-group-textbox.component';
import { FormGroupRadioComponent } from './components/form-group-radio/form-group-radio.component';
import { FormGroupSelectComponent } from './components/form-group-select/form-group-select.component';
import { FormGroupMarkdownComponent } from './components/form-group-markdown/form-group-markdown.component';
import { PrioritySelectorComponent } from './components/priority-selector/priority-selector.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';

// State-managment REDUX
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './redux/reducers/root.reducer';
import { LimitToPipe } from './pipes/limit-to.pipe';

// Realtime
import {RealTime} from "./common/realtime";
import { DetailTicketComponent } from './containers/detail-ticket/detail-ticket.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllTicketsComponent,
    WelcomeComponent,
    SidebarComponent,
    TicketListComponent,
    LimitToPipe,
    CreateTicketComponent,
    TicketCreateFormComponent,
    FormGroupTextboxComponent,
    FormGroupRadioComponent,
    PrioritySelectorComponent,
    FormGroupSelectComponent,
    FormGroupMarkdownComponent,
    DetailTicketComponent,
    CommentBoxComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot(rootReducer),
    routing
  ],
  providers: [AllTicketsService, CreateTicketService, RealTime],
  bootstrap: [AppComponent]
})
export class AppModule { }
