import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componant/shared/navbar/navbar.component';
import { FooterComponent } from './componant/shared/footer/footer.component';
import { HomeComponent } from './componant/pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Err404Component } from './componant/pages/err404/err404.component';
import { SinglepageComponent } from './componant/pages/singlepage/singlepage.component';
import { LoginComponent } from './componant/user/login/login.component';
import { RegiserComponent } from './componant/user/regiser/regiser.component';
import { RouterModule } from '@angular/router';
import { HomenavComponent } from './componant/pages/homenav/homenav.component';
import { TvshowComponent } from './componant/pages/tvshow/tvshow.component';
import { PeopleComponent } from './componant/pages/people/people.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Err404Component,
    SinglepageComponent,
    LoginComponent,
    RegiserComponent,
    HomenavComponent,
    TvshowComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
