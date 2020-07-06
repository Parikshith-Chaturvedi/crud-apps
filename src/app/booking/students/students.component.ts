import { Component, OnInit } from "@angular/core";
import { BookingService } from "../booking.service";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Booking } from "../booking.model";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent implements OnInit {
  bookings: Observable<any>;

  constructor(
    private bookingService: BookingService,
    private db: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.bookings = this.db
      .collection("bookingData")
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc) => {
            return {
              id: doc.payload.doc.id,
              dates: doc.payload.doc.data()["dates"],
              slots: doc.payload.doc.data()["slots"],
              startTime: doc.payload.doc.data()["startTime"],
              endTime: doc.payload.doc.data()["endtTime"],
            };
          });
        })
      );
  }
  onBookingSubmit(form: NgForm) {}
}
