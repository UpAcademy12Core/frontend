import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxSelectModule } from 'ngx-select-ex';
<<<<<<< HEAD
import { ProfileComponent } from './profile/profile.component';
=======
import { ValidateComponent } from './validate/validate.component';
>>>>>>> 334e034e542adb21a480bc5314f0797c3a07c203

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
<<<<<<< HEAD
    ProfileComponent
=======
    ValidateComponent
>>>>>>> 334e034e542adb21a480bc5314f0797c3a07c203
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,      
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
    CollapseModule.forRoot(),
    NgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
