import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// Reducers
import { appReducers } from './store/app.reducers';

// Modulos
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './auth/register.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase) ,
    AngularFirestoreModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( effectsArr ),
    SharedModule,
    ServiceModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
