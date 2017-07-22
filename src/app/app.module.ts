import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Containers (Smart - components)
import { NavbarComponent } from './containers/navbar/navbar.component';
import { AllTicketsComponent } from './containers/all-tickets/all-tickets.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';

// Presential Components (Dumb - components)
import { ListComponent } from './components/list/list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
