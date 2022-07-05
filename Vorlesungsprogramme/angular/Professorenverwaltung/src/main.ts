import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// Framework definition:
// - is a singleton
// - uses the Hollywood principal: "Dont call us, well call you"
// - it creates and manages all Objects, components and services
// - we write constructors, framework calls them
// - makes sure all dependency are met between Components and Services -> Dependency injection
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
