import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './authentication/login/login.component';
import { StudentsComponent } from './booking/students/students.component';
import { AdminComponent } from './booking/admin/admin.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './authentication/auth.service';
import { TopNavComponent } from './booking/top-nav/top-nav.component';
import { BookingService } from './booking/booking.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    AdminComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AuthService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
