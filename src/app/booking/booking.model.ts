export interface Booking {
  id: string;
  dates: string;
  booked?: boolean;
  // slots: string
  slots: Array<any>;
  state?: "booked" | "cancelled" | null;
}
