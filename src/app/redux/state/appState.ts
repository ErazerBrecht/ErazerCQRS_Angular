export type AppState = Readonly<{
  collapsableSidebar: CollapsableSidebarState;
}>;

export type CollapsableSidebarState = Readonly<{
  isCollapsed: boolean;
}>;