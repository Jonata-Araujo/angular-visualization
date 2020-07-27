import { Component, OnInit } from '@angular/core';

import { NotificationI, LayoutI } from '@shared/models';
import { SettingService } from '@shared/services/setting.service';
import { ProfileService } from '@shared/services/profile.service';
import { NotificationService } from '@shared/services/notification.service';
import { LayoutService } from '@shared/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public notification: number;
  public theme: string;
  public switchTheme: boolean;

  constructor(
    private settingService: SettingService,
    private profileService: ProfileService,
    private notificationService: NotificationService,
    private layoutService: LayoutService
  ) {
    this.notificationService.currentNotification.subscribe(({ notification }: NotificationI) => {
      this.notification = notification;
    });

    this.layoutService.currentLayout.subscribe(({ theme }: LayoutI) => {
      this.theme = theme;
    });
  }

  ngOnInit() {}

  toggleSetting(): void {
    this.settingService.toggle();
  }

  toggleProfile(): void {
    this.profileService.toggle();
  }

  toggleNotification(): void {
    this.notificationService.toggle();
  }

  toggleTheme(): void {
    this.switchTheme = this.theme === 'dark'
    this.layoutService.toggleTheme()
  }
}
