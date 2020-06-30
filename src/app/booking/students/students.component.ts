import { Component, OnInit } from "@angular/core";
import { BookingService } from "../booking.service";
import { Booking } from "../booking.model";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  bookingData: Observable<any>;
  availableDates: Observable<any>;

  constructor(
    private bookingService: BookingService,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    // this.bookingData = this.bookingService.getAvailableData();
  }
  onBookingSubmit(form: NgForm) {}
}
