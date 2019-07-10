import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './Services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FoorOhFoorComponent } from './foor-oh-foor/foor-oh-foor.component';
import { AuthGuard } from './Services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './Services/user.service';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes: Routes = [
  { path: 'appareils', canActivate:[AuthGuard], component: AppareilViewComponent},
  { path: 'appareils/:id', canActivate:[AuthGuard], component: SingleAppareilComponent},
  { path: 'edit', canActivate:[AuthGuard], component: EditAppareilComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'users', component: UserListComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: '', component: AppareilViewComponent},
  { path: 'not-found', component: FoorOhFoorComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FoorOhFoorComponent,
    EditAppareilComponent,
    NewUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard, 
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
