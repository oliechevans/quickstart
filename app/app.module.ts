import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import{ProductFilterPipe} from './products/product-filter.pipe';
import{WelcomeComponent} from './home/welcome.component';
import{StarComponent} from './Shared/star.component';
import{ProductDetailComponent} from './products/product-detail.component';

import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from '@angular/router';


const appRoutes: Routes = [
   {path:'products', component:ProductListComponent},
    {path:'welcome', component:WelcomeComponent},
     {path:'products/:id', component:ProductDetailComponent}
]

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,ProductListComponent,ProductFilterPipe,StarComponent,WelcomeComponent,ProductDetailComponent ],
  bootstrap:    [ AppComponent ]  
})
export class AppModule { }
