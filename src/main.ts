import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import AOS from 'aos';

AOS.init({
  duration: 800,
  once: true
});

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
