import {InjectionToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

const server = 'http://localhost:8080/web-app/';

export const AppConfig: IAppConfig = {
  routes: {
    signin: 'signin',
    home: 'home',
    error404: '404'
  },
  endpoints: {
    login: server + 'api/login',
    saveUYP: server + 'api/saveUYPForm',
    findAllUYP: server + 'api/findAllUYP',
    findByUYPId: server + 'api/findByUYPId',
    deleteUYP: server + 'api/deleteUYP',
    saveDyeingOrder: server + 'api/saveDyeingOrderForm',
    findAllDyeingOrder: server + 'api/findAllDyeingOrder',
    findAllDyeingOrderSummary: server + 'api/findAllDyeingOrderSummary',
    searchByShadeNo: server + 'api/searchByShadeNo',
    findAllCount: server + 'api/findAllCount',
    findDORByDOId: server + 'api/findDORByDOId',
    saveDORForm: server + 'api/saveDORForm',
    findSumOfDOR: server + 'api/findSumOfDOR',
    deleteDOR: server + 'api/deleteDOR',
    deleteDyeingOrder: server + 'api/deleteDyeingOrder',
    countOfDOR: server + 'api/countOfDOR',
    findAllYarnType: server + 'api/findAllYarnType',
    logout: server + 'api/logout',
    saveUYDForm: server + 'api/saveUYDForm',
    findAllUYD: server + 'api/findAllUYD'
  },
  endpointsProd: {
    login: 'api/login',
    saveUYP: 'api/saveUYPForm',
    findAllUYP: 'api/findAllUYP',
    findByUYPId: 'api/findByUYPId',
    deleteUYP: 'api/deleteUYP',
    saveDyeingOrder: 'api/saveDyeingOrderForm'
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: 'https://github.com/Ismaestro/angular5-example-app',
  localServerURL: 'http://localhost:8080'
};
