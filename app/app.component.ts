import { Component,NgModule } from '@angular/core';
import { ProductService } from './products/product.service';

import { Http,HttpModule } from '@angular/http';
import 'rxjs/Rx';//load all features

import { RouterModule, Routes } from '@angular/router';

import {ProductListComponent} from './products/product-list.component';


@Component({          
    selector: 'pm-app', 
    
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>   
    `,   
      
    providers:[ProductService]//,
    //directives:[RouterModule] 
})



export class AppComponent { 
    //constructor(router:Router){}
    pageTitle:string="Acme Product Management";
}
