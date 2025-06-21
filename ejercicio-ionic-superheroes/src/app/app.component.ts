import { Component } from '@angular/core';
import { LoadingService } from './core/services/observables/loading.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {  
  public loading$: Observable<boolean>;
  
  constructor(
    private _loadingService: LoadingService,
    private _platform: Platform,
    private _translate: TranslateService
  ) {
    this.loading$ = this._loadingService.loading$;
    this._initTranslations();
  }

  private async _initTranslations() {
    this._translate.addLangs(['en', 'es']);
    this._translate.setDefaultLang('en');

    let langToUse = 'en';

    if (this._platform.is('mobile')) {
      const { value = null } = await Device.getLanguageCode();
      if (value) {
        langToUse = value.substring(0, 2);
      }
    } else {
      const browserLang = this._translate.getBrowserLang();
      if (browserLang && ['en', 'es'].includes(browserLang)) {
        langToUse = browserLang;
      }
    }
    this._translate.use(langToUse && ['en', 'es'].includes(langToUse) ? langToUse : 'en');
  }

}
