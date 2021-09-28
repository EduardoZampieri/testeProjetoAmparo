import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'edit-page',
    loadChildren: () => import('./edit-page/edit-page.module').then( m => m.EditPagePageModule)
  },
  {
    path: 'meditacao-page',
    loadChildren: () => import('./slides/meditacao/meditacao-page/meditacao-page.module').then( m => m.MeditacaoPagePageModule)
  },
  {
    path: 'yoga-page',
    loadChildren: () => import('./slides/yoga/yoga-page/yoga-page.module').then( m => m.YogaPagePageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
