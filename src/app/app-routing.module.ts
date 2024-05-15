import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [  {path: '',pathMatch:'full' ,redirectTo:'home'} ,
                          {path: 'home', component: HomeComponent},
                          {path: 'about', component: AboutComponent}, 
                          {path: 'catalog', component: CatalogComponent},
                          {path: 'cart', component: CartComponent},
                          {path: 'profile', component: ProfileComponent, 
                          children:[{path:'login',component:LoginComponent}, 
                          {path:'register',component:RegisterComponent}, {path:'user', component:UserDetailsComponent} ] },
                          {path: 'register', component: RegisterComponent},
                          {path: 'product-details/:title', component: ProductDetailsComponent},
                          {path: '**', component: PageNotFoundComponent}, 
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
