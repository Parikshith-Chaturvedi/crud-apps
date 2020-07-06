import { Booking } from "./booking.model";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class BookingService {
  private availableBooking: Booking[];
  private bookingRequests: Booking[] = [];
  constructor(private db: AngularFirestore) {}

  fetchAvailableData() {
    // return this.db.collection("bookingData").snapshotChanges();
    // this.db
    //   .collection("bookingData")
    //   .snapshotChanges()
    //   .pipe(
    //     map((docArray) => {
    //       return docArray.map((doc) => {
    //         return {
    //           id: doc.payload.doc.id,
    //           dates: doc.payload.doc.data()["dates"],
    //           slots: doc.payload.doc.data()["slots"],
    //           startTime: doc.payload.doc.data()["startTime"],
    //           endTime: doc.payload.doc.data()["endtTime"],
    //         };
    //       });
    //     })
    //   );
  }

  // private requestSlot(bookingRequests: Booking) {
  //   this.db.collection('requestedSlots').add(bookingRequests);
  // }
  
   // selectTiming(selectedId: string) {
  //    this.requestedSlot = this.availableBooking.find(
  //     (tm) => tm.id === selectedId
  //   );
  // }

  cancelRequest() {}
}
