import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent {
  constructor(
    public tranService: TranslateService,
    public cookieService: CookieService) { }

  setLang(lang: string) {
    this.tranService.use(lang);
    this.cookieService.set('lang', lang);
    
  }

}
