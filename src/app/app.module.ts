import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Containers (Smart - components)
import { NavbarComponent } from './containers/navbar/navbar.component';
import { AllTicketsComponent } from './containers/all-tickets/all-tickets.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';

// Services
import { AllTicketsService } from './containers/all-tickets/all-tickets.service';


// Presential Components (Dumb - components)
import { ListComponent } from './components/list/list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

// State-managment REDUX
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './redux/reducers/root.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllTicketsComponent,
    ListComponent,
    WelcomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot(rootReducer),
  ],
  providers: [AllTicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
