import { CollapsableSidebarState } from "../state/appState";
import * as sidebar from "../actions/sidebar";

let initialState: CollapsableSidebarState = {
    isCollapsed: false
};

export function collapsableSidebarReducer(state: CollapsableSidebarState = initialState,
                                          action: sidebar.Actions): CollapsableSidebarState {
    switch (action.type) {
        case sidebar.TOGGLE_SIDEBAR:
            return {
                isCollapsed: !state.isCollapsed
            };
        default:
            return state;
    }
};