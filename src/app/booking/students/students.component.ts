import { Component, OnInit } from "@angular/core";
import { BookingService } from "../booking.service";
import { Booking } from "../booking.model";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  bookingData: Observable<any>;
  timings: string[] = ["1PM - 2PM", "2PM - 3PM", "5PM - 6PM"];

  constructor(
    private bookingService: BookingService,
    private db: AngularFirestore,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.bookingData = this.bookingService.getAvailableData();
    this.bookingData = this.db.collection("bookingData").valueChanges();
  }

  onBookingSubmit(form: NgForm) {}
}
