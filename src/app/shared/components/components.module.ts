import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { SearchComponent } from './search/search.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HamburgerComponent,
    SearchComponent,
    FullscreenComponent,
    SettingComponent,
    ProfileComponent,
    NotificationComponent,
    NavbarLeftComponent,
  ],
  imports: [CommonModule, RouterModule],
  entryComponents: [
    HeaderComponent,
    HamburgerComponent,
    SearchComponent,
    FullscreenComponent,
    SettingComponent,
    ProfileComponent,
    NotificationComponent,
    NavbarLeftComponent,
  ],
  exports: [
    HeaderComponent,
    HamburgerComponent,
    SearchComponent,
    FullscreenComponent,
    SettingComponent,
    ProfileComponent,
    NotificationComponent,
    NavbarLeftComponent,
  ],
})
export class ComponentsModule {}
