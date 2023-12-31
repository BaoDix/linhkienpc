import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

const routes: Routes = [
  {path:'/', component:HomeComponent},
  {path:'/header', component:HeaderComponent},
  {path:'/footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
