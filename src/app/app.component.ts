import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    public cookieService: CookieService
    ) {
    translate.setDefaultLang('en');
    const savedLang = this.cookieService.get('lang');
    if (savedLang) {
      translate.use(savedLang);
    } else {
      translate.use('en');
      this.cookieService.set('lang', 'en');
    }
  }
  title = 'app';
}
