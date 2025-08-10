import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { UwuwufuComponent } from './components/uwuwufu/uwuwufu.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeScreenComponent
  },
  { 
    path: 'uwuwufu/:id', 
    component: UwuwufuComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
