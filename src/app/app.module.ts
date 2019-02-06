import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ObserversModule} from '@angular/cdk/observers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import {AppMaterialModule} from './appMaterial.module';
// import {} from './routing.module';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './appRouting.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent
  ],
  imports: [
    ObserversModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
