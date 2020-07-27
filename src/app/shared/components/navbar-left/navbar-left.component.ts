import { Component, OnInit } from '@angular/core';
import { LayoutI } from '@shared/models';
import { LayoutService } from '@shared/services/layout.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  public menu: boolean;
  public dropdownReport: boolean;

  constructor(private layoutService: LayoutService) {
    this.layoutService.currentLayout.subscribe(({ menu }: LayoutI) => {
      this.menu = menu;
    });
  }

  ngOnInit() {
  }

  toggleReport(): void {
    this.dropdownReport = !this.dropdownReport;
  }
}
