import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { SalesFormComponent } from './sales-form/sales-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  { path: 'sales', component: SalesListComponent },
  { path: 'sales/new', component: SalesFormComponent },
  { path: 'sales/:id', component: SalesDetailComponent },
  { path: 'sales/edit/:id', component: SalesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
