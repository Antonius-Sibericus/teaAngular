import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: "catalogue", component: CatalogueComponent },
  { path: "products/:id", component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
