import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '@environments/environment';
import { LayoutI } from '@shared/models';
import { LAYOUT } from '@shared/constants/storage'

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  protected layoutSource = new BehaviorSubject( environment.layout );
  public currentLayout = this.layoutSource.asObservable();

  constructor() {
    const layout = this.getStorageLayout()
    this.changeLayout(layout);
  }

  changeLayout(layout: LayoutI): void {
    this.setStorageLayout(layout)
    this.layoutSource.next(layout);
  }

  toggleMenu(): void {
    const layout = this.getStorageLayout()
    const updateLayout = {...layout, menu: !layout.menu }

    this.changeLayout(updateLayout);
  }

  toggleFullscreen(): void {
    const layout = this.getStorageLayout()
    const updateLayout = {...layout, fullscreen: !layout.fullscreen }

    this.changeLayout(updateLayout);
  }

  toggleTheme(): void {
    const layout = this.getStorageLayout()
    const updateLayout = {...layout, theme: layout.theme === 'dark' ? 'light' : 'dark' }

    this.changeLayout(updateLayout);
  }


  private getStorageLayout(): LayoutI {
    const layout: LayoutI = environment.layout
    const strLayout = sessionStorage.getItem(LAYOUT)
    if ( strLayout && strLayout.length ) {
      return JSON.parse(strLayout)
    }
    sessionStorage.setItem(LAYOUT, JSON.stringify(layout))
    return layout
  }

  private setStorageLayout(layout: LayoutI): void {
    document.getElementsByTagName('body')[0].setAttribute('class', `theme--${layout.theme}`);
    sessionStorage.setItem(LAYOUT, JSON.stringify(layout))
  }
}
