import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CredentialsModule } from './credentials/credentials.module';
import { LazyCredentialsModule } from './lazy-credentials/lazy-credentials.module';
import { mergeNsAndName } from '@angular/compiler';

const routes: Routes = [
  {
    path: 'lazy-credentials',
    loadChildren: () =>
      import('./lazy-credentials/lazy-credentials.module').then(
        (m) => m.LazyCredentialsModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CredentialsModule,
    LazyCredentialsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
