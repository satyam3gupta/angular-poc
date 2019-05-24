import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppsComponent } from './apps/apps.component';
import { SharedService } from './services/shared-service.service';
import { ComponentsComponent } from './components/components.component';
import { EmailComponent } from './email/email.component';
import { FormComponent } from './form/form.component';
import { MapsComponent } from './maps/maps.component';
import { PagesComponent } from './pages/pages.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    AppsComponent,
    ComponentsComponent,
    EmailComponent,
    FormComponent,
    MapsComponent,
    PagesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
