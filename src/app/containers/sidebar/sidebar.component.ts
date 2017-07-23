import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/state/appState';
import { ToggleSidebar } from '../../redux/actions/sidebar';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed$ = this.store.select((state:AppState) => state.collapsableSidebar.isCollapsed);  

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggle() {
    this.store.dispatch(new ToggleSidebar());
  }

}
