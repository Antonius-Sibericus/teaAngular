import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './pages/order/order.component';
import { ItemComponent } from './pages/item/item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationDirective } from './directives/validation-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CatalogueComponent,
    ProductComponent,
    OrderComponent,
    ItemComponent,
    ValidationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
