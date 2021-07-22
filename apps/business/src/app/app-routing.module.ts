import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../../../../libs/business/feature/home-page/src/lib/business-feature-home-page.module').then((m) => m.BusinessFeatureHomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
