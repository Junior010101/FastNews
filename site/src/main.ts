import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// ✅ Adiciona suporte a português (Brasil)
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt); // 📌 Registra o locale 'pt-BR'

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
