import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppsComponent } from './apps/apps.component';
import { ComponentsComponent } from './components/components.component';
import { EmailComponent } from './email/email.component';
import { FormComponent } from './form/form.component';
import { MapsComponent} from './maps/maps.component';
import { MenuComponent} from './menu/menu.component';
import { PagesComponent} from './pages/pages.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'email', component: EmailComponent },
  { path: 'form', component: FormComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'pages', component: PagesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}