import { Booking } from './booking.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()
export class BookingService {
  private availableBooking: Booking[] = [
    {id:'dates', dates: '12-Mar-2020', slots: [] }
  ];

  constructor(private db: AngularFirestore) {}

  // getAvailableData() {
  //   // return this.availableBooking.slice();
  //   this.db
  //     .collection("bookingData")
  //     .snapshotChanges()
  //     .pipe(
  //       map((docArray) => {
  //         docArray.map((doc) => {
  //           return {
  //             id: doc.payload.doc.id,
  //             dates: doc.payload.doc.data().['dates'],
  //             slots: doc.payload.doc.data().['slots'],
  //           };
  //         });
  //       })
  //     )
  //     .subscribe(result => {
  //       console.log(result);
  //     });
  // }
}
