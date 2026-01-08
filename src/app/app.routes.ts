import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/pages/tabs/tabs.routes').then((m) => m.routes),
  },
];
