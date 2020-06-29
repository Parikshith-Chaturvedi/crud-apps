import { Booking } from './booking.model';
import { database } from 'firebase';

export class BookingService {
  private availableBooking: Booking[] = [
    {id:'dates', dates: '12-Mar-2020', slots: '1PM-2PM' }
  ];

  getAvailableData() {
    return this.availableBooking.slice();
  }
}
