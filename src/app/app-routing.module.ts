import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DetailComponent } from './layout/detail/detail.component';
import { GamesComponent } from './layout/games/games.component';
import { FunctionsComponent } from './layout/functions/functions.component';
import { BandCardComponent } from './layout/band-card/band-card.component';
import { ProfileComponent } from './layout/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: 'index',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'games', pathMatch: 'full' },
      {
        path: 'games',
        data:{
          title:'Games'
        },
        component: GamesComponent,
      },
      {
        path: 'functions',
        component: FunctionsComponent,
        data:{
          title:'Functions'
        }

      },
      {
        path: 'bandCard',
        data:{
          title:'Band Card'
        },
        component: BandCardComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data:{
          title:'Profile'
        }
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: '**',           // 找不到页面
        redirectTo: 'games',
        pathMatch: 'full'
      }
  
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
