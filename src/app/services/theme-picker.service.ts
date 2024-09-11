import {Injectable} from '@angular/core';

@Injectable({
              providedIn: 'root'
            })
export class ThemePickerService {

  // constructor(@Inject(DOCUMENT) private document: Document) {}

  themeLinkElement: HTMLLinkElement;

  constructor() {
    this.themeLinkElement     = document.createElement('link');
    this.themeLinkElement.rel = 'stylesheet';
    document.head.appendChild(this.themeLinkElement);
  }

  switchTheme(themeName: string): void {
    this.themeLinkElement.href = `assets/themes/${themeName}/theme.css`;
  }

  // switchTheme(theme: string) {
  //   let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
  //
  //   if (themeLink) {
  //     themeLink.href = 'assets/themes/theme-' + theme + '.scss';
  //   }
  // }

}
