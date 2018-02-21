import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: IAppConfig = {
  routes: {
    signin: 'signin',
    home: 'home',
    error404: '404'
  },
  endpoints: {
    login: 'http://localhost:8080/web-app/api/login',
    saveUYP: 'http://localhost:8080/web-app/api/saveUYPForm',
    findAllUYP: 'http://localhost:8080/web-app/api/findAllUYP'
  },
  endpointsProd: {
    login: 'api/login'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Ismaestro/angular5-example-app'
};
