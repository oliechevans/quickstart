import {Component} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent{
    pageTitle:string='Product Detail';
    constructor(private _routeParams:ActivatedRoute,private _router:Router){
        this._routeParams.params.subscribe(params => this.pageTitle=params['id'])
    }
    onBack():void{
        this._router.navigate(['products'])
    }
}