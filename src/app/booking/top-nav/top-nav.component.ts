import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../../authentication/auth.service";
import { Subscription, Subscriber } from "rxjs";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"],
})
export class TopNavComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
