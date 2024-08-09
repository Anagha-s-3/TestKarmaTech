import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { AppRoutingModule } from './app-routing.module';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

@NgModule({
  declarations: [
  
    SalesListComponent,
    SalesDetailComponent,
    SalesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())  // Configures HTTP client
  ]
})
export class AppModule { ngDoBootstrap() {
  bootstrapApplication(AppComponent);}
}
