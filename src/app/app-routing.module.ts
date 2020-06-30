import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";
import { StudentsComponent } from "./booking/students/students.component";
import { AdminComponent } from "./booking/admin/admin.component";
import { AuthGuard } from './authentication/auth.guard';
import { AdminLoginComponent } from './authentication/admin-login/admin-login.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "students", component: StudentsComponent },
  // canActivate: [AuthGuard]
  { path: "admin", component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
