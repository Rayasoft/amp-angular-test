import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AppComponent} from './app.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'shoppingCart',
    pathMatch: 'full',
  }, {
    path: 'shoppingCart',
    component: ShoppingCartComponent,
  }, {
    path: '*',
    component: ShoppingCartComponent,
   }, {
   path: '**',
   component: ShoppingCartComponent,
  } ];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
