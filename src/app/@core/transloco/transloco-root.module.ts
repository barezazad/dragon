import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import {
  Translation, translocoConfig, TranslocoLoader, TranslocoModule, TRANSLOCO_CONFIG, TRANSLOCO_LOADER
} from '@ngneat/transloco';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) { }

  getTranslation(lang: string): any {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'ar', 'ku'],
        fallbackLang: ['en'],
        defaultLang: 'en',
        reRenderOnLangChange: true, // Remove this option if your application doesn't support changing language in runtime.
        prodMode: environment.production,
      }),
    },
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
  ],
})
export class TranslocoRootModule { }
