import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent {
  constructor(public tranService: TranslateService) { }

  setLang(lang: string) {
    this.tranService.use(lang);
  }

}
