import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './pages/order/order.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "catalogue", component: CatalogueComponent },
  { path: "products/:id", component: ItemComponent },
  { path: "order", component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
