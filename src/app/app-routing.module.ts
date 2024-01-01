import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { PopulerComponent } from './pages/populer/populer.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'search/:keyword',
    component:SearchComponent,
    pathMatch:'full'
  },
  {
    path:'anime/:id',
    component:AnimeComponent,
    pathMatch:'full'
  },
  {
    path:'populer',
    component:PopulerComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
