import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: '',
    redirectTo: 'business',
    pathMatch: 'full',
  },

  { path:'business', 
  loadChildren: () => loadRemoteModule({
    remoteEntry: `${environment.BUSINESS_APP_ENDPOINT}businessremoteEntry.js`,
    remoteName:'business',
    exposedModule: './app-module'
  }).then(m => m.AppModule)
//loadChildren: () => import('mfe-app/app-module').then((m) => {return m.AppModule})
}, 
 /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}