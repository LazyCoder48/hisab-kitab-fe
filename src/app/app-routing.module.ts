import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent}        from "./home/home.component";
import {authFnGuard}          from "./guards/auth-fn.guard";

const routes: Routes = [
  {
    path        : "auth",
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path       : "app/home",
    component  : HomeComponent,
    canActivate: [authFnGuard],
  }
];

@NgModule({
            imports: [RouterModule.forRoot(routes, {
              useHash              : true,
              onSameUrlNavigation  : "reload",
              enableViewTransitions: true
            })],
            exports: [RouterModule]
          })
export class AppRoutingModule {}
