import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './componant/pages/err404/err404.component';
import { HomeComponent } from './componant/pages/home/home.component';
import { PeopleComponent } from './componant/pages/people/people.component';
import { SinglepageComponent } from './componant/pages/singlepage/singlepage.component';
import { TvshowComponent } from './componant/pages/tvshow/tvshow.component';
import { LoginComponent } from './componant/user/login/login.component';
import { RegiserComponent } from './componant/user/regiser/regiser.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegiserComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'singlepage', component: SinglepageComponent },
  { path: 'singlepage/:id', component: SinglepageComponent },
  { path: 'tvshow', component: TvshowComponent },
  { path: 'tvshow/:id', component: TvshowComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PeopleComponent },
  { path: '**', component: Err404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
