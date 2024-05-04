import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {
        path:"",
        component:ProductListComponent,
        title: "Products"
    },
    {
        path:"register",
        component:RegisterComponent,
        title: "Sign up"
    },
    {
        path:"login",
        component:LoginComponent,
        title: "Sign In"
    },
    {
        path:"product/:id",
        component:ProductDetailesComponent,
        title: "Details"
    },
    {
        path:"register",
        component:RegisterComponent,
        title: "Sign up"
    },
    
    {
        path:"cart",
        component:CartComponent,
        title: "Shopping cart"
    },
    {
        path:"**",
        component:NotFoundComponent,
        title: "4O4"
    }
];
