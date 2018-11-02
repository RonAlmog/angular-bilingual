import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  langsArray: string[] = ['en', 'fr'];

  constructor(
    public translateService: TranslateService,
    public cookieService: CookieService
    ) {
    translateService.setDefaultLang('en');

    this.translateService.addLangs(this.langsArray); // set the allowed langs
    const browserLang = 'fr'; // this.translateService.getBrowserLang(); // get the browser's lang
    const savedLang = this.cookieService.get('lang'); // read lang from cookie

    if (savedLang) {
      // if there is a saved lang, use it.
      translateService.use(savedLang);
    } else {
      // no saved lang. try browser lang
      if (this.langsArray.indexOf(browserLang) > -1) {
        translateService.use(browserLang);
        this.cookieService.set('lang', browserLang);
      } else {
        // just take the default
        translateService.use('en');
        this.cookieService.set('lang', 'en');
      }
    }
  }

  title = 'app';
}
