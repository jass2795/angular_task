import { WishlistComponent } from './modules/wishlist/wishlist.component';
import { AppComponent } from './app.component';
import { CardcontainerComponent } from './modules/cardcontainer/cardcontainer.component';
import { SearchComponent } from './modules/search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: '',
    component: CardcontainerComponent,
    data: { country: 'India'}
  },
  {
    path: 'wishlist', component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
