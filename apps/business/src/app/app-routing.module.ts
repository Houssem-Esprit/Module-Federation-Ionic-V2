import { ModuleWithProviders, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      // change the import path like transaction
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
      import('../../../../libs/business/feature/home-page/src/lib/business-feature-home-page.module').then((m) => m.BusinessFeatureHomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'transaction',
    loadChildren: () =>
      // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
      import('@module-federation-ionic/shared/feature/transaction').then((m) => m.SharedFeatureTransactionModule),
  },

  { path:'payment', 
  loadChildren: () => loadRemoteModule({
    remoteEntry: `${environment.PAYMENT_APP_ENDPOINT}paymentremoteEntry.js`,
    remoteName:'payment',
    exposedModule: './app-module'
  }).then(m => m.AppModule)
//loadChildren: () => import('mfe-app/app-module').then((m) => {return m.AppModule})
}, 
];

function loadSpecificRouterModule(routes:Routes):ModuleWithProviders<RouterModule>{
  if(window.location.href.includes(environment.BUSINESS_APP_ENDPOINT)){
    return RouterModule.forRoot(routes);
  }else {
    return RouterModule.forChild(routes);
  }
 }

@NgModule({
  imports: [
    loadSpecificRouterModule(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
